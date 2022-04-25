s =0;
function arrSum(...ar)
{
   console.log(ar);
    for(var a of ar)
    {
        s = s + parseInt(a);
    }
    console.log(s);
}


arrSum(2,3,4,11,56,78,23);