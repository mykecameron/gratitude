export default class Store {
  STORAGE_KEY = "gratitude-app";

  save(object) {
    const objects = this.all();
    objects.unshift(object);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(objects));
  }

  all() {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
  }
}
