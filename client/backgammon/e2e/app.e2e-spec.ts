import { BackgammonPage } from './app.po';

describe('backgammon App', function() {
  let page: BackgammonPage;

  beforeEach(() => {
    page = new BackgammonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
