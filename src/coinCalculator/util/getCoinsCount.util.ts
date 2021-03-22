export const createGetCoinsCount = (coins: Array<number>) => {

    const countedCoinsMap = new Map<number, number>();

    coins.forEach((coin) => {
        const howManyYet = countedCoinsMap.get(coin) ?? 0;

        countedCoinsMap.set(coin, howManyYet + 1);
    })

    return {
        getCoinsCount: ((denomination: number): number => {
            return countedCoinsMap.get(denomination) ?? 0;
        })
    }
}
