export default class Todo {
  id: string;
  value: string;

  constructor(textValue: string) {
    this.id = new Date().toISOString();
    this.value = textValue;
  }
}
