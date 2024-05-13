class Probability {
    equals(comparator) {
        console.log(`This: ${this.likelihood}, comparator: ${comparator.likelihood}`)

        return this.likelihood === comparator.likelihood;
    }

    constructor(probability) {
        this.likelihood = probability;
    }

    or(probability) {
        return new Probability(this.likelihood + probability.likelihood)
    }
}

module.exports = {Probability}