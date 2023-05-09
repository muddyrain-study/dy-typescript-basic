Object.defineProperty(exports, "__esModule", { value: true });
exports.Dictionary = void 0;
class Dictionary {
    constructor() {
        this.keys = [];
        this.values = [];
        this._size = 0;
    }
    set(key, value) {
        const i = this.keys.indexOf(key);
        if (i < 0) {
            this.keys.push(key);
            this.values.push(value);
        }
        else {
            this.values[i] = value;
        }
    }
    forEach(callback) {
        this.keys.forEach((k, i) => {
            const v = this.values[i];
            callback(k, v);
        });
    }
    get(key) {
        const i = this.keys.indexOf(key);
        return this.values[i];
    }
    has(key) {
        return this.keys.includes(key);
    }
    delete(key) {
        const i = this.keys.indexOf(key);
        if (i === -1) {
            return;
        }
        this.keys.splice(i, 1);
        this.values.splice(i, 1);
    }
    get size() {
        return this.keys.length;
    }
}
exports.Dictionary = Dictionary;
