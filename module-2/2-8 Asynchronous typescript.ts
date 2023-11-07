{
    // Asynchronous typescript

// Promise
type Something = {something:"something"}
const createPromise =():Promise<Something>=>{
    return new Promise<Something>((resolve,reject)=>{
        const data :Something={something:"something"}
      if(data){
        resolve(data)
      }
      else reject(`faild to load data`)
    })
}

// calling createPromise function

const showData = async():Promise<Something>=>{
  const data :Something = await createPromise()
  // console.log(data);
  return data;
}
showData()


// Fetch data 


type ToDo = {
  userId: number,
    id: number,
    title: string, 
    completed: boolean
}


const getToDo =async():Promise<ToDo>=>{
 const response =await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
  const data :ToDo = await response.json();
  console.log(data);
  return data;
}

getToDo()























// 
}