import tables

type
  TrieNode = ref object
    children: Table[char, TrieNode]
    isEndOfWord: bool

  Trie = ref object
    root: TrieNode

proc newTrieNode(): TrieNode =
  TrieNode(
    children: initTable[char, TrieNode](),
    isEndOfWord: false
  )

proc newTrie(): Trie =
  Trie(root: newTrieNode())

proc insert(self: Trie, word: string) =
  var currentNode = self.root

  for char in word:
    if char notin currentNode.children:
      currentNode.children[char] = newTrieNode()
    currentNode = currentNode.children[char]

  currentNode.isEndOfWord = true

proc search(self: Trie, word: string): bool =
  var currentNode = self.root

  for char in word:
    if char notin currentNode.children:
      return false
    currentNode = currentNode.children[char]

  return currentNode.isEndOfWord

proc startsWith(self: Trie, prefix: string): bool =
  var currentNode = self.root

  for char in prefix:
    if char notin currentNode.children:
      return false
    currentNode = currentNode.children[char]

  return true


var trie = newTrie()

trie.insert("apple")
trie.insert("banana")
trie.insert("app")
trie.insert("orange")

echo trie.search("apple") 