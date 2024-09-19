// cypress/integration/chapters.page.test.tsx

describe('Chapterssite Links Test', () => {
  beforeEach(() => {
    // Visit the Chapterssite page before each test
    cy.visit('/CHAPTERS');
  });

  it('should have a working link to CHAPTERS', () => {
    cy.get('a[href="CHAPTERS/"]').should('exist').click();
    cy.url().should('include', '/CHAPTERS');
  });

  it('should have a working link to Chapter 1', () => {
    cy.get('a[href="CHAPTERS/1"]').should('exist').click();
    cy.url().should('include', '/CHAPTERS/1');
  });

  it('should have a working link to Chapter 2', () => {
    cy.get('a[href="CHAPTERS/2"]').should('exist').click();
    cy.url().should('include', '/CHAPTERS/2');
  });

  it('should have a working link to Chapter 3', () => {
    cy.get('a[href="CHAPTERS/3"]').should('exist').click();
    cy.url().should('include', '/CHAPTERS/3');
  });

  it('should have a working link to Chapter 4', () => {
    cy.get('a[href="CHAPTERS/4"]').should('exist').click();
    cy.url().should('include', '/CHAPTERS/4');
  });

  it('should have a working link to Chapter 5', () => {
    cy.get('a[href="CHAPTERS/5"]').should('exist').click();
    cy.url().should('include', '/CHAPTERS/5');
  });

  it('should have a working link to the Lastpage', () => {
    cy.get('a[href="/SECRET"]').should('exist').click();
    cy.url().should('include', '/SECRET');
  });

  it('should have a working link to the Nextpage', () => {
    cy.get('a[href="/example3"]').should('exist').click();
    cy.url().should('include', '/example3');
  });
});