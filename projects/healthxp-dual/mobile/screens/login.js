const { I } = inject();

module.exports = {
  locators: {
    ip: { android: "#ipAddress" },
    enrollment: { android: "#enrollment_code" },
    message: { android: "#android:id/message" },
  },

  submit(enrollmentCode) {
    I.seeAppIsInstalled("com.papitorocks.healthxp");

    I.waitForElement(this.locators.ip, 5);
    I.fillField(this.locators.ip, "192.168.2.103");

    I.waitForElement(this.locators.enrollment, 5);
    I.fillField(this.locators.enrollment, enrollmentCode);

    I.tap("Entrar");
  },

  messageHaveText(text) {
    I.waitForElement(this.locators.message, 5);
    I.see(text, this.locators.message);
  },
};
