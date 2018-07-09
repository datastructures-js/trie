# @datastrucures-js/trie

[![build:?](https://travis-ci.org/eyas-ranjous/datatructures-js/trie.svg?branch=master)](https://travis-ci.org/eyas-ranjous/datatructures-js/trie) 
[![npm](https://img.shields.io/npm/v/@datastructures-js/trie.svg)](https://www.npmjs.com/package/@datastructures-js/trie)
[![npm](https://img.shields.io/npm/dm/@datastructures-js/trie.svg)](https://www.npmjs.com/packages/@datastructures-js/trie) [![npm](https://img.shields.io/badge/node-%3E=%206.0-blue.svg)](https://www.npmjs.com/package/@datastructures-js/trie)

node's data type: **string**.

<img width="429" alt="ll" src="https://user-images.githubusercontent.com/6517308/42425010-dc9f20ca-82db-11e8-8f78-1efe6959df5f.png">

## Usage
```js
const trieFn = require('@datastructures-js/trie');
const trie = trieFn();

// by default, the trie has 1 node, the root, which also forms 1 default word, the empty string.
```

## API

**.node(char)**

creates a trie node that contain a one or more language charachter.

* **.getChar()** gets the node's charachter.
* **.setParent(parent)** sets the node's parent.
* **.getParent()** gets the node's parent.
* **.setEndOfWord(isEndOfWord)** sets the node as the end char of a word.
* **.isEndOfWord()** checks if a node's char is the end of a word.
* **.addChild(child)** adds a child node to the node.
* **.removeChild(child)** removes a child of the node.
* **.getChild(char)** gets a node's child by its character.
* **.getChildren()** gets all the children of a node.
* **.countChildren()** gets the count of node' children.

```javascript
const n = trie.node('T');
console.log(n.getChar()); // T
console.log(n.isEndOfWord()); // false
console.log(n.countChildren()); // 0
```

**.insert(word)** 

inserts a word into the trie.

```javascript
try {
  trie.insert('hi');
  trie.insert('hit');
  trie.insert('hide');
  trie.insert('hello');
  trie.insert('sand');
  trie.insert('safe');
  trie.insert('noun');
  trie.insert('name');
  trie.insert(123); // throws an error
} catch(e) {
  console.log(e) // 123 is not a word 
}
```

**.search(word)** 

finds a word in the trie and returns the last char's node or null if word is not found.

```javascript
try {
  const n1 = trie.search('hi');
  console.log(n1.getChar()); // i
  console.log(n1.getParent().getChar()); // h
  console.log(trie.search('abc')); // null
  trie.search(); // throws an error
} catch(e) {
  console.log(e); // undefined is not a word
}
```

**.traverse(cb)** 

traverse the trie and calls cb for each word including the empty word

```javascript
trie.traverse(console.log);
// 
// hi
// hit
// hide
// hello
// sand
// safe
// noun
// name
```

**.remove(word)** 

removes a word from the trie

```javascript
try {
  trie.remove('hit');
  console.log(trie.search('hit')); // null
  trie.remove(null);
} catch(e) {
  console.log(e); // null is not a word
}
```

**.countNodes()**

gets the count of characters nodes in the trie

```javascript
console.log(trie.countNodes()); // 22
```

**.countWords()** 

gets the count of the words in the trie

```javascript
console.log(trie.countWords()); // 7
```

**.clear()** 

clears the trie

```javascript
trie.clear();
console.log(trie.countNodes()); // 1 (root default node)
console.log(trie.countWords()); // 1 (empty string default word)
```

## Build
```
grunt build
```

## License
The MIT License. Full License is [here](https://github.com/datastructures-js/trie/blob/master/LICENSE)
