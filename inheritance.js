class a{
    display(){
        console.log("hi I am parent");
    }
}
class b extends a{
    display(){
        console.log("hi I am child");
    }
}
let obj=new b();
obj.display();