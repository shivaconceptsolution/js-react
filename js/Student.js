class Student{
     accept(rno,sname,branch,fees)
     {
         this.rno=rno;
         this.sname=sname;
         this.branch=branch;
         this.fees=fees;
     }
     display()
     {
         console.log("rno is "+this.rno + " name is "+this.sname + " branch is "+this.branch+ " fees is "+this.fees);
     }

}
obj= new Student();
obj.accept(1001,"Manish","CS",45000);
obj.display();







































