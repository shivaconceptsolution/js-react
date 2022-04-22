const swap = (a,b) =>{
    a=a+b;
    b=a-b;
    a=a-b;
    console.log("a= "+a + " b ="+b);
}

swap(10,2)
