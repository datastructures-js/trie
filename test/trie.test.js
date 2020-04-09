const { expect } = require('chai');
const TrieNode = require('../src/trieNode');
const Trie = require('../src/trie');

describe('Trie unit tests', () => {
  const trie = new Trie();

  describe('.insert(word)', () => {
    it('insert words into the trie', () => {
      expect(trie.insert('hi')).to.be.instanceof(TrieNode);
      expect(trie.insert('hi')).to.be.instanceof(TrieNode);
      expect(trie.insert('hi')).to.be.instanceof(TrieNode);
      expect(trie.insert('hi')).to.be.instanceof(TrieNode);
      expect(trie.insert('hit')).to.be.instanceof(TrieNode);
      expect(trie.insert('hide')).to.be.instanceof(TrieNode);
      expect(trie.insert('hello')).to.be.instanceof(TrieNode);
      expect(trie.insert('sand')).to.be.instanceof(TrieNode);
      expect(trie.insert('safe')).to.be.instanceof(TrieNode);
      expect(trie.insert('noun')).to.be.instanceof(TrieNode);
      expect(trie.insert('name')).to.be.instanceof(TrieNode);

      // empty string can be inserted explicitly as a word, root is its node
      expect(trie.insert('')).to.be.instanceof(TrieNode);
    });

    it('throws an exception for none string words', () => {
      expect(() => trie.insert()).to.throw(Error)
        .and.to.have.property(
          'message',
          'Trie.insert expects a string word'
        );
    });
  });

  describe('.nodesCount()', () => {
    it('should get the count of characters', () => {
      expect(trie.nodesCount()).to.equal(23);
    });
  });

  describe('.wordsCount()', () => {
    it('should get the count of words', () => {
      expect(trie.wordsCount()).to.equal(9);
    });
  });

  describe('.has(word)', () => {
    it('returns true for existing words', () => {
      expect(trie.has('hi')).to.equal(true);
      expect(trie.has('hello')).to.equal(true);
      expect(trie.has('hit')).to.equal(true);
      expect(trie.has('hide')).to.equal(true);
      expect(trie.has('name')).to.equal(true);
      expect(trie.has('noun')).to.equal(true);
      expect(trie.has('sand')).to.equal(true);
      expect(trie.has('safe')).to.equal(true);
      expect(trie.has('')).to.equal(true);
    });

    it('returns false for none existing words', () => {
      expect(trie.has('his')).to.equal(false);
      expect(trie.has('helo')).to.equal(false);
      expect(trie.has('hitt')).to.equal(false);
      expect(trie.has('nnnn')).to.equal(false);
      expect(trie.has('h')).to.equal(false);
      expect(trie.has('san')).to.equal(false);
      expect(trie.has(123)).to.equal(false);
    });
  });

  describe('.find(word)', () => {
    it('finds a word in the trie', () => {
      const hi = trie.find('hi');
      expect(hi).to.be.instanceof(TrieNode);
      expect(hi.getChar()).to.equal('i');
    });

    it('returns null for non existing words', () => {
      expect(trie.find('hex')).to.equal(null);
      expect(trie.find('h')).to.equal(null);
      expect(trie.find(123)).to.equal(null);
    });
  });

  describe('.forEach(cb)', () => {
    it('traverse all words in the trie', () => {
      const words = [];
      trie.forEach((word) => words.push(word));
      expect(words).to.have.lengthOf(9).and.to.have.members([
        '',
        'hi',
        'hit',
        'hide',
        'hello',
        'sand',
        'safe',
        'noun',
        'name'
      ]);
    });

    it('throws an exception for none string words', () => {
      expect(() => trie.forEach()).to.throw(Error)
        .and.to.have.property(
          'message',
          'Trie.forEach expects a callback'
        );
    });
  });

  describe('.toArray(cb)', () => {
    it('converts the trie into an array of words', () => {
      expect(trie.toArray()).to.have.lengthOf(9).and.to.have.members([
        '',
        'hi',
        'hit',
        'hide',
        'hello',
        'sand',
        'safe',
        'noun',
        'name'
      ]);
    });
  });

  describe('.remove(word)', () => {
    it('remove words from the trie', () => {
      trie.remove('hit');
      expect(trie.has('hit')).to.equal(false);
      expect(trie.nodesCount()).to.equal(22);
      expect(trie.wordsCount()).to.equal(8);

      trie.remove('hi');
      expect(trie.has('hi')).to.equal(false);
      expect(trie.nodesCount()).to.equal(22);
      expect(trie.wordsCount()).to.equal(7);

      trie.remove('hide');
      expect(trie.has('hide')).to.equal(false);
      expect(trie.nodesCount()).to.equal(19);
      expect(trie.wordsCount()).to.equal(6);

      trie.remove('hello');
      expect(trie.has('hello')).to.equal(false);
      expect(trie.nodesCount()).to.equal(14);
      expect(trie.wordsCount()).to.equal(5);

      trie.remove('safe');
      expect(trie.has('safe')).to.equal(false);
      expect(trie.nodesCount()).to.equal(12);
      expect(trie.wordsCount()).to.equal(4);

      trie.remove('sand');
      expect(trie.has('sand')).to.equal(false);
      expect(trie.nodesCount()).to.equal(8);
      expect(trie.wordsCount()).to.equal(3);

      trie.remove('noun');
      expect(trie.has('noun')).to.equal(false);
      expect(trie.nodesCount()).to.equal(5);
      expect(trie.wordsCount()).to.equal(2);

      trie.remove('name');
      expect(trie.has('name')).to.equal(false);
      expect(trie.nodesCount()).to.equal(1);
      expect(trie.wordsCount()).to.equal(1);

      trie.remove('');
      expect(trie.has('')).to.equal(false);
      expect(trie.nodesCount()).to.equal(1);
      expect(trie.wordsCount()).to.equal(0);

      expect(trie.remove(123)).to.equal(false);
      expect(trie.nodesCount()).to.equal(1);
      expect(trie.wordsCount()).to.equal(0);
    });
  });

  describe('.clear()', () => {
    it('clears the trie', () => {
      trie.insert('test');
      trie.clear();
      expect(trie.has('test')).to.equal(false);
      expect(trie.nodesCount()).to.equal(1);
      expect(trie.wordsCount()).to.equal(0);
    });
  });
});
