{
    // Statics in OOP

class Counting {
  static  count:number=0;   //now all count share one memory
 static increment(){
 return Counting.count=Counting.count+1
    }
   static decrement(){
        return Counting.count=Counting.count-1

    }


}


const instance1 = new Counting()
// console.log(instance1.increment());  //1  >>> deffrent memory
// console.log(instance1.increment());  //1  >>> deffrent memory
console.log(Counting.increment());  //1  >>> deffrent memory
console.log(Counting.increment());  //1  >>> deffrent memory




const instance2 = new Counting()
// console.log(instance2.increment());  //1  >>> deffrent memory
// console.log(instance2.increment());  //1  >>> deffrent memory
console.log(Counting.increment());  //1  >>> deffrent memory
console.log(Counting.increment());  //1  >>> deffrent memory
























    // 
}