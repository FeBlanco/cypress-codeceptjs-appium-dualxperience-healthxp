const { I } = inject();

class helpOrderScreen {
  submit(question) {
    I.click("Pedir ajuda");

    I.click("#btnHelperOrder");
    I.fillField("#textQuestion", question);
    I.click("#btnSubmit");
  }
}
module.exports = new helpOrderScreen();
