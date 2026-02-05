function getFirstElement<T>(arr: T[]) {
    return arr[1];
}

const el = getFirstElement<any>(["harkiratSingh", 2]);
console.log(el)