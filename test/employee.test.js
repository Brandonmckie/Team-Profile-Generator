const Employee = require("../lib/employee");

describe("Employee", () => {
  const mockEmployee = {
    name: "Brandon",
    id: 1,
    email: "brandon@gmail.com",
  };
  describe("constructor tests", () => {
    test("should construct a new employee class", () => {
      let employee = new Employee(mockEmployee);
      expect(employee).toBeInstanceOf(Employee);
    });
    test("should construct a new employee class with name,id,email", () => {
      const employee = new Employee(mockEmployee);
      expect(employee).toEqual({
        name: "Brandon",
        id: 1,
        email: "brandon@gmail.com",
      });
    });
  });
  describe("method tests", () => {
    test("should return name of employee when getName is called", () => {
      const employee = new Employee(mockEmployee);
      expect(employee.getName()).toEqual("Brandon");
    });
  });

  test("should return id when getId is called", () => {
    const employee = new Employee(mockEmployee);
    expect(employee.getId()).toEqual(1);
  });

  test("should return email of employee when getEmail is called", () => {
    const employee = new Employee(mockEmployee);
    expect(employee.getEmail()).toEqual("brandon@gmail.com");
  });
});
