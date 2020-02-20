const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.role = "Engineer";
        this.github = github;
    }

    getRole() {
        return this.role;
    }

    getGithub() {
        return this.github;
    }

    addProfile() {
        return `<div class="card" style="width: 18rem; float:left; margin:10px;">
        <div class="card-img-top"></div>
        <div class="card-body">
          <h5 class="card-title header-card">Name: ${this.name}</h5>
          <h5 class="card-title header-card">Role: ${this.role}</h5>
          <p class="card-text header-body">Employee ID: ${this.id}</p>
          <p class="card-text header-body">Email: ${this.email}</p>
          <p class="card-text header-body">Github: ${this.github}</p>
        </div>
      </div>`
    }
}

module.exports = Engineer;