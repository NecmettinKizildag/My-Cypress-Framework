describe('JSON Object', () => {
    it('json key-value', () => {
        cy.visit('/');
        cy.get('#W0wltc > .QS5gu').click()

        const obj1 = {
            "key1":"value1",
            "key2":"value2",
            "key3":"value3"
        }

        console.log(obj1.key1);
        console.log(obj1["key2"])

        const arr1 = ["ali","ahmet","ayse","asli","arife","arda"]

        console.log(arr1[3])
    });
});