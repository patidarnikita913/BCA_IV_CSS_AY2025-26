function removeByValue(arr, value){
    const idx =arr.indexOf(value);

    if(idx >-1){
        arr.splice(idx,1);
        console.log(`Removed "${value}" at index '${idx}'`);
        return true;
    }else{
        console.log(`"${value}"no found in Array!`);
        return false;
    }
}

function removeByIndex(arr,idx){
    if(idx>=0 && idx<arr.length){
        const removed =arr.splice(idx,1);
        console.log(`Removed element at index : ${idx} : ${removed[0]}`);
        return true;
    }else{
        console.log("Invalid index! : "+idx);
        return false;
    }
}

let fruites = ["apple", "orange", "mango", "grapes","banana"];
console.log("Original Array : ",fruites);

console.log(removeByValue(fruites,"banana"));
console.log("Array after remove by value : ",fruites);

console.log(removeByIndex(fruites,2));
console.log("Array after remove by index : ",fruites);