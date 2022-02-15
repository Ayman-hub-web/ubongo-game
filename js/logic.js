function init() {
    let c1 = document.getElementById('c1');
    let c2 = document.getElementById('c2');
    let c3 = document.getElementById('c3');
    let c4 = document.getElementById('c4');
    let c5 = document.getElementById('c5');
    let c6 = document.getElementById('c6');
    let c7 = document.getElementById('c7');
    let c8 = document.getElementById('c8');
    let c9 = document.getElementById('c9');
    let c10 = document.getElementById('c10');
    let c11 = document.getElementById('c11');
    let c12 = document.getElementById('c12');
    let c13 = document.getElementById('c13');
    let c14 = document.getElementById('c14');
    let c15 = document.getElementById('c15');
    let c16 = document.getElementById('c16');

    jObjectGreen();
    rectangleObjectYellow();
    verticalObject();
    otherObject();

    // let j = [{'c4, c8, c12, c16', 'c3-down',];
}

function jObjectGreen() {
    c4.style.backgroundColor = 'green';
    c8.style.backgroundColor = 'green';
    c12.style.backgroundColor = 'green';
    c16.style.backgroundColor = 'green';
    c15.style.backgroundColor = 'green';
}

function rectangleObjectYellow() {
    c1.style.backgroundColor = 'yellow';
    c2.style.backgroundColor = 'yellow';
    c5.style.backgroundColor = 'yellow';
    c6.style.backgroundColor = 'yellow';
}

function verticalObject() {
    c3.style.backgroundColor = 'blue';
    c7.style.backgroundColor = 'blue';
    c11.style.backgroundColor = 'blue';
}

function otherObject() {
    c9.style.backgroundColor = 'pink';
    c10.style.backgroundColor = 'pink';
    c14.style.backgroundColor = 'pink';
}