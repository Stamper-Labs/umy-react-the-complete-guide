// declaring primitive variables
let age: number;
age = 40;
let userName: string = "gvalenncia";
let isInstructor: boolean = false;

// More Complex Types
let hobbies: string[] = ["Sports", "Cookin"];


function insertAtBeginning(array: any[], value: any){
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1,2,3];

const updatedArray = insertAtBeginning(demoArray, -1);
