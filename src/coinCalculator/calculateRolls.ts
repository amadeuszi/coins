import {createGetHowManyInOneRoll} from "./util/getHowManyInOneRoll";
import {RollConfigModel} from "./util/RollsConfig";
import {createGetCoinsCount} from "./util/getCoinsCount.util";
import {getAllowedCoins} from "./util/getAllowedCoins";
import {CountedRoll} from "./model/CountedRollModel";
import {validateInput} from "./util/validateInput";

export const calculateRolls = (input: Array<number>, config: Array<RollConfigModel>): Record<number, CountedRoll> => {
    validateInput(input, config);

    const { getHowManyInOneRoll } = createGetHowManyInOneRoll(config);
    const { getCoinsCount } = createGetCoinsCount(input);
    const allowedCoins = getAllowedCoins(config);
    const result: Record<number, CountedRoll> = {};

    allowedCoins.forEach((coin) => {
        const coinCount = getCoinsCount(coin);
        const howManyInOneRoll = getHowManyInOneRoll(coin);
        const rollsCount = Math.floor(coinCount / howManyInOneRoll);
        const rest = coinCount % howManyInOneRoll;

        result[coin] = { rolls: rollsCount, rest };
    })

    return result;
};
