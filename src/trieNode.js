/**
 * datastructures-js/trie
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 *
 * @class TrieNode
 */
class TrieNode {
  constructor(char) {
    this._char = char;
    this._isEndOfWord = false;
    this._parent = null;
    this._children = new Map();
  }

  /**
   * @public
   * @return {boolean}
   */
  isRoot() {
    return this._char === '';
  }

  /**
   * @public
   * @return {boolean}
   */
  isLeaf() {
    return this._children.size === 0;
  }

  /**
   * @public
   * @returns {string}
   */
  getChar() {
    return this._char;
  }

  /**
   * @internal
   * @param {TrieNode} parentNode
   */
  setParent(parentNode) {
    this._parent = parentNode;
    return this;
  }

  /**
   * @public
   * @return {TrieNode}
   */
  getParent() {
    return this._parent;
  }

  /**
   * @internal
   * @param {boolean} isEndOfWord
   */
  setEndOfWord(isEndOfWord) {
    this._isEndOfWord = isEndOfWord;
    return this;
  }

  /**
   * @public
   * @return {boolean}
   */
  isEndOfWord() {
    return this._isEndOfWord;
  }

  /**
   * @internal
   * @param {string} char
   */
  addChild(char) {
    const childNode = new TrieNode(char);
    childNode.setParent(this);
    this._children.set(char, childNode);
    return this;
  }

  /**
   * @internal
   * @param {string} char
   * @return {boolean}
   */
  removeChild(char) {
    return this._children.delete(char);
  }

  /**
   * @public
   * @param {string} char
   * @return {TrieNode}
   */
  getChild(char) {
    return this._children.get(char) || null;
  }

  /**
   * @public
   * @param {string} char
   * @return {boolean}
   */
  hasChild(char) {
    return this._children.has(char);
  }

  /**
   * @internal
   * @return {Map}
   */
  children() {
    return this._children;
  }

  /**
   * @public
   * @return {number}
   */
  childrenCount() {
    return this._children.size;
  }
}

exports.TrieNode = TrieNode;
