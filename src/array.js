// let arr =[1,2,2,3,4,5,6,7,6,6,7,87,];
// let newarray= Array.from(new Set(arr));
// console.log(newarray);


// let arra = [1, 1, 2, 3, 4, 4, 5, 6, 7, 88, 88, 7];
// let newarr = arra.filter((value, index, self) => {
//   return self.indexOf(value) === index;
// });
// console.log(newarr);

// remove duplicate in array
// const numbers=[1,1,2,3,4,4,5,6,7,88,88,7];
// const reverse= toReversed(numbers);
// console.log(reverse);

// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log(arr); // [5, 4, 3, 2, 1]

// let str="sainath"
// let newstr="";
// for(let i=str.length-1;i>=0;i--){
//     newstr+=str[i]
//     // console.log(newstr);
// }
// console.log(newstr);

// const str ="nagaraj"
// const reversestr=str.split('').reverse().join('');
// console.log(reversestr);

// const str = "hello world";
// const newstr = str.split("").reverse().join("");
// console.log(newstr);
 

const nums = [1,2,34,45,32,43,22,44,33,3233,444,334,32,221,];

 const res ={even:[],odd:[]}
 for(let i of nums){
    if((i% 2===0) ? res.even.push(i) :res.odd.push(i));
    console.log(res);
 }

