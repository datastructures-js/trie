import { TrieNode } from './trieNode';

export class Trie {
  insert(value: { toString: () => string }): Trie;
  has(value: { toString: () => string }): boolean;
  find(value: { toString: () => string }): TrieNode;
  remove(value: { toString: () => string }): string|null;
  forEach(cb: (word: string) => void): void;
  toArray(): string[];
  nodesCount(): number;
  wordsCount(): number;
  clear(): void;
  static fromArray(words: string[]): Trie; 
}
