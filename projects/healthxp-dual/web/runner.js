const cypress = require("cypress");
const tesults = require("cypress-tesults-reporter");

const TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImQzMzZjYTkzLWIxNDMtNGJlMi05ODc1LWE3M2RhMjQ2ZGY4ZS0xNjk0MjkwMDQxNjcxIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNTJiNzAzZGMtMTViMC00ZjI1LTkyYzEtNjc3ZDM2YzljMGJmIiwidHlwZSI6InQifQ.r5egr-TVJQb1Ii9HZ7kxP6yXHCv3r8D0hpzTkllPz5o";

cypress
  .run({
    // specs to run here
  })
  .then((results) => {
    const args = {
      target: TOKEN,
    };
    tesults.results(results, args);
  })
  .catch((err) => {
    console.error(err);
  });
