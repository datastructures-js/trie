/**
 * @datastructures-js/trie
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const TrieNode = require('./trieNode');

/**
 * @class Trie
 */
class Trie {
  constructor() {
    this._root = new TrieNode('');
    this._wordsCount = 0;
    this._nodesCount = 1; // root node
  }

  /**
   * @public
   * inserts a word into the trie and returns its last char node
   * @param {string} word
   * @param {TrieNode} node
   * @param {number} i
   * @returns {TrieNode}
   */
  insert(word, node = this._root, i = 0) {
    if (typeof word !== 'string') {
      throw new Error('Trie.insert expects a string word');
    }

    if (i === word.length) {
      if (!node.isEndOfWord()) {
        node.setEndOfWord(true);
        this._wordsCount += 1;
      }
      return node;
    }

    if (!node.hasChild(word[i])) {
      node.addChild(word[i]);
      this._nodesCount += 1;
    }

    return this.insert(word, node.getChild(word[i]), i + 1);
  }

  /**
   * @public
   * checks if a word exists in the trie
   * @param {string} word
   * @param {TrieNode} node
   * @param {number} i
   * @returns {boolean}
   */
  has(word, node = this._root, i = 0) {
    if (typeof word !== 'string') return false;

    if (i === word.length) {
      return node.isEndOfWord();
    }

    if (!node.hasChild(word[i])) return false;

    return this.has(word, node.getChild(word[i]), i + 1);
  }

  /**
   * @public
   * finds a word in the trie and returns its last char node
   * @param {string} word
   * @param {TrieNode} node
   * @param {number} i
   * @returns {TrieNode}
   */
  find(word, node = this._root, i = 0) {
    if (typeof word !== 'string') return null;

    if (i === word.length) {
      return node.isEndOfWord() ? node : null;
    }

    if (!node.hasChild(word[i])) return null;

    return this.find(word, node.getChild(word[i]), i + 1);
  }

  /**
   * @public
   * removes a word from the trie
   * @param {string} word
   * @returns {boolean}
   */
  remove(word) {
    const lastCharNode = this.find(word);

    if (lastCharNode === null) return false;

    if (lastCharNode.childrenCount() > 0 || word === '') {
      lastCharNode.setEndOfWord(false);
      this._wordsCount -= 1;
      return true;
    }

    let current = lastCharNode;
    while (current.getChar() !== '') {
      if (current.childrenCount() === 0) {
        current.getParent().removeChild(current.getChar());
        this._nodesCount -= 1;
      }
      current = current.getParent();
    }

    this._wordsCount -= 1;
    return true;
  }

  /**
   * @public
   * traverse the words in the trie
   * @param {function} cb
   * @param {TrieNode} node
   * @param {string} w
   */
  forEach(cb, node = this._root, w = '') {
    if (typeof cb !== 'function') {
      throw new Error('Trie.forEach expects a callback');
    }

    let word = w;
    if (node.isEndOfWord()) {
      cb(word);
    }

    node.children().forEach((child) => {
      word += child.getChar();
      this.forEach(cb, child, word); // depth-first search
      word = word.substr(0, word.length - 1); // backward tracking
    });
  }

  /**
   * @public
   * converts the trie into an array of words
   * @returns {array}
   */
  toArray() {
    const result = [];
    this.forEach((word) => result.push(word));
    return result;
  }

  /**
   * @public
   * @returns {number}
   */
  nodesCount() {
    return this._nodesCount;
  }

  /**
   * @public
   * @returns {number}
   */
  wordsCount() {
    return this._wordsCount;
  }

  /**
   * @public
   * clears the trie
   */
  clear() {
    this._root = new TrieNode('');
    this._nodesCount = 1;
    this._wordsCount = 0;
  }
}

module.exports = Trie;
