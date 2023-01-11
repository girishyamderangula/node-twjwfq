// run `node index.js` in the terminal

let testCase1 = [
  {
    name: "Leo Messi",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 91,
  },
  {
    name: "Cristiano Ronaldo",
    dob: "31-05-1992",
    biology: 90,
    chemistry: 81,
  },
  {
    name: "Virat Kohli",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 96,
  },
  {
    name: "Rohit Sharma",
    dob: "31-12-1995",
    biology: 85,
    chemistry: 86,
  },
  {
    name: "Viswanathan Anand",
    dob: "12-12-1994",
    biology: 99,
    chemistry: 10,
  },
];
console.log("testCase1 are:")
console.log(testCase1)
let sortedtestCase1 = testCase1.sort(
    (a, b) => (a.chemistry < b.chemistry) ? 1 : (a.chemistry > b.chemistry) ? -1 : 0);

console.log("testCase1 sorted based on descending order of their chemistry Marks are:")
console.log(sortedtestCase1);