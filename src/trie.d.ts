import { TrieNode } from './trieNode';

export class Trie {
  insert(value: string): Trie;
  has(value: string): boolean;
  find(value: string): TrieNode;
  remove(value: string): string|null;
  forEach(cb: (word: string) => void): void;
  toArray(): string[];
  nodesCount(): number;
  wordsCount(): number;
  clear(): void;
  static fromArray(words: string[]): Trie; 
}
