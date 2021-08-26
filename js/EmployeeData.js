class EmployeeData {
  get id() {
    return this._id;
  }
  set id(id) {
    this._id = id;
  }
  //getters and setters
  get name() {
    return this._name;
  }
  set name(name) {
    let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (nameRegex.test(name)) {
      this._name = name;
    } else {
      throw "Name is incorrect";
    }
  }

  get profileImage() {
    return this._profileImage;
  }
  set profileImage(profileImage) {
    this._profileImage = profileImage;
  }

  get gender() {
    return this._gender;
  }
  set gender(gender) {
    this._gender = gender;
  }

  get department() {
    return this._department;
  }
  set department(department) {
    this._department = department;
  }

  get salary() {
    return this._salary;
  }
  set salary(salary) {
    this._salary = salary;
  }

  get startDate() {
    return this._startDate;
  }
  set startDate(startDate) {
    if (new Date(startDate) <= new Date()) {
      this._startDate = new Date(startDate);
    } else {
      throw "date  is incorrect";
    }
  }

  get notes() {
    return this._notes;
  }
  set notes(notes) {
    this._notes = notes;
  }

  //method to convert object to string
  toString() {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const empDate =
      this.startDate == undefined
        ? "undefined"
        : this.startDate.toLocaleDateString("en-us", options);
    return `name = ${this.name} profileImage = ${this.profileImage}  gender ${this.gender} department = ${this.department} salary = ${this.salary} startDate =  ${empDate} notes = ${this.notes} `;
  }
}
