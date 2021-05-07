// job upgrade employee to engineer

const employee = require("./employee");

class engineer extends employee {
  constructor(name, id, email, github) {
    const role = "engineer";
    super(name, id, email, role);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }
}

module.exports = engineer;
