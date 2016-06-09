import { OfficeAccountPage } from './app.po';

describe('office-account App', function() {
  let page: OfficeAccountPage;

  beforeEach(() => {
    page = new OfficeAccountPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('office-account works!');
  });
});
