const {Probability} = require("./test-class")

describe('Test instance equality', () => {
    test('Are instances equal', () => {
        let p1 = new Probability(0.5);

        expect(p1.equals(p1)).toBe(true);
    })

    // test('Are different instances unequal', () => {
    //     let p1 = new Probability(0.5);
    //     let p2 = new Probability(0.5);

    //     expect(p1.equals(p2)).toBe(false);
    // })
})

describe('Test instance equivalence', () => {
    test('Are instances equivalent', () => {
        let p1 = new Probability(0.5);
        let p2 = new Probability(0.5);

        expect(p1.equals(p2)).toBe(true);
    })

    test('Are different instances non-equivalent', () => {
        let p1 = new Probability(0.5);
        let p2 = new Probability(0.7);

        expect(p1.equals(p2)).toBe(false);
    })
})

describe('Test coin flip versus dice evens', () => {
    test('Coin flip equals dice evens', () => {
        let diceIs2 = diceIs4 = diceIs6 = new Probability(1.0 / 6.0);
        let diceIsEvens = diceIs2.xor(diceIs4).xor(diceIs6);

        let coinIsHeads = new Probability(0.5);

        expect( diceIsEvens.equals(coinIsHeads) ).toBe(true);
    })

    test('Coin flip equals dice 1 or 2', () => {
        let diceIs1 = diceIs2 = new Probability(1.0 / 6.0);
        let diceIsOneOrTwo = diceIs1.xor(diceIs2);

        let coinIsHeads = new Probability(0.5);

        expect( diceIsOneOrTwo.equals(coinIsHeads) ).toBe(false);
    })
})

describe('Test and functionality', () => {
    test('1/5 and 1/5 == 1/25', () => {
        let fifth = new Probability(1.0 / 5.0);
        let twentyfifth = new Probability(1.0 / 25.0);

        expect( fifth.and(fifth).equals(twentyfifth) ).toBe(true);
    })

    test('1/500 and 1/500 == 1/250000', () => {
        let fifth = new Probability(1.0 / 500.0);
        let twentyfifth = new Probability(1.0 / 250000.0);

        expect( fifth.and(fifth).equals(twentyfifth) ).toBe(true);
    })
})
