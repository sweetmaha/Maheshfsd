a=[5,0,10,15,0,20,50,0];

for(i=0; i<=a.length-1; i++)
{
    if(a[i]==0){
        a[i]="*"
    }
}
console.log(a)
a=[5,10,30,20,25,30]
b=[];
for(i=0; i<a.length-1;i+2)
{
    b.push(a[i])
    b.push(a[i+1])
    b.push(a[i]+a[i+1])
}
console.log(a)