const pr = new Promise(function(myResolve, MyReject){
setTimeout(() => {
    myResolve("Welcome in scs");
    
}, 3000);

});

pr.then(function(value){
    console.log(value);
});