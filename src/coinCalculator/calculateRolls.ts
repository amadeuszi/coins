import {createGetHowManyInOneRoll} from "./util/getHowManyInOneRoll";
import {RollConfigModel} from "./util/RollsConfig";
import {createGetCoinsCount} from "./util/getCoinsCount.util";
import {getAllowedCoins} from "./util/getAllowedCoins";
import {CountedRoll} from "./model/CountedRollModel";
import {validateInput} from "./util/validateInput";

export type CountedRollsResult = Record<string, CountedRoll>;

export const calculateRolls = (input: Array<number>, config: Array<RollConfigModel>): CountedRollsResult => {
    validateInput(input, config);

    const { getHowManyInOneRoll } = createGetHowManyInOneRoll(config);
    const { getCoinsCount } = createGetCoinsCount(input);
    const allowedCoins = getAllowedCoins(config);

    return allowedCoins.reduce<CountedRollsResult>((prevValue, currValue) => {
        const coin = currValue;
        const coinCount = getCoinsCount(coin);
        const howManyInOneRoll = getHowManyInOneRoll(coin);
        const rollsCount = Math.floor(coinCount / howManyInOneRoll);
        const rest = coinCount % howManyInOneRoll;

        return {
            ...prevValue,
            [coin]: { rolls: rollsCount, rest }
        }
    }, {})
};
