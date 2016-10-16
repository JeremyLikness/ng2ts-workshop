import { DependencyInjectionPage } from './app.po';

describe('dependency-injection App', function() {
  let page: DependencyInjectionPage;

  beforeEach(() => {
    page = new DependencyInjectionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
