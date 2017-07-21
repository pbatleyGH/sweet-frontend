import { SweetFrontendPage } from './app.po';

describe('sweet-frontend App', function() {
  let page: SweetFrontendPage;

  beforeEach(() => {
    page = new SweetFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
