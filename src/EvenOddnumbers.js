const nums = [1,2,34,45,32,43,22,44,33,3233,444,334,32,221,];

 const res ={even:[],odd:[]}
 for(let i of nums){
    if((i% 2===0) ? res.even.push(i) :res.odd.push(i));
    console.log(res);
 }