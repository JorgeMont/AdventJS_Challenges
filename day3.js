const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

//peso soportado, x2 la long del nombre

function distributeGifts(packOfGifts, reindeers) {
    const boxSize = packOfGifts.reduce((acc, gift) => {
        return acc + gift.length
    }, 0);
    
    const capacity = reindeers.reduce((acc, reindeer) => {
        return acc + reindeer.length * 2
    }, 0);
    return Math.trunc(capacity / boxSize);
}

const result = distributeGifts(packOfGifts, reindeers); // 2
console.log(result);