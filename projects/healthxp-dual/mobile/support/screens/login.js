const { I } = inject();

class loginScreen {
  with(enrollment_code) {
    I.seeAppIsInstalled("com.papitorocks.healthxp");

    //adicionaro ip
    I.fillField("#ipAddress", "ip_da_rede");
    I.fillField("#enrollment_code", enrollment_code);
    I.click("#btnLogin");
  }
}

module.exports = new loginScreen();
