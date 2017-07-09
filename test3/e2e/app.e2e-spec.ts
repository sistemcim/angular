import { Test3Page } from './app.po';

describe('test3 App', () => {
  let page: Test3Page;

  beforeEach(() => {
    page = new Test3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
