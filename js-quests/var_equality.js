const a = 2;
const b = 2;
const c = 8;

function getEquality(numberArray) {
    const equalityArray = [];

    for (let i = 0; i < numberArray.length; i++) {
        const compareArray = numberArray.filter((argV, argI) => argI !== i);

        equalityArray[i] = 0;
        for (let j = 0; j < compareArray.length; j++) {
            if (numberArray[i] === compareArray[j]) equalityArray[i]++;
        }
    }

    return (equalityArray);
}

function printEquality(...args) {
    const equalityArray = getEquality(args);

    for (let i = 0; i < args.length; i++) {
        console.log("La valeur " + args[i] + " à l'index " + i + " est présente " + (equalityArray[i] + 1) + " fois");
    }
}

printEquality(a, b, c);