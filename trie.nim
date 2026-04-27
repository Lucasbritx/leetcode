import tables, times, random, strutils
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


#[ var trie = newTrie()

trie.insert("apple")
trie.insert("banana")
trie.insert("app")
trie.insert("orange")

echo trie.search("apple")  ]#

#[  Stress test:
	•	Insert 100k words
	•	Measure performance
 ]#


proc randomWord(minLen = 5, maxLen = 10): string =
  let length = rand(minLen..maxLen)
  result = ""

  for i in 0..<length:
    result.add(char(rand(ord('a')..ord('z'))))

proc generateWords(n: int): seq[string] =
  result = @[]
  for _ in 0..<n:
    result.add(randomWord())

randomize()

let wordCount = 1000_000
echo "Generating ", wordCount, " words..."

let words = generateWords(wordCount)

echo "Starting insert benchmark..."

let trie = newTrie()

let start = cpuTime()

for w in words:
  trie.insert(w)

let elapsed = cpuTime() - start

echo "Inserted ", wordCount, " words"
echo "Time: ", elapsed, " seconds"
echo "Ops/sec: ", wordCount.float / elapsed