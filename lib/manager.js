const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.role = "Manager";
        this.officeNumber = officeNumber;
    }

    getRole() {
        return this.role;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    addProfile() {
        return `<div class="card" style="width: 18rem; float:left; margin:10px; border: 1px solid black;">
        <div class="card-img-top" style="background-color:blue">
            <h5 class="card-title header-card">${this.name}</h5>
            <h5 class="card-title header-card">${this.role}</h5>
        </div>
        <div class="card-body" style="background-color:lightgray;">
          <p class="card-text header-body">Employee ID: ${this.id}</p>
          <p class="card-text header-body">Email: ${this.email}</p>
          <p class="card-text header-body">Office: ${this.officeNumber}</p>
        </div>
        </div>`;
    }
}

module.exports = Manager;

