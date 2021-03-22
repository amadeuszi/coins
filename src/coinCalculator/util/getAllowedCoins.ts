import { RollConfigModel } from "./RollsConfig";

export const getAllowedCoins = (rollsConfig: Array<RollConfigModel>): Array<number> => {
    return rollsConfig.map((rollConfig) => rollConfig.denomination);
}
