# Tip Jar Coins Calculator

### Task description

https://gist.github.com/mdybciak/a731577d1091d657ff81f377b553797a


### Running tests


`npm run test` or `jest`

### Main function responsible for calculations

#### calculateRolls

Function takes as arguments input and rolls config. Because of dependency
injection of rolls config the solution is flexible.

Function returns object `Record<number, CountedRoll>` which represents
how many rolls were used for every denomination,and how many coins were left.
