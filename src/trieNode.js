/**
 * datastructures-js/trie
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

/**
 * @class TrieNode
 */
class TrieNode {
  constructor(char) {
    this.char = char;
    this.endOfWord = false;
    this.parentNode = null;
    this.children = new Map();
  }

  /**
   * @public
   * @returns {string}
   */
  getChar() {
    return this.char;
  }

  /**
   * @internal
   * @param {TrieNode} parentNode
   */
  setParent(parentNode) {
    this.parentNode = parentNode;
  }

  /**
   * @public
   * @return {TrieNode}
   */
  getParent() {
    return this.parentNode;
  }

  /**
   * @internal
   * @param {boolean} endOfWord
   */
  setEndOfWord(endOfWord) {
    this.endOfWord = endOfWord;
  }

  /**
   * @public
   * @return {boolean}
   */
  isEndOfWord() {
    return this.endOfWord;
  }

  /**
   * @internal
   * @param {string} char
   */
  addChild(char) {
    const childNode = new TrieNode(char);
    childNode.setParent(this);
    this.children.set(char, childNode);
  }

  /**
   * @internal
   * @param {string} char
   * @return {boolean}
   */
  removeChild(char) {
    return this.children.delete(char);
  }

  /**
   * @public
   * @param {string} char
   * @return {TrieNode}
   */
  getChild(char) {
    return this.children.get(char) || null;
  }

  /**
   * @internal
   * @param {string} char
   * @return {boolean}
   */
  hasChild(char) {
    return this.children.has(char);
  }

  /**
   * @internal
   * @return {Map}
   */
  getChildren() {
    return this.children;
  }

  /**
   * @public
   * @return {number}
   */
  childrenCount() {
    return this.children.size;
  }
}

module.exports = TrieNode;
