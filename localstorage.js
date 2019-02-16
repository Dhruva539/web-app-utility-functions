import hash from './hash';

export default {
  get(key) {
    let item=localStorage.getItem(key);
    return item?JSON.parse(item):{};
  },
  getForUser(key,user) {
    let prefix= hash.fnv32a(user,true);

    return this.get(`${prefix}_${key}`);
  },
  set(key,value) {
    localStorage.setItem(key,JSON.stringify(value));
  },
  setForUser(key,value,user) {
    let prefix= hash.fnv32a(user,true);
    return this.set(`${prefix}_${key}`,value)

  }
}