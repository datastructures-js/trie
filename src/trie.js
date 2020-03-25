/**
 * datastructures-js/trie
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const TrieNode = require('./trieNode');

/**
 * @class TrieNode
 */
class Trie {
  constructor() {
    this.root = new TrieNode('');
    this.wordsCount = 0;
    this.nodesCount = 1; // root node
  }

  /**
   * @public
   * inserts a word into the trie and returns its last char node
   *
   * @param {string} word
   * @return {TrieNode}
   */
  insert(word, node = this.root, i = 0) {
    if (typeof word !== 'string') {
      throw new Error('Trie.insert expect a string word');
    }

    if (i === word.length) {
      if (!node.isEndOfWord()) {
        node.setEndOfWord(true);
        this.wordsCount += 1;
      }
      return node;
    }

    if (!node.hasChild(word[i])) {
      node.addChild(word[i]);
      this.nodesCount += 1;
    }

    return this.insert(word, node.getChild(word[i]), i + 1);
  }

  /**
   * @public
   * checks if a word exists in the trie
   *
   * @param {string} word
   * @return {boolean}
   */
  has(word, node = this.root, i = 0) {
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
   *
   * @param {string} word
   * @return {TrieNode}
   */
  find(word, node = this.root, i = 0) {
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
   *
   * @param {string} word
   * @return {boolean}
   */
  remove(word) {
    const lastCharNode = this.find(word);

    if (lastCharNode === null) return false;

    if (lastCharNode.childrenCount() > 0 || word === '') {
      lastCharNode.setEndOfWord(false);
      this.wordsCount -= 1;
      return true;
    }

    let current = lastCharNode;
    while (current.getChar() !== '') {
      if (current.childrenCount() === 0) {
        current.getParent().removeChild(current.getChar());
        this.nodesCount -= 1;
      }
      current = current.getParent();
    }

    this.wordsCount -= 1;
    return true;
  }

  /**
   * traverse the words in the trie
   *
   * @param {function} cb
   */
  forEach(cb, node = this.root, w = '') {
    if (typeof cb !== 'function') {
      throw new Error('Trie.forEach expects a callback');
    }

    let word = w;
    if (node.isEndOfWord()) {
      cb(word);
    }

    node.getChildren().forEach((childNode) => {
      word += childNode.getChar();
      this.forEach(cb, childNode, word); // depth-first search
      word = word.substr(0, word.length - 1); // backward tracking
    });
  }

  /**
   * converts the trie into an array of words
   *
   * @return {array}
   */
  toArray() {
    const result = [];
    this.forEach((word) => result.push(word));
    return result;
  }

  /**
   * @public
   * @return {number}
   */
  getNodesCount() {
    return this.nodesCount;
  }

  /**
   * @public
   * @return {number}
   */
  getWordsCount() {
    return this.wordsCount;
  }

  /**
   * clears the trie
   */
  clear() {
    this.root = new TrieNode('');
    this.nodesCount = 1;
    this.wordsCount = 0;
  }
}

module.exports = Trie;
