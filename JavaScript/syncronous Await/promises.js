/*
promises code
*/

function step1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("1st");
            resolve();
        },1000);
    });
}

function step2(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("2nd");
            resolve();
        }, 1000);
    });
}

function step3(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("3rd");
            resolve();
        }, 1000);
    });
}

step1()
    .then(step2)
    .then(step3)
    .then(()=>console.log("All steps are done"));