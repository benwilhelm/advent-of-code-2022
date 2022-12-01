const fs = require("fs");

const input = fs.readFileSync("./input.txt", "utf-8");

const sumArray = (args) => {
  // console.log(args);
  return args.reduce((a, b) => {
    return +a + +b;
  }, 0);
};

const elves = input
  .trim()
  .split("\n\n")
  .map((rawElf) => rawElf.trim().split("\n"))
  .map(sumArray);
elves.sort((a, b) => (a < b ? 1 : -1));
console.log("Top Elf", elves[0]);

const top3 = elves.slice(0, 3);
console.log("Top 3 Total", sumArray(top3));
