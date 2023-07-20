const { defineConfig } = require("cypress");

const { Pool } = require("pg");

const dbConfig = {
  host: "babar.db.elephantsql.com",
  user: "qkseuypx",
  password: "OlYO-og1KClPhsbo5xckc87L87U33wJ6",
  database: "qkseuypx",
  port: 5432,
};

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on("task", {
        deleteStudent(studentEmail) {
          return new Promise(function (resolve, reject) {
            const pool = new Pool(dbConfig);

            const query = "DELETE FROM students WHERE email = $1;";

            pool.query(query, [studentEmail], function (error, result) {
              if (error) {
                reject({ error: error });
              }
              resolve({ success: result });
              pool.end();
            });
          });
        },
      });
    },
  },
});
