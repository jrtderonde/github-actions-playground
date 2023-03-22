const { sayHello, add } = require("./main");

describe("Testing main.js", function () {
  it("Should return 4 when adding 2 with a", function () {
    // Arrange
    const expected = 4;
    const value = 2;

    // Act
    const result = add(value, value);

    // Assert
    expect(result).toBe(expected);
    expect(result).not.toBe(0);
  });

  it("Should throw an error when supplying a string instead of number", function () {
    // Arrange
    const a = "1";
    const b = 3;

    // Assert
    try {
      add(a, b);
    } catch (error) {
      expect(error).toBeInstanceOf(TypeError);
      expect(error.message).toBe("Expected number instead of string");
    }

    try {
      add(b, a);
    } catch (error) {
      expect(error).toBeInstanceOf(TypeError);
      expect(error.message).toBe("Expected number instead of string");
    }

    expect(add(b, b)).not.toThrow();
  });

  it("Should return a Hello string", function () {
    // Assert
    expect(sayHello()).toBe("Hello");
  });
});
