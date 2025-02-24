function reverseArray(arr) {
    const ans = [];
    for (let i = 0; i < arr.length; i++) {
        ans.push(arr[arr.length - i - 1]);
    }
    return ans;
}

function maxElement(arr) {
    let maxelement = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxelement) {
            maxelement = arr[i];
        }
    }
    return maxelement;
}

const arr = [13, 10, 46, 80, 97];
console.log(reverseArray(arr));
console.log(maxElement(arr));