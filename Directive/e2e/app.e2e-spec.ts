import { DirectivePage } from './app.po';

describe('directive App', () => {
  let page: DirectivePage;

  beforeEach(() => {
    page = new DirectivePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
