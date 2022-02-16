let allArrays = [];

let jObject = [
    ['c4', 'c8', 'c12', 'c16', 'c15'],
    ['c3', 'c7', 'c11', 'c15', 'c14'],
    ['c9', 'c10', 'c11', 'c12', 'c16'],
    ['c5', 'c6', 'c7', 'c8', 'c12'],
    ['c1', 'c2', 'c3', 'c4', 'c8'],
    ['c1', 'c5', 'c6', 'c7', 'c8'],
    ['c5', 'c9', 'c10', 'c11', 'c12'],
    ['c1', 'c2', 'c6', 'c10', 'c14'],
    ['c2', 'c3', 'c7', 'c11', 'c15'],
    ['c3', 'c4', 'c8', 'c12', 'c16'],
    ['c4', 'c8', 'c7', 'c6', 'c5'],
    ['c8', 'c12', 'c11', 'c10', 'c9'],
    ['c16', 'c15', 'c11', 'c7', 'c3'],
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

let verticalObjects = [
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

let otherObjects = [
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

/**
 * 
 * function to load all data on index page
 */
function init() {
    shuffleAllArrays();
    checkGame();
}

/**
 * this function check if game fail or not and write on index page a message
 * @returns 
 * 
 */
function checkGame() {

    while (allArrays.length > 0) {
        let firstObject = allArrays.pop();
        for (let x = 0; x < firstObject.length; x++) {
            let cell = document.getElementById(firstObject[x]);
            if (cell.innerHTML == 'true') {
                document.getElementById('result-fail').innerHTML = "Game fail";
                return;
            } else {
                document.getElementById(firstObject[x]).innerHTML = 'true';
            }
        }
    }
    document.getElementById('result').innerHTML = "Game successfully";
    return;
}


/**
 * this function build a new array from all global arrays. It take randomly a item (array)
 * from each global arrays and push them in a new array (allArrays)
 */
function shuffleAllArrays() {

    let jObjectRand = getRandom(jObject, jObject.length);
    let jObjectRandLast = jObjectRand.pop();

    let rectangleObjectRand = getRandom(rectangleObject, rectangleObject.length);
    let rectangleObjectRandLast = rectangleObjectRand.pop();

    let verticalObjectRand = getRandom(verticalObjects, verticalObjects.length);
    let verticalObjectRandLast = verticalObjectRand.pop();

    let otherObjectRand = getRandom(otherObjects, otherObjects.length);
    let otherObjectRandLast = otherObjectRand.pop();

    allArrays.push(rectangleObjectRandLast);
    allArrays.push(verticalObjectRandLast);
    allArrays.push(otherObjectRandLast);
    allArrays.push(jObjectRandLast);
}


/**
 * random function to shuffle randomly all arrays (jObject,rectangleObject,verticalObjectRand and otherObjectRand ) in a array
 * @param {array} arr 
 * @param {number} n 
 * @returns 
 */
function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}


/**
 * fuction to play again 
 */
function play() {
    window.location.reload();
}