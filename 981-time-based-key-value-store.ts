/* https://leetcode.com/problems/time-based-key-value-store/description/ */
function search(values: Array<[number, string]>, timestamp: number): string {
    let left = 0;
    let right = values.length - 1;
    let result = "";
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const [midTimestamp, midValue] = values[mid];
        if (midTimestamp <= timestamp) {
            result = midValue;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}

class TimeMap {
    private values: Map<string, Array<[number, string]>>;

    constructor() {
        this.values = new Map<string, Array<[number, string]>>();
    }

    set(key: string, value: string, timestamp: number): void {
        if (!this.values.has(key)) {
            this.values.set(key, []);
        }
        this.values.get(key)!.push([timestamp, value]);
    }

    get(key: string, timestamp: number): string {
        if (!this.values.has(key)) return "";
        return search(this.values.get(key)!, timestamp);
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */