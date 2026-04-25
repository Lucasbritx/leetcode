class Hashmap:
    def __init__(self, size = 100) -> None:
        self.size = size
        self.buckets = [[] for _ in range(size)]

    def _hash(self,key):
        return hash(key) % self.size
    
    def put(self, key,value):
        index = self._hash(key)
        bucket = self.buckets[index]

        for i, (k,v) in enumerate(bucket):
            if k == key:
                bucket[i] = (key,value)
                return
            
        bucket.append((key, value))

    def get(self,key):
        index = self._hash(key)
        bucket = self.buckets[index]

        for k, v in bucket:
            if k == key:
                return v
        
        return None 
    
    def remove(self,key):
        index = self._hash(key)
        bucket = self.buckets[index]

        for i,(k,v) in enumerate(bucket):
            if k == key:
                del bucket[i]
                return
            
    def __str__(self):
        return str([{k: v for k, v in bucket} for bucket in self.buckets if bucket])
    
hash_map = Hashmap()

hash_map.put("augusto", 30)
hash_map.put("lucas", 20)
hash_map.put("matheus", 25)

print(hash_map)

print(hash_map.get("lucas"))

hash_map.remove("lucas")

print(hash_map.get("lucas"))