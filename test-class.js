class Probability {
    equals(comparator) {
        // console.log(`This: ${this.likelihood}, comparator: ${comparator.likelihood}`)

        return this.likelihood === comparator.likelihood;
    }

    constructor(probability) {
        this.likelihood = probability;
    }

    xor(probability) {
        return new Probability(this.likelihood + probability.likelihood);
    }

    and(probability)
    {
        return this._and_reciprocal(probability);
        // return this._and_log(probability);
    }

    _and_reciprocal(probability) {
        let product = (1 / this.likelihood) * (1 / probability.likelihood);

        return new Probability(1 / product);
    }

    _and_log(probability) {
        let MULTIPLIER = Math.pow(10, this._fractionLength(this.likelihood) + this._fractionLength(probability.likelihood));
        let thisShift = this.likelihood * MULTIPLIER;
        let thatShift = probability.likelihood * MULTIPLIER;

        // console.log(`Unshifted: ${this.likelihood} * ${probability.likelihood} = ${this.likelihood * probability.likelihood}`);

        // console.log(`Shifted by ${MULTIPLIER} (${this._fractionLength(this.likelihood)} + ${this._fractionLength(probability.likelihood)}): ${thisShift} * ${thatShift} = ${thisShift * thatShift}`);

        return new Probability(thisShift * thatShift / MULTIPLIER / MULTIPLIER);
    }

    _fractionLength(num)
    {
        return Math.ceil(Math.log10(1 / num));
    }
}

module.exports = {Probability}