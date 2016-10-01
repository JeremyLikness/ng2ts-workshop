import { ConnectTsNg2Page } from './app.po';

describe('connect-ts-ng2 App', function() {
  let page: ConnectTsNg2Page;

  beforeEach(() => {
    page = new ConnectTsNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
