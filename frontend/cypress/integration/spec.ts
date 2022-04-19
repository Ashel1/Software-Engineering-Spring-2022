///<reference types="cypress"/>

import { eq } from "cypress/types/lodash";

//import Chance from 'chance';
//const chance = new Chance();

describe('login', ()=>{
//const email = chance.email();

  beforeEach(()=>{
    cy.visit('http://localhost:4200/Home');
  })

  it('has a title',()=>{
    cy.contains('Watching movies is fun');
  })
});

function sleep(milliseconds:any) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

describe('login pg', () => {
  var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
  var string = '';
  for(var ii=0; ii<8; ii++){
      string += chars[Math.floor(Math.random() * chars.length)];
  }

  const username = string + '@gmail.com';
  const password = "watch123";
  const fname = string;
  const lname = string;

  /*it('New user should be able to register', ()=>{
      cy.visit('/Signup');
      // cy.get('[name=registerlabel]').click();
      //cy.get('div[role=tab]').eq(1).click();
      cy.get('[formControlName=firstname]').type(`${fname}`);
      cy.get('[formControlName=lastname]').type(`${lname}`);
      cy.get('[formControlName=username]').type(`${username}`);
      cy.get('[formControlName=email]').type(`${username}`);
      cy.get('[formControlName=password]').type(`${password}`);
      cy.get('[name=register]').click();
  })

  it('User should be able to login', ()=>{

    cy.visit('/Home');
    cy.get('[name=loginbutton]').click();
    cy.get('[formControlName=username]').type(`${username}`);
    cy.get('[formControlName=password]').type(`${password}`);
    cy.get('[name=login]').click();
    })*/
    
    it('User should be able to answer questions', ()=>{

      cy.visit('/Home');
      cy.get('[name=ques]').click();
      cy.get('[type="radio"]').select("Watching By Myself",{force: true}).should('be.checked');
      //cy.get('#mat-radio-2').should('have.class', 'mat-radio-checked');
      //cy.contains('.example-selected-value', 'Watching By Myself')

      cy.visit('/Question2');
      cy.get('mat-selection-list').get('mat-list-option').contains('Netflix').click();
      cy.visit('/Question3');
      cy.get('[type="radio"]').eq(0).check({force: true});
      cy.visit('/Question4');
      cy.get('[type="radio"]').eq(1).check({force: true});
      cy.visit('/Question5');
      cy.get('[type="radio"]').eq(3).check({force: true});
      cy.visit('/Question6');
      sleep(1000);
      cy.get('[type="radio"]').eq(4).check({force: true});
      cy.visit('/ShowMovie');


      //cy.get('#mat-radio-2').should('have.class', 'mat-radio-checked');
      //cy.contains('.example-selected-value', 'Watching by myself')


      })
});



