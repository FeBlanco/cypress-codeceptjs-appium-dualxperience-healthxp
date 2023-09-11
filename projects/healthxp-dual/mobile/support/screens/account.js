const { I } = inject();

class accountScreen {
  userLoggedIn() {
    I.see("Minha conta");
  }
}

module.exports = new accountScreen();
