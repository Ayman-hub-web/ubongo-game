// let c1 = false,
//     c2 = false,
//     c3 = false,
//     c4 = false,
//     c5 = false,
//     c6 = false,
//     c7 = false,
//     c8 = false,
//     c9 = false,
//     c10 = false,
//     c11 = false,
//     c12 = false,
//     c13 = false,
//     c14 = false,
//     c15 = false,
//     c16 = false;
let board = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'c11', 'c12', 'c13', 'c14', 'c15', 'c16'];
let shuffleObjects = [];

let jObject = [
    ['c4', 'c8', 'c12', 'c16', 'c15'],
    ['c3', 'c7', 'c11', 'c15', 'c14'],
    ['c9', 'c10', 'c11', 'c12', 'c16'],
    ['c5', 'c6', 'c7', 'c8', 'c12'],
    ['c1', 'c2', 'c3', 'c4', 'c8]'],
    ['c1', 'c5', 'c6', 'c7', 'c8]', ]
    ['c5', 'c9', 'c10', 'c11', 'c12'],
    ['c1', 'c2', 'c6', 'c10', 'c14'],
    ['c2', 'c3', 'c7', 'c11', 'c15'],
    ['c3', 'c4', 'c8', 'c12', 'c16'],
    ['c4', 'c8', 'c7', 'c6,', 'c5'],
    ['c8', 'c12', 'c11', 'c10', 'c9'],
    ['c16', 'c15', 'c11', 'c7,', 'c3'],
    ['c15', 'c14', 'c10', 'c6', 'c2'],

];

let rectangleObject = [
    ['c1', 'c2', 'c5', 'c6'],
    ['c2', 'c3', 'c6', 'c7'],
    ['c3', 'c4', 'c7', 'c8'],
    ['c5', 'c6', 'c9', 'c10'],
    ['c6', 'c7', 'c10', 'c11'],
    ['c7', 'c8', 'c11', 'c12'],
    ['c10', 'c11', 'c14', 'c15'],
    ['c11', 'c12', 'c15', 'c16']
];

let verticalObject = [
    ['c1', 'c5', 'c9'],
    ['c2', 'c6', 'c10'],
    ['c3', 'c7', 'c11'],
    ['c4', 'c8', 'c12'],
    ['c6', 'c10', 'c14'],
    ['c7', 'c11', 'c15'],
    ['c8', 'c12', 'c16'],
    ['c16', 'c15', 'c14'],
    ['c12', 'c11', 'c10'],
    ['c8', 'c7', 'c6'],
    ['c4', 'c3', 'c2'],
    ['c1', 'c2', 'c3'],
    ['c6', 'c6', 'c7'],
    ['c9', 'c10', 'c11']
];

let otherObject = [
    ['c12', 'c16', 'c15'],
    ['c11', 'c15', 'c14'],
    ['c9', 'c10', 'c14'],
    ['c10', 'c11', 'c15'],
    ['c11', 'c12', 'c16'],
    ['c11', 'c15', 'c16'],
    ['c10', 'c14', 'c15'],
    ['c8', 'c12', 'c11'],
    ['c7', 'c11', 'c10'],
    ['c6', 'c10', 'c9'],
    ['c5', 'c9', 'c10'],
    ['c6', 'c10', 'c11'],
    ['c7', 'c11', 'c12'],
    ['c7', 'c8', 'c12'],
    ['c6', 'c7', 'c11'],
    ['c5', 'c6', 'c10'],
    ['c6', 'c5', 'c9'],
    ['c7', 'c6', 'c10'],
    ['c8', 'c7', 'c11'],
    ['c4', 'c8', 'c7'],
    ['c3', 'c7', 'c6'],
    ['c2', 'c6', 'c5'],
    ['c2', 'c1', 'c5'],
    ['c3', 'c2', 'c6'],
    ['c4', 'c3', 'c7']
];

function init() {
    console.log('Test');
    main(board, jObject, rectangleObject, verticalObject, otherObject);
}

function main(board, jObject, rectangleObject, verticalObject, otherObject) {
    for (let i = 0; i < board.length; i++) {
        board[i] = false;
    }
    shuffleAllArrays();
    shuffle(shuffleObjects);
    checkGame();

}

function checkGame() {
    while (shuffleObjects.length > 0) {
        let firstObject = shuffleObjects.pop();
        shuffleObjects = shuffleObjects.splice(shuffleObjects.length - 1, 1);
        console.log(firstObject[0]);
        for (let x = 0; x < firstObject.length; x++) {
            let cell = document.getElementById(firstObject[x]);
            if (cell.innerHTML == true) {
                document.getElementById('result').innerHTML = "Game fail";
                return;
            } else {
                document.getElementById(firstObject[x]).innerHTML = true;
            }
        }
        shuffleObjects.length--;
    }
    document.getElementById('result').innerHTML = "Game successfully";
    return;
}

function shuffleAllArrays() {
    let jObjectRand = shuffle(jObject);
    let jObjectRandLast = jObjectRand.pop();
    shuffleObjects.push(jObjectRandLast);

    let rectangleObjectRand = shuffle(rectangleObject);
    let rectangleObjectRandLast = rectangleObjectRand.pop();
    shuffleObjects.push(rectangleObjectRandLast);

    let verticalObjectRand = shuffle(verticalObject);
    let verticalObjectRandLast = verticalObjectRand.pop();
    shuffleObjects.push(verticalObjectRandLast);

    let otherObjectRand = shuffle(otherObject);
    let otherObjectRandLast = otherObjectRand.pop();
    shuffleObjects.push(otherObjectRandLast);
}


function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}