import { fa, faker } from "@faker-js/faker";


let firstname = faker.person.firstName('male');
let lastname = faker.person.lastName();
let email = faker.internet.email({firstName : firstname})
let password = faker.internet.password();
let address = faker.location.streetAddress()
let state = faker.location.state()
let city = faker.location.city()
let zipcode = faker.location.zipCode()
let mobileNumber = faker.phone.number()

describe('Faker Kullanimi', () => {
    it('automationexercise.com signup testi', () => {
        cy.visit('https://www.automationexercise.com/');
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

        cy.get('[data-qa="signup-name"]').type(firstname)
        cy.get('[data-qa="signup-email"]').type(email)
        cy.get('[data-qa="signup-button"]').click()

        cy.get('#id_gender1').check()
        cy.get('[data-qa="password"]').type(password)
        cy.get('[data-qa="days"]').select(15)
        cy.get('[data-qa="months"]').select(4)
        cy.get('[data-qa="years"]').select(23)
        cy.get('[data-qa="first_name"]').type(firstname)
        cy.get('[data-qa="last_name"]').type(lastname)
        cy.get('[data-qa="address"]').type(address)
        cy.get('[data-qa="country"]').select(1)
        cy.get('[data-qa="state"]').type(state)
        cy.get('[data-qa="city"]').type(city)
        cy.get('[data-qa="zipcode"]').type(zipcode)
        cy.get('[data-qa="mobile_number"]').type(mobileNumber)
        cy.get('[data-qa="create-account"]').click()

        cy.log(email,password)

    });

    it('login test', () => {
        cy.visit('https://www.automationexercise.com/');
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('[data-qa="login-email"]').type(email)
        cy.get('[data-qa="login-password"]').type(password)
        cy.get('[data-qa="login-button"]').click()
    });
});