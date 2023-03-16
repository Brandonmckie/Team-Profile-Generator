const Manager = require("../lib/manager");

decribe("Manager", () => {
  const mockManager = {
    name: "Groege",
    id: 4,
    email: "Groege@gmail.com",
    officeNumber: 100,
  };
  decribe("constructor test", () => {
    test("Should construct new manager class", () => {
      const manager = new Manager(mockManager);
      expect(manager).toBeInstanceOf(Intern);
    });
    test("Should construct a new intern with name,is,email,school name", () => {
      const manager = new Intern(mockManager);
      expect(manager).toEqual({
        name: "Groege",
        id: 4,
        email: "Groege@gmail.com",
        officeNumber: 100,
        role: "Manager",
      });
    });
  });
  describe("method tests", () => {
    test("should return name of employee when getName is called", () => {
      const manager = new Manager(mockManager);
      expect(manager.getName()).toEqual("Groege");
    });
  });

  test("should return id when getId is called", () => {
    const manager = new Manager(mockManager);
    expect(manager.getId()).toEqual(4);
  });

  test("should return email of employee when getEmail is called", () => {
    const manager = new Manager(mockManager);
    expect(manager.getEmail()).toEqual("Groege@gmail.com");
  });

  test("should return office number when getOfficeNumber is called", () => {
    const manager = new Manager(mockManager);
    expect(manager.getOfficeNumber()).toEqual(100);
  });

  test("should return intern when getRole is called", () => {
    const manager = new Manager(mockManager);
    expect(manager.getRole()).toEqual("Manager");
  });
});
