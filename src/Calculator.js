class Calc {

  constructor() {
    this.result = null;
  }

  add(a, b) {
    if (typeof a === 'string') {
      throw new Error();
    }
    return a + b;
  }

  asyncAdd(a, b) {
    setTimeout(() => {
      this.result = a + b;
    }, 1000);
  }

}