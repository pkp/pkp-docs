---
book: dev-documentation
version: 3.4
title: Exercise 8 - Configure Remotes
---

# Exercise 8 - Configure Remotes

Git submodules are used to share code between the three applications: OJS, OMP and OPS. This exercise is designed to help you learn how to work with these submodules and create pull requests to several repositories at once.

> 💡 It can be challenging to keep submodules in sync, even for experienced developers. Once you have gone through the process a few times, it will become familiar. Until then, don't be afraid to ask for help!

When you're ready to commit your changes, you need to identify which repositories have been modified. Your work may require commits and pull requests to one or several of the following repositories:

- Changes to the [OJS](https://github.com/pkp/ojs), [OMP](https://github.com/pkp/omp) or [OPS](https://github.com/pkp/ops) repositories.
- Changes to files under `lib/pkp` are committed to the [pkp-lib](https://github.com/pkp/pkp-lib/) repository.
- Changes to files under `lib/ui-library` are committed to the ui-library repository.
- Some plugins, such as themes, are stored in their own repositories and may need commits to those repositories.

# Configure remotes

Your work will need to be committed in branches for each of these repositories, pushed up to your fork on GitHub, and separate pull requests will be needed for each repository. In order to do this, you will need to make sure that your remotes are set up to push and pull from PKP's repository and your fork.

> 💡 The instructions below use the command line, but you may use a GUI tool to do the same thing. The commands are written assuming that you have configured a SSH key on GitHub. If not, follow these steps to [add a SSH key](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account) or modify the instructions below to use the `http` URL to push and pull from remote repositories.

First, open your terminal, navigate to the OJS root directory, and check your remotes.

```jsx
cd <ojs-root-directory>
git remote -v
```

If you have cloned your fork, the result will look like this, but instead of `NateWr` it should be your GitHub username.

```jsx
origin git@github.com:NateWr/ojs.git (fetch)
origin git@github.com:NateWr/ojs.git (push)
```

Use the following command to add the PKP library as an upstream remote.

```jsx
git remote add upstream git@github.com:pkp/ojs.git
```

Check your remotes again to make sure that this worked.

```jsx
git remote -v
```

The result should look like this.

```jsx
origin git@github.com:NateWr/ojs.git (fetch)
origin git@github.com:NateWr/ojs.git (push)
upstream git@github.com:pkp/ojs.git (fetch)
upstream git@github.com:pkp/ojs.git (push)
```

Now check your remotes for the pkp-lib repository.

```jsx
cd lib/pkp
git remote -v
```

If you followed the steps in [Getting Started](../getting-started) and have not yet configured your remotes for the submodules, it may look something like this.

```jsx
origin https://github.com/pkp/pkp-lib.git (fetch)
origin https://github.com/pkp/pkp-lib.git (push)
```

Use the command `git remote set-url origin <url>` to set the `origin` to your fork of pkp-lib. Then use `git remote add upstream <url>` to set the `upstream` to PKP's repository.

When you check your remotes with `git remote -v`, it should look like this.

```jsx
origin git@github.com:NateWr/pkp-lib.git (fetch)
origin git@github.com:NateWr/pkp-lib.git (push)
upstream git@github.com:pkp/pkp-lib.git (fetch)
upstream git@github.com:pkp/pkp-lib.git (push)
```

Next, navigate to the `lib/ui-library` and run the same configuration steps so that the remotes are pointing to your fork as the `origin` and PKP's repository as the `upstream`.

When you want to sync your `main` branch with PKP's `main` branch, you can pull from the `upstream` remote and push to the `origin` remote. 

```jsx
# Update the app
git checkout main
git pull upstream main
git push

# Update the pkp-lib submodule
cd lib/pkp
git checkout main
git pull upstream main
git push

# Update the ui-library submodule
cd ../ui-library
git checkout main
git pull upstream main
git push

cd ../..
```

# Submodule commits

Add an empty text file, `example.txt` to the root directory of each of the `lib/pkp` and `lib/ui-library` repositories. (Do not commit the work.)

Review the documentation for how to [prepare pull requests for testing](../../../testing/en/continuous-integration#prepare-pull-requests-for-testing). Take special note of the section on branch naming. Then for each submodule, create a branch, commit your change, and push that branch.

Make a pull request with your changes for each of the [pkp-lib](https://github.com/pkp/pkp-lib/) and [ui-library](https://github.com/pkp/ui-library) repositories. These repositories do not have continuous integration testing.

Use what you learned in the documentation about the special commit to add a submodule commit to your OJS repository and push that up to your branch.

When you have finished, your pull request to the OJS repository should have the new submodule commit and the tests should begin to run.

> 💡 If your OJS repository has a merge conflict, and the effected files are `lib/pkp` or `lib/ui-library`, you will need to sync the submodules with PKP's main branch and make another submodule commit.

When all of the tests have passed for your pull request, you are ready to [ask for a code review.](../codereviews)
