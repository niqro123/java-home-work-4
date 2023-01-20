
                  ////// task 1 /////

let factory = {
   facName: "Volkswagen Wolfsburg Plant",
   calculateWorkload: function () {
     return this.employeeWeeklyWorkload.map(el => el.workload);
   },
   formatArray: function (name) {
       return {name, timeLeft: 5-this.employees.filter(el => el.name === name)[0].timeSpent}
   },
 };
 let factoryEmployees = {
     employees : [{name : "John", timeSpent : 1 } , {name : "Sam", timeSpent : 3 },{name : "Maria", timeSpent 
: 2 },{name : "Dan", timeSpent : 4 },{name : "Lorelai", timeSpent : 5 }],
   //   employeeNum : this.employees.length,
 }
 
 let workloadData = {
     employeeWeeklyWorkload : [{name : "John", workload : 40 } , {name : "Sam", timeSpent : 25 },{name : 
"Maria", timeSpent : 28 },{name : "Dan", timeSpent : 30 },{name : "Lorelai", timeSpent : 31 }]
 }
 const workLoadCalculator = factory.calculateWorkload.bind(workloadData);
 const employeeLeftContractYears = factory.formatArray.bind(factoryEmployees);

 console.log(employeeLeftContractYears("John"))
 console.log(workLoadCalculator());



                              /////// task 2 //////

 let sumOfNumbers = (a, b) => a+b;
sumOfNumbers.apply(null, [3, 4]);



                               ////// task 3 ///////

let checkIfEven = i => {
   if(i < 3) {
       return i === 2;
   }
   return checkIfEven(i-2);
}

console.log(checkIfEven(19));

             ////// task 4 //////


             var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

             function Ordinal(n)
              {
 var o = ["th","st","nd","rd"],
              x = n%100;
              return x+(o[(x-20)%10]||o[x]||o[0]);
              }
             
             for(n = 0; n < color.length; n++){
              var ordinal = n + 1;
             
              var output = (Ordinal(ordinal) + " choice is " + color[n] + ".");
             
             console.log(output);
                              }
                              



                        //// tansk 6 ///////




function margearr(arr1,arr2){

let arr=arr1.concat(arr2);
let arr3=[];

for(let i of arr){
   if( arr3.indexOf(i)=== -1){
    arr3.push(i);
   }
}
console.log(arr3)

}

const array1=[1,2,3]
const array2=[2,1,30]

margearr(array1,array2);


                  ////// task 7 ////



let additionMerger = (arr1, arr2) => {
   if(arr1.length >= arr2.length){
       return arr1.map((el, i) => arr2[i] ? el+arr2[i] : el)
   }
   if(arr1.length < arr2.length){
       return arr2.map((el, i) => arr1[i] ? el+arr1[i] : el)
   }
}
console.log(additionMerger([1,10,12,13], [4,5]));



