const { expect } = require('chai');
const { TrieNode } = require('../src/trieNode');
const { Trie } = require('../src/trie');

describe('Trie unit tests', () => {
  const trie = new Trie();

  describe('.insert(word)', () => {
    it('insert words into the trie', () => {
      expect(trie.insert()).to.be.instanceof(Trie); // does not insert undefined
      expect(trie.insert('hi')).to.be.instanceof(Trie);
      expect(trie.insert('hi')).to.be.instanceof(Trie);
      expect(trie.insert('hi')).to.be.instanceof(Trie);
      expect(trie.insert('hi')).to.be.instanceof(Trie);
      expect(trie.insert('hit')).to.be.instanceof(Trie);
      expect(trie.insert('hide')).to.be.instanceof(Trie);
      expect(trie.insert('hello')).to.be.instanceof(Trie);
      expect(trie.insert('sand')).to.be.instanceof(Trie);
      expect(trie.insert('safe')).to.be.instanceof(Trie);
      expect(trie.insert('noun')).to.be.instanceof(Trie);
      expect(trie.insert('name')).to.be.instanceof(Trie);

      // empty string can be inserted explicitly as a word, root is its node
      expect(trie.insert('')).to.be.instanceof(Trie);
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
      expect(trie.has()).to.equal(false);
      expect(trie.has(null)).to.equal(false);
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
      expect(trie.find()).to.equal(null);
      expect(trie.find(null)).to.equal(null);
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

    it('throws an error if callback is not a function', () => {
      expect(() => trie.forEach()).to.throw(Error)
        .and.to.have.property(
          'message',
          'Trie.forEach expects a callback function'
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

      trie.remove('hide');
      expect(trie.has('hide')).to.equal(false);
      expect(trie.nodesCount()).to.equal(20);
      expect(trie.wordsCount()).to.equal(7);

      trie.remove('hi');
      expect(trie.has('hi')).to.equal(false);
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

      expect(trie.remove(123)).to.equal(null);
      expect(trie.nodesCount()).to.equal(1);
      expect(trie.wordsCount()).to.equal(0);
    });

    it('returns null when removing none existing word', () => {
      trie.insert('name');
      expect(trie.remove('na')).to.equal(null);
      expect(trie.nodesCount()).to.equal(5);
      expect(trie.wordsCount()).to.equal(1);
      expect(trie.remove('something')).to.equal(null);
      expect(trie.remove()).to.equal(null);
      expect(trie.remove(null)).to.equal(null);
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

  describe('.fromArray(values)', () => {
    it('convert an existing list of values into a trie', () => {
      const numbers = [1, 32, 123, 21, 222, 132, 111, 312];
      const numbersTrie = Trie.fromArray(numbers);
      expect(numbersTrie.wordsCount()).to.equal(8);
      expect(numbersTrie.nodesCount()).to.equal(16);
      expect(numbersTrie.has(123)).to.equal(true);
      expect(numbersTrie.has('123')).to.equal(true);
      expect(numbersTrie.has(222)).to.equal(true);
      expect(numbersTrie.has('222')).to.equal(true);
      expect(numbersTrie.has('20')).to.equal(false);
    });
  });
});
