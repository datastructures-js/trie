# @datastructures-js/trie

[![build:?](https://travis-ci.org/datastructures-js/trie.svg?branch=master)](https://travis-ci.org/datastructures-js/trie) 
[![npm](https://img.shields.io/npm/v/@datastructures-js/trie.svg)](https://www.npmjs.com/package/@datastructures-js/trie)
[![npm](https://img.shields.io/npm/dm/@datastructures-js/trie.svg)](https://www.npmjs.com/package/@datastructures-js/trie) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/@datastructures-js/trie)

Trie implementation in javascript. Each Trie node holds one character of a word.

<img width="500" alt="Trie" src="https://user-images.githubusercontent.com/6517308/42425010-dc9f20ca-82db-11e8-8f78-1efe6959df5f.png">

# Table of Contents
* [Install](#install)
* [API](#api)
  * [require](#require)
  * [import](#import)
  * [Creating a Trie](#create-a-trie)
  * [.insert(word)](#insertword)
  * [.has(word)](#hasword)
  * [.find(word)](#findword)
  * [.remove(word)](#removeword)
  * [.forEach(cb)](#foreachcb)
  * [.toArray()](#toarray)
  * [.getWordsCount()](#getwordscount)
  * [.getNodesCount()](#getnodescount)
  * [.clear()](#clear)
 * [Build](#build)
 * [License](#license)

## Install

```sh
npm install --save @datastructures-js/trie
```

## API

### require

```js
const Trie = require('@datastructures-js/trie');
```

### import

```js
import Trie from '@datastructures-js/trie';
```

### Create a Trie

```js
// example
const englishLang = new Trie();
```

### .insert(word)
insert a string word into the trie.

<table>
 <tr>
  <th>runtime</th>
  <th>params</th>
  <th>return</th>
 </tr>
 <tr>
  <td>O(k) : k is the length of word</td>
  <td>
   word: {string}
  </td>
  <td style="text-align: center;"><b>TrieNode</b>
   <br /><br/>
    <b>.getChar()</b>: {string} returns the node's char.<br/>
    <b>.getParent()</b>: {TrieNode} returns the parent node.<br/>
    <b>.isEndOfWord()</b> {boolean} check if a node donates an end of a word.<br/>
    <b>.getChild(char)</b>: {TrieNode} returns the child node of a char<br/>
    <b>.hasChild(char)</b>: {boolean} check the node has a child char.<br/>
    <b>.childrenCount()</b>: {number} returns the number of children nodes.<br/>
  </td>
 </tr>
</table>

```js
englishLang.insert('hi');
englishLang.insert('hit');
englishLang.insert('hide');
englishLang.insert('hello');
englishLang.insert('sand');
englishLang.insert('safe');
englishLang.insert('noun');
englishLang.insert('name');
```

### .has(word)
checks if a word exists in the trie.

<table>
 <tr>
  <th>runtime</th>
  <th>params</th>
  <th>return</th>
 </tr>
 <tr>
  <td>O(k) : k is the length of word</td>
  <td>
   word: {string}
  </td>
  <td>{boolean}
  </td>
 </tr>
</table>

```js
englishLang.has('hi'); // true
englishLang.insert('sky'); // false
```

### .find(word)
finds a word in the trie and returns the node of its last character.

<table>
 <tr>
  <th>runtime</th>
  <th>params</th>
  <th>return</th>
 </tr>
 <tr>
  <td>O(k) : k is the length of word</td>
  <td>
   word: {string}
  </td>
  <td>{TrieNode}
  </td>
 </tr>
</table>

```js
const hi = englishLang.find('hi');
// hi.getChar() = 'i'
// hi.getParent().getChar() = 'h'

const safe = englishLang.find('safe');
// safe.getChar() = 'e'
// safe..getParent().getChar() = 'f'
// safe..getParent().getParent().getChar() = 'a'
```

### .remove(word)
removes a word from the trie.

<table>
 <tr>
  <th>runtime</th>
  <th>params</th>
  <th>return</th>
 </tr>
 <tr>
  <td>O(k) : k is the length of word</td>
  <td>
   word: {string}
  </td>
  <td>{boolean}
  </td>
 </tr>
</table>

```js
englishLang.remove('hi'); // true - hi removed
englishLang.remove('sky'); // false - nothing is removed
```

### .forEach(cb)
traverses all words in the trie.

<table>
 <tr>
  <th>runtime</th>
  <th>params</th>
 </tr>
 <tr>
  <td>O(n) : n is the number of nodes in the trie</td>
  <td>
   cb: {function(word)}
  </td>
 </tr>
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
 <tr>
  <th>runtime</th>
  <th>return</th>
 </tr>
 <tr>
  <td>O(n) : n is the number of nodes in the trie</td>
  <td>
   {array}
  </td>
 </tr>
</table>

```js
console.log(englishLang.toArray());

// ['hit', 'hide', 'hello', 'sand', 'safe', 'noun', 'name']
```

### .getWordsCount()
gets the count of words in the trie.

<table>
 <tr>
  <th>runtime</th>
  <th>return</th>
 </tr>
 <tr>
  <td>O(1)</td>
  <td>
   {number}
  </td>
 </tr>
</table>

```js
console.log(englishLang.getWordsCount()); // 7
```

### .getNodesCount()
gets the count of nodes in the trie.

<table>
 <tr>
  <th>runtime</th>
  <th>return</th>
 </tr>
 <tr>
  <td>O(1)</td>
  <td>
   {number}
  </td>
 </tr>
</table>

```js
console.log(englishLang.getWordsCount()); // 22
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
englishLang.clear();
console.log(englishLang.getWordsCount()); // 0
console.log(englishLang.getNodesCount()); // 1
```

## Build
```
grunt build
```

## License
The MIT License. Full License is [here](https://github.com/datastructures-js/trie/blob/master/LICENSE)
