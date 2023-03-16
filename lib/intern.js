const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);

    this.role = "Intern";

    this.school = school;
  }

  getShcool() {
    return this.school;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Intern;
