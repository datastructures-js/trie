/**
 * datastructures-js/trie
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

/**
 * @throws {Error}
 */
const validate = (str) => {
  if (typeof str !== 'string') {
    throw new Error(`${str} is not a string`);
  }
};

/**
 * Trie Node
 * @function
 */
const node = (ch) => {
  const char = ch;
  let endOfWord = false;
  let parent = null;
  const children = {};
  let childrenCount = 0;

  validate(ch);

  /**
   * @return {string}
   */
  const getChar = () => char;

  /**
   * @param {object} p
   */
  const setParent = (p) => {
    parent = p;
  };

  /**
   * @return {object} - node
   */
  const getParent = () => parent;

  /**
   * @param {boolean}
   */
  const setEndOfWord = (eow) => {
    endOfWord = eow;
  };

  /**
   * @returns {boolean}
   */
  const isEndOfWord = () => endOfWord;

  /**
   * @param {node} child
   */
  const addChild = (child) => {
    children[child.getChar()] = child;
    childrenCount += 1;
  };

  /**
   * @param {node} child
   */
  const removeChild = (child) => {
    children[child.getChar()] = null;
    childrenCount -= 1;
  };

  /**
   * @returns {node} - child
   */
  const getChild = c => children[c] || null;

  /**
   * @returns {object}
   */
  const getChildren = () => children;

  /**
   * @returns {number}
   */
  const countChildren = () => childrenCount;

  // trie node api
  return {
    getChar,
    setParent,
    getParent,
    setEndOfWord,
    isEndOfWord,
    addChild,
    removeChild,
    getChild,
    getChildren,
    countChildren
  };
};

/**
 * Trie
 * @function
 */
const trie = () => {
  let nodesCount = 1;
  let wordsCount = 0;
  let rootNode = node('');

  /**
   * @returns {number}
   */
  const countNodes = () => nodesCount;

  /**
   * @returns {number}
   */
  const countWords = () => wordsCount;

  /**
   * finds a word in the trie
   * @param {string} word
   * @returns {object} - node
   */
  const search = (word) => {
    validate(word);
    let currentNode = rootNode;
    for (let i = 0; i < word.length; i += 1) {
      const child = currentNode.getChild(word[i]);
      if (child === null) {
        return null;
      }
      currentNode = child;
    }
    if (currentNode.isEndOfWord()) {
      return currentNode;
    }
    return null;
  };

  /**
   * inserts a word into the trie
   * @param {string} word
   */
  const insert = (word) => {
    validate(word);
    let currentNode = rootNode;
    for (let i = 0; i < word.length; i += 1) {
      if (currentNode.getChild(word[i]) === null) {
        const child = node(word[i]);
        child.setParent(currentNode);
        currentNode.addChild(child);
        nodesCount += 1;
      }
      currentNode = currentNode.getChild(word[i]);
    }
    if (currentNode.getChar() !== '') {
      currentNode.setEndOfWord(true);
      wordsCount += 1;
    }
  };

  /**
   * removes a word from the trie
   * @param {string} word
   */
  const remove = (word) => {
    let currentNode = search(word);
    if (currentNode !== null && currentNode.getChar() !== '') {
      if (currentNode.countChildren() > 0) {
        currentNode.setEndOfWord(false);
      } else {
        while (currentNode.getParent() !== null) {
          if (currentNode.countChildren() === 0) {
            currentNode.getParent().removeChild(currentNode);
            nodesCount -= 1;
          }
          currentNode = currentNode.getParent();
        }
      }
      wordsCount -= 1;
    }
  };

  /**
   * depth-first traverse the trie from root node
   * @param {function} cb
   */
  const traverse = (cb) => {
    let word = '';
    const traverseFn = (currentNode) => {
      if (currentNode.isEndOfWord()) {
        cb(word);
      }
      const children = currentNode.getChildren();
      Object.keys(children).forEach((char) => {
        const child = children[char];
        word += child.getChar();
        traverseFn(child); // depth-first traverse
        word = word.substr(0, word.length - 1); // word backward tracking
      });
    };
    return traverseFn(rootNode);
  };

  /**
   * clears the trie
   */
  const clear = () => {
    nodesCount = 1;
    wordsCount = 0;
    rootNode = node('');
  };

  // trie api
  return {
    node,
    countNodes,
    countWords,
    search,
    insert,
    remove,
    traverse,
    clear
  };
};

module.exports = trie;
