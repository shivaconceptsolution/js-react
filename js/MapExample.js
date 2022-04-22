student = new Set()
student.add(1001)
student.add(1002)
student.add(1003)
student.add(1003)
console.log(student)
for (s of student.values())
{
    console.log(s);
}