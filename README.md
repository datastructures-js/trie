# @datastructures-js/trie

[![build:?](https://travis-ci.org/datastructures-js/trie.svg?branch=master)](https://travis-ci.org/datastructures-js/trie) 
[![npm](https://img.shields.io/npm/v/@datastructures-js/trie.svg)](https://www.npmjs.com/package/@datastructures-js/trie)
[![npm](https://img.shields.io/npm/dm/@datastructures-js/trie.svg)](https://www.npmjs.com/package/@datastructures-js/trie) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/@datastructures-js/trie)

Trie implementation in javascript. Each Trie node holds one character of a word.

<img src="https://user-images.githubusercontent.com/6517308/121813242-859a9700-cc6b-11eb-99c0-49e5bb63005b.jpg">

<table>
<tr><th>Trie</th></tr>
<tr><td><img width="500" alt="Trie" src="https://user-images.githubusercontent.com/6517308/42425010-dc9f20ca-82db-11e8-8f78-1efe6959df5f.png">
</td></tr>
</table>

# Contents
* [Install](#install)
* [require](#require)
* [import](#import)
* [API](#api)
  * [constructor](#constructor)
  * [.insert(value)](#insertvalue)
  * [.has(value)](#hasvalue)
  * [.find(value)](#findvalue)
  * [.remove(value)](#removevalue)
  * [.forEach(cb)](#foreachcb)
  * [.toArray()](#toarray)
  * [.wordsCount()](#wordsCount)
  * [.nodesCount()](#nodesCount)
  * [.clear()](#clear)
  * [Trie.fromArray(list)](#triefromarraylist)
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

### .insert(value)
insert the string form of value (`value.toString()`) into the trie.

*Note: the empty string is not a default word in the trie. empty word can be added by explicitly calling `.insert('')`*

<table>
  <tr>
    <th align="center">params</th>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">value: { toString: () => string }</td>
    <td align="center">Trie</td>
    <td align="center">O(k): k = length of string value</td>
  </tr>
</table>

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

### .has(value)
checks if a word exists in the trie.

<table>
  <tr>
    <th align="center">params</th>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">value: { toString: () => string }</td>
    <td align="center">boolean</td>
    <td align="center">O(k): k = length of string value</td>
  </tr>
</table>

```js
dictionary.has('hi'); // true
dictionary.has('sky'); // false
```

### .find(value)
finds a word in the trie and returns the node of its last character.

<table>
  <tr>
    <th align="center">params</th>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">value: { toString: () => string }</td>
    <td align="center">TrieNode</td>
    <td align="center">O(k): k = length of string value</td>
  </tr>
</table>

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

### .remove(value)
removes a word from the trie.

<table>
  <tr>
    <th align="center">params</th>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">value: { toString: () => string }</td>
    <td align="center">string: the removed word</td>
    <td align="center">O(k): k = length of string value</td>
  </tr>
</table>

```js
dictionary.remove('hi'); // hi

// none existing word
dictionary.remove('sky'); // null
```

### .forEach(cb)
traverses all words in the trie.

<table>
  <tr>
    <th align="center">params</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">cb: (word: string) => void</td>
    <td align="center">O(n): n = number of nodes in the trie</td>
  </tr>
</table>

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

### .toArray()
converts the trie into an array of words.

<table>
  <tr>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">string[]</td>
    <td align="center">O(n): n = number of nodes in the trie</td>
  </tr>
</table>

```js
console.log(dictionary.toArray());

// ['hit', 'hide', 'hello', 'sand', 'safe', 'noun', 'name']
```

### .wordsCount()
gets the count of words in the trie.

<table>
  <tr>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">number</td>
    <td align="center">O(1)</td>
  </tr>
</table>

```js
console.log(dictionary.wordsCount()); // 7
```

### .nodesCount()
gets the count of nodes in the trie.

<table>
  <tr>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">number</td>
    <td align="center">O(1)</td>
  </tr>
</table>

```js
console.log(dictionary.nodesCount()); // 23
```

### .clear()
clears the trie.

<table>
 <tr>
  <th>runtime</th>
 </tr>
 <tr>
  <td>O(1)</td>
 </tr>
</table>

```js
dictionary.clear();
console.log(dictionary.wordsCount()); // 0
console.log(dictionary.nodesCount()); // 1
```

### Trie.fromArray(list)
converts an existing array of values into a trie.

<table>
 <tr>
  <th>params</th>
  <th>return</th>
  <th>runtime</th>
 </tr>
 <tr>
  <td>list: string[]</td>
  <td>boolean</td>
  <td>O(n * k)</td>
 </tr>
</table>

```js
const numbersTrie = Trie.fromArray([1, 32, 123, 21, 222, 132, 111, 312]);

console.log(numbersTrie.wordsCount()); // 8
console.log(numbersTrie.has('132')); // true
console.log(numbersTrie.has(123)); // true
```

### TrieNode

#### new TrieNode(char)

<table>
  <tr><th>params</th></tr>
  <tr><td>char: string</td></tr>
</table>

#### .isRoot()

<table>
 <tr><th>return</th></tr>
 <tr><td>boolean</td></tr>
</table>

#### .getChar()

<table>
 <tr><th>return</th></tr>
 <tr><td>string</td></tr>
</table>

#### .getParent()

<table>
 <tr><th>return</th></tr>
 <tr><td>TrieNode</td></tr>
</table>

#### .setParent(parent)

<table>
  <tr><th>params</th><th>return</th></tr>
  <tr><td>parent: TrieNode</td><td>TrieNode</td></tr>
</table>

#### .isEndOfWord()

<table>
 <tr><th>return</th></tr>
 <tr><td>boolean</td></tr>
</table>

#### .setEndOfWord(isEndOfWord)

<table>
  <tr><th>params</th><th>return</th></tr>
  <tr><td>isEndOfWord: boolean</td>
  <td>TrieNode</td></tr>
</table>

#### .getChild(char)

<table>
 <tr><th>params</th><th>return</th></tr>
 <tr><td>char: string</td><td>TrieNode</td></tr>
</table>

#### .hasChild(char)

<table>
 <tr><th>params</th><th>return</th></tr>
 <tr><td>char: string</td><td>boolean</td></tr>
</table>

#### .childrenCount()

<table>
 <tr><th>return</th></tr>
 <tr><td>number</td></tr>
</table>

## Build
```
grunt build
```

## License
The MIT License. Full License is [here](https://github.com/datastructures-js/trie/blob/master/LICENSE)
