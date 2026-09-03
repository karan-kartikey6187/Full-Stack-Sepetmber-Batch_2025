const userProfile = {
  id: ((Math.random() +1) * 100).toFixed(),
  name: "Karan Kartikey",
  email: "karan123@gmail.com",
  skills: ["HTML", "CSS", "JavaScript"],
  isActive: true,

  getUserInfo: function () {
    return `userDetails: ID= ${this.id}, Name= ${this.name}, Email= ${this.email}, Skills= ${this.skills.join(", ")}, 
    isActive= ${this.isActive  ? "is currently active": "is currently inactive"}`;
  },

  addSkill: function (skill) {
    this.skills.push(skill);
  },

  deactivate: function () {
    this.isActive = false;
  }
};

console.log(userProfile.getUserInfo())
userProfile.addSkill("React")
userProfile.deactivate()
console.log(userProfile.getUserInfo())


