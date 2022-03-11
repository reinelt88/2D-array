'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the hourglassSum function below.
function hourglassSum(arr) {

    let maxSum = -999999

    const movement = 4

    //Horizontal movement
    for (let j = 0; j < movement; j++) {
        //Vertical vertical
        for (let i = 0; i < movement; i++) {
            const pos1 = arr[0+i][0+j]
            const pos2 = arr[0+i][1+j]
            const pos3 = arr[0+i][2+j]

            const pos4 = arr[1+i][1+j]

            const pos5 = arr[2+i][0+j]
            const pos6 = arr[2+i][1+j]
            const pos7 = arr[2+i][2+j]

            const sumResult = sum(pos1, pos2, pos3, pos4, pos5, pos6, pos7);

            if (sumResult > maxSum) {
                maxSum = sumResult;
            }
        }
    }

    return maxSum
}

function sum (...numbers) {
    let sum = 0
    for(let i = 0; i < numbers.length; i++) {
        sum+= numbers[i]
    }
    return sum;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}
