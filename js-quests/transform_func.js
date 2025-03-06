const people = ['JoHn', 'ChrISTiana', 'anThoNY', 'MARia', 'jaMeS', 'MIChaEl', 'jeNNIFeR'];

function transformArray(array, transform) {
    if (!Array.isArray(array)) throw new Error("Parameter 'array' is not array object");
    if (typeof transform !== "function") throw new Error("Parameter 'transform' is not function");
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray[i] = transform(array[i]);
    }

    return (newArray);
}

const newPepole = transformArray(people, (str) => {
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        if (i === 0) newStr += str[i].toUpperCase();
        else newStr += str[i].toLowerCase();
    }

    return (newStr);
})

console.log(newPepole)