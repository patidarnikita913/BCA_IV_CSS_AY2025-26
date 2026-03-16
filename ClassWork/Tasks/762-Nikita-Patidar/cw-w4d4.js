//1. Removing Elements from an array
//Method 1 : Using Filter()

const numbers=[1,5,9,8,34,5];
const remove=8;
const without8=numbers.filter(n=>n!==8);
console.log("\n....Using Filter()....\n");
console.log(`Original Array ${numbers}`);
console.log(`Without ${remove}, Array ; ${without8}`);

//Method 2 : using splice()

const arr=[1,2,3,4,5,6,7];
console.log("\n...using splice()...\n")
console.log(`array before removal ${arr}`);
arr.splice(5,1);
console.log(`Array after removal ${arr}`);

//Method 3 : Remove by value

function removeByValue(arr, value){
    return arr.filter(item=>item!=value);
}
const fruits=['cherry','apple','tomato','banana','chilli'];
const fruitArr=removeByValue(fruits,'chilli');

console.log("\n.....Remove by value....\n")
console.log(`Original Array :  ${fruits}`);
console.log(`After remove by value :  ${fruitArr}`);

//Method 4: Remove first occurance

function removeFirstOccurance(arr,val){
    const index=arr.indexOf(val);
    if(index >-1){
        return [...arr.slice(0,index),...arr.slice(index+1)];
    }
    return arr;
}
const fruits2=['cherry','banana','apple','tomato','chilli','banana'];
console.log("\n...Remove first occurance...\n")
console.log("Array before removal of first occurance of 'banana' : ", fruits2);
console.log("Array after removal :");
console.log(removeFirstOccurance(fruits2,"banana"));

// const merged2=[...arr1,...arr2];
// console.log("Merged Array using spread operator : ",merged2);
// //Method 2 :spread operator
// const merged3=[...arr1,...arr2,...[86,55,9,5]];
// console.log("Merged Multiple Arrays :", merged3);

//3. Removing duplicates

//Method 1 : Using Set

const nums=[1,2,3,4,5,6,7,8,3,4,2,6,2,9,7,9];
const uniqueSet=new Set(nums);
const uniqueArr=[...uniqueSet];
console.log("Original Array : ", nums);
console.log("Array with only uniques values : ", uniqueArr);

// const fruitsSet=new Set(["mango","apple","banana","apple","mango","lichi","pineapple","guava"]);
// console.log(typeof(fruitsSet));
// console.log(fruitsset[2]);
// for(const fruit of friutsset){
//     console.log(fruit);
// }
// console.log("Using for each...");

// fruitsSet.forEach((f)=>{
//     console.log(f);
// })
// console.log("-----------");
// console.log(setValue.next().value);

//Method 2: Using filter();
const unq=numbers.filter((num,idx)=> nums.indexOf(num)==idx);
console.log("Removed Duplicates using filter(): ");
console.log(unq);

//Method 3 : Using reduce()

const uniqueUsingReduce = nums.reduce((acc, num)=>{
    if(!acc.includes(num)){
        acc.push(num);
    }
    return acc;
},[]);

console.log("Original Array : ",nums);
console.log("Array containin unique values (create using reduce() : ");
console.log(uniqueUsingReduce);
const numArr=[54,4,7,3,87,2,67,9];
console.log("unsorted numeric array : ",numArr);
const sorted =[...numArr].sort((a,b)=>a-b);
console.log("numeric array after sorting in ascending : " ,sorted);
const sortt=[...numArr].sort((a,b)=>b-a);
console.log("numeric array after sorting in descending : ",sortt);
console.log("Original Array : ",numArr);

//String sorting(alphabetical)
const words=["potato","zebra","apple","cow","banana","fish"];
const sortedWord=words.sort();
console.log("sortedWords : ", sortedWord);
//Case-insensitive sorting
const sortedWords=words.sort((a,b)=>a.toLowerCase().localeCompare(b.toLowerCase()));
console.log("sortedWords : ", sortedWord);

//5. sorting objects
const students=[
    {name :"Rajat", marks:78},
    {name : "Sanjay",marks:64},
    {name : "riya",marks:89},
    {name : "akash",marks:75},
];

//sort by property

//sort in ascending order(numbers)
const byMarks=[...students].sort((a,b) => b.marks-a.marks);
console.log("sorted object by marks : ", byMarks);

//sort by name
const byName=[...students].sort((a,b)=> a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
console.log("Sorted by name : ",byName);








































































































































