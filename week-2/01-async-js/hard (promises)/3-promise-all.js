/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */


// Promise.all is a method in JavaScript that takes an iterable of promises as input and returns a new promise that fulfills with an array of the fulfilled values of the input promises, in the same order as the promises passed to it.


function wait1(t) {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("promise 1 resolved")
        },t*1000)
    })

}

function wait2(t) {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("promise 2 resolved")
        },t*1000)
    })


}

function wait3(t) {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("promise 3 resolved")
        },t*1000)
    })

}

function calculateTime(t1, t2, t3) {
    const currentTime_before = new Date().getTime();
    Promise.all([wait1(t1),wait2(t2),wait3(t3)]).then((values)=>console.log(values)).catch(err=>{
        console.log("one of the promises is rejected",err);
    });

}
calculateTime(1,2,3);
module.exports = calculateTime;
