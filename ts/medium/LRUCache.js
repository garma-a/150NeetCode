var LRUCache = /** @class */ (function() {
    function LRUCache(capacity) {
        this.capacity = capacity;
        this.mp = new Map();
    }
    LRUCache.prototype.get = function(key) {
        if (!this.mp.has(key))
            return -1;
        var val = this.mp.get(key);
        this.mp.delete(key);
        this.mp.set(key, val);
        return val;
    };
    LRUCache.prototype.put = function(key, value) {
        if (this.mp.has(key)) {
            this.mp.delete(key);
        }
        else if (this.mp.size === this.capacity) {
            var firstKey = this.mp.keys().next().value;
            this.mp.delete(firstKey);
        }
        this.mp.set(key, value);
    };
    return LRUCache;
}());
