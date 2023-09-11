const orders = require("../fixtures/orders.json");

Feature("Pedido de ajuda");

Scenario(
  "deve poder  enviar um pedido de ajuda",
  async ({ I, loginScreen, accountScreen, helpOrderScreen }) => {
    const dataTest = orders.help;

    I.resetStudent(dataTest.student);
    const enrollment_code = await I.createEnroll(dataTest);

    loginScreen.with(enrollment_code);
    accountScreen.userLoggedIn();

    helpOrderScreen.submit(dataTest.question);

    const message =
      "Sua dúvida foi recebida e será avaliada pela nossa equipe. Agora é só aguardar para receber o nosso feedback.";
    I.popHaveText(message);
  }
);
