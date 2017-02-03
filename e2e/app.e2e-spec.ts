import { MynpmtestPage } from './app.po';

describe('mynpmtest App', function() {
  let page: MynpmtestPage;

  beforeEach(() => {
    page = new MynpmtestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
