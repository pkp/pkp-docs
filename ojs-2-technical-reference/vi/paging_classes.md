# Paging Classes

Several classes facilitate the paged display of lists of items, such as submissions:

- `ItemIterator`
- `ArrayItemIterator`
- `DAOResultFactory`
- `DBRowIterator`
- `VirtualArrayIterator`

The `ItemIterator` class is an abstract iterator, for which specific implementations are provided by the other classes. All DAO classes returning subclasses of ItemIterator should be treated as though they were returning ItemIterators.

Each iterator represents a single “page" of results. For example, when fetching a list of submissions from `SectionEditorSubmissionDAO`, a range of desired row numbers can be supplied; the `ItemIterator` returned (specifically an `ArrayIterator`) contains information about that range.

`ArrayItemIterator` and `VirtualArrayIterator` provide support for iterating through PHP arrays; in the case of `VirtualArrayIterator`, only the desired page's entries need be supplied, while `ArrayItemIterator` will take the entire set of results as a parameter and iterate through only those entries on the current page.

`DAOResultFactory`, the most commonly used and preferred `ItemIterator` subclass, takes care of instantiating Model objects corresponding to the results using a supplied DAO and instantiation method.

`DBRowIterator` is an `ItemIterator` wrapper around the ADODB result structure.

