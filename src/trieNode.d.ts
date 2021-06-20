export class TrieNode {
  constructor(char: string);
  isRoot(): boolean;
  getChar(): string;
  setParent(parent: TrieNode): TrieNode;
  getParent(): TrieNode;
  setEndOfWord(isEndOfWord: boolean): TrieNode;
  isEndOfWord(): boolean;
  addChild(char: string): TrieNode;
  removeChild(char: string): boolean;
  getChild(char: string): TrieNode;
  hasChild(char: string): boolean;
  children(): Map<string, TrieNode>;
  childrenCount(): number;
}
