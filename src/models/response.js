import Store from "./store.js";

export default class Response {
  date;
  text = "";
  prompt = "";

  constructor({ date, text, prompt }) {
    this.date = date || Date.now();
    this.text = text;
    this.prompt = prompt;
  }

  get prettyDate() {
    const date = new Date(this.date);
    return date.toDateString();
  }

  save() {
    this.constructor.#store.save(this);
  }

  static all() {
    return this.#store.all().map((i) => new this(i));
  }

  static last() {
    return this.all()[0];
  }

  static get #store() {
    return new Store();
  }
}
