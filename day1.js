const gifts = ['cat', 'game', 'socks']


function wrapping(gifts) {
    return gifts.map(regalo => {
        let wrappingPaper = "*".repeat(regalo.length + 2);
        return wrappingPaper + "\n*" + regalo + "*\n" + wrappingPaper
    });
}

const wrapped = wrapping(gifts)
console.log(wrapped)
/* [
    "*****\n*cat*\n*****",
    "******\n*game*\n******",
    "*******\n*socks*\n*******"
] */