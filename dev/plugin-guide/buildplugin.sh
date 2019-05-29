#!/bin/bash

# Fail on first error
set -e

if [ -z "$2" ]; then
	echo "Usage: $0 <repository url> <tag>"
	exit 1
fi

REPOURL=$1
TAG=$2

if [[ $REPOURL =~ ^http.*/([^/]+)\.git$ ]]; then
	REPONAME=${BASH_REMATCH[1]};
else
	echo "The repository URL was not provided in an expected format!"
	echo "Use e.g. \"https://github.com/pkp/some-plugin-name.git\""
	exit 1
fi

TMPDIR=`mktemp -d ${REPONAME}.XXXXXX` || exit 1
OUTPUTFILE=${REPONAME}-${TAG}.tar.gz

cd ${TMPDIR}

echo -n "Cloning \"${REPOURL}\"... "
git -c advice.detachedHead=false clone ${REPOURL} -q -b ${TAG}
echo "Done."
echo -n "Building \"${OUTPUTFILE}\"... "
tar czf ${OUTPUTFILE} --exclude=${REPONAME}/.git ${REPONAME}
echo "Done."

cd ..

mv -i ${TMPDIR}/${OUTPUTFILE} .
rm -rf ${TMPDIR}

echo "Successfully built \"${OUTPUTFILE}\"."
echo -n "MD5 sum: "
md5sum ${OUTPUTFILE} | cut -f 1 -d " "
