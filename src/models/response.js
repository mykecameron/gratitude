export default class Response {
  date;
  text = "";
  prompt = "";

  constructor(attributes) {
    const { date, text, prompt } = attributes;
    this.date = date || Date.now();
    this.text = text;
    this.prompt = prompt;
  }

  get prettyDate() {
    const date = new Date(this.date);
    return date.toDateString();
  }
}
