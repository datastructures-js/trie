# @datastructures-js/trie

[![npm](https://img.shields.io/npm/v/@datastructures-js/trie.svg)](https://www.npmjs.com/package/@datastructures-js/trie)
[![npm](https://img.shields.io/npm/dm/@datastructures-js/trie.svg)](https://www.npmjs.com/package/@datastructures-js/trie) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/@datastructures-js/trie)

Trie implementation in javascript. Each Trie node holds one character of a word.

<img src="https://user-images.githubusercontent.com/6517308/121813242-859a9700-cc6b-11eb-99c0-49e5bb63005b.jpg">

# Contents
* [Install](#install)
* [require](#require)
* [import](#import)
* [API](#api)
  * [constructor](#constructor)
  * [insert](#insert)
  * [has](#has)
  * [find](#find)
  * [remove](#remove)
  * [forEach](#foreach)
  * [toArray](#toarray)
  * [wordsCount](#wordsCount)
  * [nodesCount](#nodesCount)
  * [clear](#clear)
  * [Trie.fromArray](#triefromarray)
  * [TrieNode](#trienode)
 * [Build](#build)
 * [License](#license)

## Install

```sh
npm install --save @datastructures-js/trie
```

## require

```js
const { Trie, TrieNode } = require('@datastructures-js/trie');
```

## import

```js
import { Trie, TrieNode } from '@datastructures-js/trie';
```

## API

### constructor

```js
const dictionary = new Trie();
```

### insert
insert the string form of value (`value.toString()`) into the trie.

*Note: the empty string is not a default word in the trie. empty word can be added by explicitly calling `.insert('')`*

```js
dictionary
  .insert('hi')
  .insert('hit')
  .insert('hide')
  .insert('hello')
  .insert('sand')
  .insert('safe')
  .insert('noun')
  .insert('name');
```

### has
checks if a word exists in the trie.

```js
dictionary.has('hi'); // true
dictionary.has('sky'); // false
```

### find
finds a word in the trie and returns the node of its last character.

```js
const hi = dictionary.find('hi');
// hi.getChar() = 'i'
// hi.getParent().getChar() = 'h'

const safe = dictionary.find('safe');
// safe.getChar() = 'e'
// safe.getParent().getChar() = 'f'
// safe.getParent().getParent().getChar() = 'a'

const nothing = dictionary.find('nothing'); // null
```

### remove
removes a word from the trie.

```js
dictionary.remove('hi'); // hi

// none existing word
dictionary.remove('sky'); // null
```

### forEach
traverses all words in the trie.

```js
dictionary.forEach((word) => console.log(word));

/*
hit
hide
hello
sand
safe
noun
name
*/
```

### toArray
converts the trie into an array of words.

```js
console.log(dictionary.toArray());

// ['hit', 'hide', 'hello', 'sand', 'safe', 'noun', 'name']
```

### wordsCount
gets the count of words in the trie.

```js
console.log(dictionary.wordsCount()); // 7
```

### nodesCount
gets the count of nodes in the trie.

```js
console.log(dictionary.nodesCount()); // 23
```

### clear
clears the trie.

```js
dictionary.clear();
console.log(dictionary.wordsCount()); // 0
console.log(dictionary.nodesCount()); // 1
```

### Trie.fromArray
converts an existing array of values into a trie.

```js
const numbersTrie = Trie.fromArray([1, 32, 123, 21, 222, 132, 111, 312]);

console.log(numbersTrie.wordsCount()); // 8
console.log(numbersTrie.has('132')); // true
console.log(numbersTrie.has(123)); // true
```

### TrieNode

#### isRoot()
checks if node is root.

#### isLeaf()
checks if has no children.

#### getChar()
gets the node's char.

#### getParent()
gets the node's parent node.

#### setParent(node: TrieNode)
sets the node's parent node.

#### isEndOfWord()
checks if node's char is last in a word.

#### setEndOfWord(endOfWord: boolean)
sets if node's char is last in a word.

#### getChild(char: string)
gets the node's child from a char.

#### hasChild(char: string)
checks if the node has a child from a char.

#### childrenCount()
gets the node's children count.

## Build
```
grunt build
```

## License
The MIT License. Full License is [here](https://github.com/datastructures-js/trie/blob/master/LICENSE)
