class Model {
  constructor() {
    this.value = "null";
    this.fn = "";
    this.context = "";
  }

  setValue() {
    console.log(this.fn);
    console.log(this.context)
    const func = this.fn.bind(this.context);
    func();
    this.value += "str";
  }
  setFunction(fn, context) {
    this.fn = fn;
    this.context = context;
  }
}

const mod = new Model();

export { mod };
