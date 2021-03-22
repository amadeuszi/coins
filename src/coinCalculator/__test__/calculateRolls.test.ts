import { calculateRolls } from "../calculateRolls";
import { SampleInput } from "./sampleInput";
import { GlobalRollsConfig } from "../util/RollsConfig";
import { CountedRoll } from "../model/CountedRollModel";

describe('calculateRolls', () => {
    it('should calculate on provided test input', () => {
        const input = SampleInput;
        const result = calculateRolls(input, GlobalRollsConfig);

        const expectedResult: Record<number, CountedRoll> = {
            '1': { rolls: 40, rest: 34 },
            '2': { rolls: 40, rest: 10 },
            '5': { rolls: 55, rest: 13 },
            '10': { rolls: 33, rest: 40 },
            '20': { rolls: 85, rest: 11 },
            '50': { rolls: 42, rest: 12 }
        }

        expect(result).toEqual(expectedResult);
    })


    it('should calculate on one coin input', () => {
        const input = [1];
        const result = calculateRolls(input, GlobalRollsConfig);

        const expectedResult: Record<number, CountedRoll> = {
            '1': { rolls: 0, rest: 1 },
            '2': { rolls: 0, rest: 0 },
            '5': { rolls: 0, rest: 0 },
            '10': { rolls: 0, rest: 0 },
            '20': { rolls: 0, rest: 0 },
            '50': { rolls: 0, rest: 0 }
        };

        expect(result).toEqual(expectedResult);
    })

    it('should calculate on empty input', () => {
        const input: Array<number> = [];
        const result = calculateRolls(input, GlobalRollsConfig);

        const expectedResult: Record<number, CountedRoll> = {
            '1': { rolls: 0, rest: 0 },
            '2': { rolls: 0, rest: 0 },
            '5': { rolls: 0, rest: 0 },
            '10': { rolls: 0, rest: 0 },
            '20': { rolls: 0, rest: 0 },
            '50': { rolls: 0, rest: 0 }
        };

        expect(result).toEqual(expectedResult);
    })


    it('should throw error on wrong input denomination', () => {
        const input: Array<number> = [3];
        expect(() => calculateRolls(input, GlobalRollsConfig)).toThrow(Error);
    })
})
