const fs = require('fs')

function readKCfile(){
    console.log("invoked readfileFunction");

        return new Promise((res,rej)=> {

        fs.readFile("example.txt","utf-8",(err,data)=>{
            if (err){
                console.log(err);
                rej(err);
                return
            }

            res(data);


        })
       
    })

    
}


console.log("-----before write------")


const content="adding a line from writeFile command";

const p = new Promise((res,rej)=>{
    fs.writeFile('example.txt',content,"utf-8",(err)=>{
        if(err){
            console.log(err);
            rej(err);
            return
        }
        console.log("file written succesfully");
        res();
    })

})

p.then(()=>readKCfile()).then((result)=>console.log(result)).catch((err)=>console.log(err));



