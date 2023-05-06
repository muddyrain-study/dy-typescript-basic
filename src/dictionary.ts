export type callback<K, V> = (key: K, value: V) => void;

export class Dictionary<K, V> {
  private keys: K[] = [];
  private values: V[] = [];
  private _size: number = 0;
  set(key: K, value: V) {
    const i = this.keys.indexOf(key);
    if (i < 0) {
      this.keys.push(key);
      this.values.push(value);
    } else {
      this.values[i] = value;
    }
  }
  forEach(callback: callback<K, V>) {
    this.keys.forEach((k, i) => {
      const v = this.values[i];
      callback(k, v);
    });
  }
  get(key: K) {
    const i = this.keys.indexOf(key);
    return this.values[i];
  }
  has(key: K) {
    return this.keys.includes(key);
  }

  delete(key: K) {
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
