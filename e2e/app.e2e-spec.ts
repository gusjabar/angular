import { AngularMod6Page } from './app.po';

describe('angular-mod6 App', () => {
  let page: AngularMod6Page;

  beforeEach(() => {
    page = new AngularMod6Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
