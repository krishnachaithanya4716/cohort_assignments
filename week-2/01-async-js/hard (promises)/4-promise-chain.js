/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

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
    return wait1(t1)
        .then(data => {
            console.log(data);
            return wait2(t2);
        })
        .then(data => {
            console.log(data);
            return wait3(t3);
        })
        .then(data => {
            console.log(data);
            const afterTime_now = new Date().getTime();
            return afterTime_now - currentTime_before;
        });

   // wait1(t1).then((data)=>console.log(data)).then(()=>wait2(t2)).then((data)=>console.log(data)).then(()=>wait3(t3)).then((data)=>console.log(data));

}

calculateTime(1,2,3).then((time)=>console.log(time));

module.exports = calculateTime;
