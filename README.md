# @datastructures-js/trie

[![build:?](https://travis-ci.org/datastructures-js/trie.svg?branch=master)](https://travis-ci.org/datastructures-js/trie) 
[![npm](https://img.shields.io/npm/v/@datastructures-js/trie.svg)](https://www.npmjs.com/package/@datastructures-js/trie)
[![npm](https://img.shields.io/npm/dm/@datastructures-js/trie.svg)](https://www.npmjs.com/package/@datastructures-js/trie) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/@datastructures-js/trie)

Trie implementation in javascript. Each Trie node holds one character of a word.

<table>
<tr><th>Trie</th></tr>
<tr><td><img width="500" alt="Trie" src="https://user-images.githubusercontent.com/6517308/42425010-dc9f20ca-82db-11e8-8f78-1efe6959df5f.png">
</td></tr>
</table>

# Table of Contents
* [Install](#install)
* [API](#api)
  * [require](#require)
  * [import](#import)
  * [Construction](#construction)
  * [.insert(word)](#insertword)
  * [.has(word)](#hasword)
  * [.find(word)](#findword)
  * [.remove(word)](#removeword)
  * [.forEach(cb)](#foreachcb)
  * [.toArray()](#toarray)
  * [.wordsCount()](#wordsCount)
  * [.nodesCount()](#nodesCount)
  * [.clear()](#clear)
  * [TrieNode](#trienode)
 * [Build](#build)
 * [License](#license)

## Install

```sh
npm install --save @datastructures-js/trie
```

## API

### require

```js
const { Trie, TrieNode } = require('@datastructures-js/trie');
```

### import

```js
import { Trie, TrieNode } from '@datastructures-js/trie';
```

### Construction

```js
const dictionary = new Trie();
```

### .insert(value)
insert the string form of value (`value.toString()`) into the trie.

*Note: the empty string is not a default word in the trie. You can add the empty word by explicitly calling `.insert('')`*

<table>
  <tr>
    <th align="center">params</th>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">value: any (except null or undefined)</td>
    <td align="center">Trie</td>
    <td align="center">O(k) : k = length of string value</td>
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

### .has(word)
checks if a word exists in the trie.

<table>
  <tr>
    <th align="center">params</th>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">value: any (except null or undefined)</td>
    <td align="center">boolean</td>
    <td align="center">O(k) : k = length of string value</td>
  </tr>
</table>

```js
englishLang.has('hi'); // true
englishLang.has('sky'); // false
```

### .find(word)
finds a word in the trie and returns the node of its last character.

<table>
  <tr>
    <th align="center">params</th>
    <th align="center">return</th>
    <th align="center">runtime</th>
  </tr>
  <tr>
    <td align="center">value: any (except null or undefined)</td>
    <td align="center">TrieNode</td>
    <td align="center">O(k) : k = length of string value</td>
  </tr>
</table>

```js
const hi = englishLang.find('hi');
// hi.getChar() = 'i'
// hi.getParent().getChar() = 'h'

const safe = englishLang.find('safe');
// safe.getChar() = 'e'
// safe.getParent().getChar() = 'f'
// safe.getParent().getParent().getChar() = 'a'
```

### .remove(word)
removes a word from the trie.

<table>
 <tr><th align="center" colspan="2">params</th></tr>
 <tr><td><b>name</b></td><td><b>type</b></td></tr>
  <tr><td>word</td><td>string</td></tr>
</table>

<table>
 <tr><th>return</th></tr>
 <tr><td>boolean</td></tr>
</table>

<table>
 <tr><th>runtime</th></tr>
 <tr><td>O(k) : k = length of the word</td></tr>
</table>

#### Example

```js
englishLang.remove('hi'); // true - hi removed
englishLang.remove('sky'); // false - nothing is removed
```

### .forEach(cb)
traverses all words in the trie.

<table>
 <tr><th align="center" colspan="2">params</th></tr>
 <tr><td><b>name</b></td><td><b>type</b></td><td><b>description</b></td></tr>
  <tr><td>cb</td><td>function</td><td>called with each word in the trie</td></tr>
</table>

<table>
 <tr><th>runtime</th></tr>
 <tr><td>O(n) : n = number of nodes in the trie</td></tr>
</table>

```js
englishLang.forEach((word) => console.log(word));

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
 <tr><th>return</th><th>description</th></tr>
 <tr><td>array</td><td>a list of all the words in the trie</td></tr>
</table>

<table>
 <tr><th>runtime</th></tr>
 <tr><td>O(n) : n = number of nodes in the trie</td></tr>
</table>

#### Example

```js
console.log(englishLang.toArray());

// ['hit', 'hide', 'hello', 'sand', 'safe', 'noun', 'name']
```

### .wordsCount()
gets the count of words in the trie.

<table>
 <tr><th>return</th></tr>
 <tr><td>number</td></tr>
</table>

<table>
 <tr><th>runtime</th></tr>
 <tr><td>O(1)</td></tr>
</table>

#### Example

```js
console.log(englishLang.wordsCount()); // 7
```

### .nodesCount()
gets the count of nodes in the trie.

<table>
 <tr><th>return</th></tr>
 <tr><td>number</td></tr>
</table>

<table>
 <tr><th>runtime</th></tr>
 <tr><td>O(1)</td></tr>
</table>

#### Example

```js
console.log(englishLang.nodesCount()); // 23
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

#### Example

```js
englishLang.clear();
console.log(englishLang.wordsCount()); // 0
console.log(englishLang.nodesCount()); // 1
```

### TrieNode

#### .getChar()
returns the node's char.

<table>
 <tr><th>return</th></tr>
 <tr><td>string</td></tr>
</table>

#### .getParent()
returns the parent node.

<table>
 <tr><th>return</th></tr>
 <tr><td>TrieNode</td></tr>
</table>

#### .isEndOfWord()
check if a node is an end of a word.

<table>
 <tr><th>return</th></tr>
 <tr><td>boolean</td></tr>
</table>

#### .getChild(char)
returns the child node of a char.

<table>
 <tr><th>return</th></tr>
 <tr><td>TrieNode</td></tr>
</table>

#### .hasChild(char)
check the node has a child char.

<table>
 <tr><th>return</th></tr>
 <tr><td>boolean</td></tr>
</table>

#### .childrenCount()
returns the number of children nodes.

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
