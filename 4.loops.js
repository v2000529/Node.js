for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}

const arr1 = [1,2,3];
const arr2 = [4,5,6];
for (let i = 0,j = 0 ; i < arr1.length && j < arr2.length; i++,j++) {
    console.log("Element from arr1: " + arr1[i] + ", Element from arr2: " + arr2[j]);
}

let i = 1;

while (i <= 5) {
    console.log("While loop iteration: " + i);
    i++;
}

let j = 1;

do {
    console.log("Do-while loop iteration: " + j);
    j++;
} while (j <= 5);
