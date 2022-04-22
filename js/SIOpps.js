class SIOpps
{
    constructor(p,r,t)
    {
        this.p=p;
        this.r=r;
        this.t=t;
    }
    silogic()
    { 
      this.si = (this.p*this.r*this.t)/100;
    }
    toString()
    {
        return "result is "+this.si;
        //return (`result is: ${this.si}`);
    }
     
}
obj = new SIOpps(45000,2,2);
obj.silogic();
console.log(obj.toString())