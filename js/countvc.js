const vc = (arr)=>{
var v=0;
var c=0;
for(i of arr)
{
    if(i=='a' || i=='e' || i=='i' || i=='o' || i=='u'){
        v++;
    }
    else
    {
        c++;
    }
}
console.log("total vowel is "+v + " consonent is "+c);

}

//vc(['m','a','n','i','s','h'])
vc("manish")