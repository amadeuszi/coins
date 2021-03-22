import { RollConfigModel } from "./RollsConfig";

export const createGetHowManyInOneRoll = (rollsConfig: Array<RollConfigModel>) => {
    const rollsConfigMap = new Map<number, number>();

    rollsConfig.forEach((roll) => {
        rollsConfigMap.set(roll.denomination, roll.howManyInOneRoll);
    })

    return {
        getHowManyInOneRoll: ((denomination: number): number => {
            const howMany = rollsConfigMap.get(denomination);

            if (howMany === undefined) {
                throw new Error(`This denomination is not allowed: ${denomination}`)
            }

            return howMany;
        })
    };
}
