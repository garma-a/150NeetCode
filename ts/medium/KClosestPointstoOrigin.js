"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var priority_queue_1 = require("@datastructures-js/priority-queue");
var Solution = /** @class */ (function () {
    function Solution() {
    }
    Solution.prototype.kClosest = function (points, k) {
        var heap = new priority_queue_1.MaxPriorityQueue({ compare: function (a, b) { return b[0] - a[0]; } });
        for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
            var _a = points_1[_i], x = _a[0], y = _a[1];
            var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
            heap.push([dist, x, y]);
            if (heap.size() > k) {
                heap.pop();
            }
        }
        var ans = [];
        for (var _b = 0, heap_1 = heap; _b < heap_1.length; _b++) {
            var _c = heap_1[_b], dist = _c[0], x = _c[1], y = _c[2];
            ans.push([x, y]);
        }
        return ans;
    };
    return Solution;
}());
