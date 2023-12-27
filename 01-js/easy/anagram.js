/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

// Brute Force
// function isAnagram(str1, str2) {

//   str1=str1.toUpperCase();
//   str2=str2.toUpperCase();

//   let anagram=true;

//   if (str1.length != str2.length){

//     anagram=false;
    
//   }
//   else{
    
//     for (let i = 0 ; i < str1.length;i++){

//       let found = false;

//       for (let j = 0; j < str2.length;j++){
//         if (str1[i]===str2[j]){

//           found=true
//           break;

//         }
//         }

//         if (found==false){
//           anagram=false;
//           break;
//         }

//       }
      
//     }

//     return anagram;

//   }


//Using Javascript objects

  function isAnagram(str1, str2) {

    //edge cases

    if (str1.length==0 && str2.length == 0 ){
      return true;
    }


    str1 = str1.toUpperCase();
    str2 = str2.toUpperCase();
  
    if (str1.length !== str2.length) {
      return false;
    }
  
    let str1Obj = {};
  
    //let str2Obj = {};
  
    for (let i = 0; i < str1.length; i++) {
      if (str1Obj[str1[i]] == undefined) {
        str1Obj[str1[i]] = 1;
      } else {
        str1Obj[str1[i]]++;
      }
    }
    //console.log(str1Obj);
  
    for (let j = 0; j < str2.length; j++) {
      if (str1Obj[str2[j]] == undefined) {
        return false;
      } else {
        str1Obj[str2[j]]--;
      }
    }
    //console.log(str1Obj);
  
    let found = false;
    for (let k = 0; k < str1.length; k++) {
      if (str1Obj[str1[k]] == 0) {
        found = true;
      }
    }
  
    if (found) {
      return true;
    } else {
      return false;
    }
  }
  
 console.log(isAnagram('',''));

module.exports = isAnagram;
