from typing import List

class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end

class Solution:
    def canAttendMeetings(self, intervals: List[Interval]) -> bool:
        if not intervals:return True
        sorted_intervals = sorted(intervals, key=lambda interval: interval.start)  
        prev_end =  sorted_intervals[0].end

        for index in range(1,len(sorted_intervals)):
            start , end= sorted_intervals[index].start , sorted_intervals[index].end
            if prev_end<=start:
                prev_end = end
            else: return False

        return True
