module.exports = {
  sayHello() {
    return "Hello";
  },
  add(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new TypeError("Expected number instead of string");
    }

    return a + b;
  },
};
