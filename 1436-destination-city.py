#https://leetcode.com/problems/destination-city/
class Solution:
    def destCity(self, paths: List[List[str]]) -> str:
        has_outgoing = set()

        for path in paths:
            has_outgoing.add(path[0])

        for path in paths:
            if not path[1] in has_outgoing:
                return path[1]