import { ReactivePage } from './app.po';

describe('reactive App', function() {
  let page: ReactivePage;

  beforeEach(() => {
    page = new ReactivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
