const employee = require("./employee");

class manager extends employee {
  constructor(name, id, email, officeNumber) {
    const role = "manager";
    super(name, id, email, role);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = manager;
