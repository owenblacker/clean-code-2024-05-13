const {Probability} = require("./test-class")

describe('Test instances', () => {
    test('Are instances equal', () => {
        let p1 = new Probability();

        expect(p1.equals(p1)).toBe(true);
    })

    test('Are different instances unequal', () => {
        let p1 = new Probability();
        let p2 = new Probability();

        expect(p1.equals(p2)).toBe(false);
    })
})