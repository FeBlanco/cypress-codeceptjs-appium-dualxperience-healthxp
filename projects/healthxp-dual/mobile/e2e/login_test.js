const students = require("../fixtures/students.json");

Feature("login");

Scenario(
  "deve logar com sucesso",
  async ({ I, loginScreen, accountScreen }) => {
    const dataTest = students.success_login;

    I.resetStudent(dataTest.student);
    const enrollment_code = await I.createEnroll(dataTest);

    loginScreen.with(enrollment_code);
    accountScreen.userLoggedIn();
  }
);

Scenario("não deve logar com matricula incorreta", ({ I, loginScreen }) => {
  loginScreen.with("XPTL255");
  const message =
    "Acesso não autorizado! Entre em contato com a central de atendimento.";
  I.popHaveText(message);
});

Scenario("não deve logar com o plano health", async ({ I, loginScreen }) => {
  const dataTest = students.not_login;

  I.resetStudent(dataTest.student);
  const enrollment_code = await I.createEnroll(dataTest);

  loginScreen.with(enrollment_code);
  const message =
    "Seu plano não possui permissão para uso do App! Entre em contato com a central de atendimento.";
  I.popHaveText(message);
});
