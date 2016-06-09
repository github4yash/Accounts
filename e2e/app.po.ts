export class OfficeAccountPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('office-account-app h1')).getText();
  }
}
