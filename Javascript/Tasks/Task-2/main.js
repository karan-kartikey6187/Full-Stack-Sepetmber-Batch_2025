const users = [
  {
    id: 101,
    name: "  alex JOHNSON ",
    dob: "1992-06-15",
    salary: "55000",
    skills: ["html", "css", "javascript"],
  },
  {
    id: 102,
    name: "  maria  smith  ",
    dob: "1988-11-03",
    salary: "72000",
    skills: ["react", "node", "css"],
  },
  {
    id: 103,
    name: "john doe",
    dob: "1996-02-25",
    salary: "48000",
    skills: ["vue", "javascript", "html"],
  },
];

function processData(allUsers) {
  const names = allUsers.map((item) =>
    item.name.trim().toLowerCase().split(" ").filter(Boolean).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" "));
  console.log(names);

  const skills = allUsers.map((item) => item.skills);
  const unique = Array.from(new Set(skills.flat())).sort();
  console.log(unique);
  const count = allUsers.filter((item) =>
    item.skills.includes("javascript"),
  ).length;
  console.log(`There are ${count} JavaScript users`);

  const salaries = allUsers.map((item) => parseInt(item.salary));
  const total = salaries.reduce((sum, salary) => sum + salary, 0);
  const average = total / salaries.length;
  console.log(`Average Salary: ${average.toFixed(0)}`);

  salaries.sort((a, b) => a - b);
  const lowest = salaries[0];
  const highest = salaries[salaries.length - 1];
  console.log(`Highest Salary: ${highest}`);
  console.log(`Lowest Salary: ${lowest}`);

  const currentYear = new Date().getFullYear();
  const today = new Date();
  const obj = {};
  const oldAgeObj = {};
  let oldestName = "";
  let oldestAge = 0;
  for (let i = 0; i < allUsers.length; i++) {
    const dob = new Date(allUsers[i].dob);
    const birthYear = new Date(users[i].dob).getFullYear();
    let age = currentYear - birthYear;
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    console.log(`${names[i]} Age: ${age}`);

    obj[names[i]] = age;

    if (age > oldestAge) {
      oldestAge = age;
      oldestName = names[i];
    }
  }
  oldAgeObj["name"] = oldestName
  oldAgeObj["age"] = oldestAge;
  console.log(oldAgeObj);
}

processData(users);
