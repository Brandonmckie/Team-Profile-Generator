const Intern = require("../lib/intern");

decribe("Intern", () => {
  const mockInter = {
    name: "Tay",
    id: 2,
    email: "tay@gmail.com",
    school: "broward",
  };
  decribe("constructor test", () => {
    test("Should construct new intern class", () => {
      const intern = new Intern(mockInter);
      expect(intern).toBeInstanceOf(Intern);
    });
    test("Should construct a new intern with name,is,email,school name", () => {
      const intern = new Intern(mockInter);
      expect(intern).toEqual({
        name: "Tay",
        id: 2,
        email: "tay@gmail.com",
        school: "broward",
        role: "Intern",
      });
    });
  });
  describe("method tests", () => {
    test("should return name of employee when getName is called", () => {
      const intern = new Intern(mockInter);
      expect(intern.getName()).toEqual("Tay");
    });
  });

  test("should return id when getId is called", () => {
    const intern = new Intern(mockInter);
    expect(intern.getId()).toEqual(2);
  });

  test("should return email of employee when getEmail is called", () => {
    const intern = new Intern(mockInter);
    expect(intern.getEmail()).toEqual("tay@gmail.com");
  });

  test("should return school name when getSchool is called", () => {
    const intern = new Intern(mockInter);
    expect(intern.getShcool()).toEqual("broward");
  });

  test("should return intern when getRole is called", () => {
    const intern = new Intern(mockInter);
    expect(intern.getRole()).toEqual("Intern");
  });
});
