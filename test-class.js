class Probability {
    equals(comparator) {
        return this.likelihood === comparator.likelihood;
    }

    Probability(probability) {
        this.likelihood = probability;
    }
}

module.exports = {Probability}