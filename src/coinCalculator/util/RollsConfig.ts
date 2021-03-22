export interface RollConfigModel {
    denomination: number,
    howManyInOneRoll: number
}

export const GlobalRollsConfig: Array<RollConfigModel> = [
    { denomination: 1, howManyInOneRoll: 40 },
    { denomination: 2, howManyInOneRoll: 40 },
    { denomination: 5, howManyInOneRoll: 30 },
    { denomination: 10, howManyInOneRoll: 50 },
    { denomination: 20, howManyInOneRoll: 20 },
    { denomination: 50, howManyInOneRoll: 40 },
]
