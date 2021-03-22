import { RollConfigModel } from "./RollsConfig";
import { getAllowedCoins } from "./getAllowedCoins";

export const validateInput = (input: Array<number>, config: Array<RollConfigModel>) => {
    const allowedCoins = getAllowedCoins(config);

    const allowedCoinsSet = new Set(allowedCoins);

    input.forEach((coin) => {
        if (!allowedCoinsSet.has(coin)) {
            throw new Error(`Detected wrong denomination in input: ${coin}`);
        }
    });
}
