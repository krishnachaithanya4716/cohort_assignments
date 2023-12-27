/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

  //using reduce function

  const total_spend = transactions.reduce((acc,curr)=>{

   //destructuring object

   //curr represent each object in transcation

   const {category , price} = curr;

   if (!acc[category]){
    acc[category]= price;
   }
   else{
    acc[category] = acc[category]+price;
   }

   return acc;


  },{});

  console.log(total_spend);

  const total_spend_array = Object.entries(total_spend);

  let resultArray  = [];

  for (let i = 0; i < total_spend_array.length; i++){
    res_obj={}
    res_obj.category=total_spend_array[i][0];
    res_obj.totalSpent = total_spend_array[i][1];

    resultArray.push(res_obj);
  }

  return resultArray;
}

// const transactions = [];

// console.log(calculateTotalSpentByCategory(transactions));


module.exports = calculateTotalSpentByCategory;
