//what is the difference btw interface vs type
//interface= when you have to do it in classes implementation   
//types=we can unions,intersection

type Employee = {
    name: string;
    startDate: Date;
  };
  
type Manager = {
    name: string;
    department: string;
};

type TechLead=Employee& Manager;


type keyInput= "up" | "down" | "left" | "right"

enum Direction{
  Up,
  Down,
  Left,
  Right
}
function doSomething(keyPressed: Direction){
  //do something
  if(keyPressed==Direction.Up){

  }
}


doSomething(Direction.Up)
doSomething(Direction.Down);

type Input=number| string;

function firstEle(arr: Input[]){
  return arr[0];  
}


function identity<T>(arg:T):T{
  return arg;
}

let output1=identity<String>("Mohak")
let output2=identity<Number>(100)

output1.toUpperCase();

function getFirstElement<T>(arr: T[]){
  return arr[0];
}

const el=getFirstElement(["harkirat","singh"]);
console.log(el.toLowerCase());
