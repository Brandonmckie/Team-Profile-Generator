const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  const mockEngineer = {
    name: "Nina",
    id: 3,
    email: "nina@gmail.com",
    github: "www.github.com/nina",
  };
  describe("constructor test", () => {
    test("should construct a new instance of engenieer class");
    const engineer = new Engineer(mockEngineer);
    xpect(intern).toBeInstanceOf(Intern);
  });
  test("should return new engineer with name, id, email, github. ", () => {
    const engineer = new Engineer(mockEngineer);
    expect(engineer).toEqual({
      name: "Nina",
      id: 3,
      email: "nina@gmail.com",
      github: "www.github.com/nina",
      role: "Engineer",
    });
  });
});
describe("method test", () => {
  test("should retuen name of Engineer when getName is called", () => {
    const engineer = new Engineer(mockEngineer);
    expect(engineer.getName()).toEqual("Nina");
  });

  test("should return id of Engineer when getId is called", () => {
    const engineer = new Engineer(mockEngineer);
    expect(engineer.getId()).toEqual(3);
  });

  test("should return email of engineer when getEmail is called ", () => {
    const engineer = new Engineer(mockEngineer);
    expect(engineer.getEmail()).toEqual("nina@gmail.com");
  });

  test("should retuen github profile url when getGithub is called", () => {
    const engineer = new Engineer(mockEngineer);
    expect(engineer.getGithub()).toEqual("www.github.com/nina");
  });

  test("should return engineer when getRole is called", () => {
    const engineer = new Engineer(mockEngineer);
    expect(engineer.getRole()).toEqual("Engineer");
  });
});
