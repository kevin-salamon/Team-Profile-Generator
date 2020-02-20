const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.role = "Intern";
        this.school = school;
    }

    getRole() {
        return this.role;
    }

    getSchool() {
        return this.school;
    }

    addProfile() {
        return `<div class="card" style="width: 18rem; float:left; margin:10px;">
        <div class="card-img-top"></div>
        <div class="card-body">
          <h5 class="card-title header-card">Name: ${this.name}</h5>
          <h5 class="card-title header-card">Role: ${this.role}</h5>
          <p class="card-text header-body">Employee ID: ${this.id}</p>
          <p class="card-text header-body">Email: ${this.email}</p>
          <p class="card-text header-body">School: ${this.school}</p>
        </div>
      </div>`
    }
}

module.exports = Intern;