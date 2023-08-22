Feature("login");

Scenario("deve logar com sucesso", ({ I, loginScreen }) => {
  loginScreen.submit("I1SFPJ");
  I.see("Minha conta");
});

Scenario("não deve logar com matricula incorreta", ({ I, loginScreen }) => {
  loginScreen.submit("XPTL255");
  const message =
    "Acesso não autorizado! Entre em contato com a central de atendimento.";
  loginScreen.messageHaveText(message);
});
