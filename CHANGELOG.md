# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
## [4.2.2] - 2022-08-15
### Fixed
- add types to package.json

## [4.2.1] - 2022-06-06

### Fixed
- readme.

## [4.2.0] - 2021-12-01

### Added
- `isLeaf()` to TrieNode: leaf is a node that has no children.

## [4.2.0] - 2021-12-01

### Added
- `isLeaf()` to TrieNode: leaf is a node that has no children.

### Fixed
- `remove(word)` two edge cases that were not covered:
  1. the case when removing a word that does not exist, count should not change.
  2. the case when another word overlaps with the word being deleted, it was removing all the word chars regardless if one char is an end of another word.

  **Credit:** 王悠悠 https://github.com/anson09

## [4.1.1] - 2021-06-20

### Fixed
- index.d.ts

## [4.1.0] - 2021-06-20

### Added
- typescript.

## [4.0.1] - 2021-02-25

### Fixed
- README

## [4.0.0] - 2021-02-23

### Changed
- `.insert` can be chained.
- `.remove` now returns the removed word. 
- better handling for null & undefined.

### Added
- `.fromArray` static function to convert a list into a trie.

### Fixed
- jsdoc
- README

## [3.0.1] - 2020-04-18
### Fixed
- jsdoc
- README

## [3.0.0] - 2020-04-09
### Changed
- renamed `.getWordsCount()` & `.getNodesCount()` to `.wordsCount()` & `.nodesCount()`.

### Fixed
- README
- jsdoc

## [2.0.0] - 2020-03-24
### Changed
- new implementation and interface
