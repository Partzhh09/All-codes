function step1(Callback){
    setTimeout(()=>{
        console.log("1st");
        Callback();
    },1000);
}

function step2(Callback){
    setTimeout(() => {
        console.log("2nd");
        Callback(); 
    }, 1000);
}

function step3(Callback){
    setTimeout(() => {
        console.log("3rd");
        Callback();
    }, 1000);
}

step1(()=>{
    step3(() =>{
        step2(()=>{
            console.log("Done");
        });
    });
});

/*
whats is the object in JS:
    An object is a collection of properties, and a property is an association between a name (or key) and a value.
    A property's value can be a function, in which case the property is known as a method.
    In addition to objects that are predefined in the browser, you can define your own objects.
    This chapter describes how to use objects, properties, functions, and methods, and how to create your own objects.

Promises:
    A Promise is an object representing the eventual completion or failure of an asynchronous operation.

Asynchronous function:
    A function that is not executed immediately. It is executed after some time.
    setTimeout() is an example of Asynchronous function.
    setTimeout(()=>{console.log("Hello")},1000);
    console.log("World");
    Output: World
            Hello

syncronous function:
    A function that is executed immediately.
    console.log("World");
    console.log("Hello");
    Output: World
            Hello

callback function:
*/