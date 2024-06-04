import {IntegerRng} from "./IntegerRng";

export default class FloatSourcedIntegerRng implements IntegerRng {
    private static readonly UNSIGNED_INT_32_PRECISION_FACTOR = 2.3283064365386963e-10;
    private readonly floatRng: () => number;

    constructor(floatRng: () => number) {
        this.floatRng = floatRng;
    }

    public randomInteger(limit: number) {

        const minimalPowerOfTwoGreaterThenLimit = this.findMinimalPowerOfTwoGreaterThan(limit);

        let limitedSourceRandomNumber = this.getUnsignedIntegerFromSourceRng()
            % minimalPowerOfTwoGreaterThenLimit;

        while (limitedSourceRandomNumber >= limit) {

            limitedSourceRandomNumber = this.getUnsignedIntegerFromSourceRng()
                % minimalPowerOfTwoGreaterThenLimit;
        }

        return limitedSourceRandomNumber;
    }

    private getUnsignedIntegerFromSourceRng(): number {
        return this.floatRng() / FloatSourcedIntegerRng.UNSIGNED_INT_32_PRECISION_FACTOR;
    }

    private findMinimalPowerOfTwoGreaterThan(n: number): number {
        let power = 1;
        while (power < n) {
            power *= 2;
        }
        return power;
    }
}
