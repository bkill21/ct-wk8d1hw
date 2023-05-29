// Question 1

// Create a type to represent the following instances of CTStudent Also declare three 3 students below as type CTStudent and set their values

// let student1 = {
//     id: 'GMK435&g62L00',
//     name: 'John Smith',
//     age: 24,
//     isTired: true,
//     projectsCompleted:["HTML Portfolio", "Fakebook", "Pokemon API Project", "Weather Bug"],
//     pet: 'dog'
// }

// let student2= {
//     id: '6KGS%54GmlY76',
//     name: 'Jenny Hawthorne',
//     age: 28,
//     isTired: false,
//     projectsCompleted:["HTML Portfolio"],
// }

// let student3 = {
//     id: '6KGS%54GmlY76',
//     name: 'Neo',
//     age: 57,
//     isTired: true,
//     projectsCompleted:["Matrix","Biological Interface Program"],
//     pet:'cat'
// }
type CTStudent = {
  id: string
  name: string
  age: number
  isTired: boolean
  projectsCompleted: string[]
  pet?: string
}


const student1: CTStudent = {
  id: 'GMK435&g62L00',
  name: 'John Smith',
  age: 24,
  isTired: true,
  projectsCompleted: ["HTML Portfolio", "Fakebook", "Pokemon API Project", "Weather Bug"],
  pet: 'dog'
}

const student2: CTStudent = {
  id: '6KGS%54GmlY76',
  name: 'Jenny Hawthorne',
  age: 28,
  isTired: false,
  projectsCompleted: ["HTML Portfolio"],
}

const student3: CTStudent = {
  id: '6KGS%54GmlY76',
  name: 'Neo',
  age: 57,
  isTired: true,
  projectsCompleted: ["Matrix","Biological Interface Program"],
  pet: 'cat'
}

//============================================================================
// Question 2

// Write a function that will accept a an object of type Fruit, the object of type Fruit could also be null. If their is a Fruit print the color of the fruit, otherwise print You ate my fruit already be sure to annoate the return type of the function

// Given 
// type Fruit={
//     color:string,
//     shape:string
// }

// let apple:Fruit={color:"red", shape:"sphere"}
// let eaten:Fruit=null
function printFruitColor(fruit: Fruit | null): void {
    if (fruit) {
      console.log(fruit.color)
    } else {
      console.log("You ate my fruit already")
    }
  }
  
  type Fruit = {
    color: string
    shape: string
  }
  
  let apple: Fruit = {color: "red", shape: "sphere"}
  let eaten: Fruit | null = null
  
  printFruitColor(apple)
  printFruitColor(eaten)

//============================================================================
// Question 3

// Create a Union Type named Ebook for Book and DigitalBook and create one instance of the new union type

//Given 
// type Book={
//     isbn:string,
//     title:string,
//     author:string
// }

// type DigitalBook={
//     fileType:string,
// }

type Book = {
    isbn: string
    title: string
    author: string
  }
  
type DigitalBook = {
fileType: string
}
  
type Ebook = Book | DigitalBook
   
const myEbook: Ebook = {
isbn: "978-3-16-148410-0",
title: "The Hitchhiker's Guide to the Galaxy",
author: "Douglas Adams"
}

for (const key in myEbook) {
    console.log(`${key}: ${myEbook[key as keyof Ebook]}`)
  }


//============================================================================
// Question 4

// Create a Type to represent a ShopItem that will fit the following rules. You may need to create additional structures

// All ShopItems have an numeric id that can not be edited
// All ShopItems have a price
// All ShopItems have a description
// Some ShopItems have a color
// All ShopItems have a Category represented with an enum
// Possible Categories are Shirts Shoes Pants Hats
// All ShopItems have a list of keywords used to help search for the ShopItem
// For Example A Ironman Tshirt may have keywords = ["Marvel", "Endgame", "Ironman","Character Tees", "Tony Stark"]
// After Creating the ShopItem type create 3 items using this type

enum Category {
    Shirts = 'Shirts',
    Shoes = 'Shoes',
    Pants = 'Pants',
    Hats = 'Hats',
  }
  
  interface ShopItem {
    readonly id: number
    price: number
    description: string
    color?: string
    category: Category
    keywords: string[]
  }
  
  const items: ShopItem[] = [
    {
      id: 1,
      price: 19.99,
      description: 'Black T-Shirt',
      color: 'Black',
      category: Category.Shirts,
      keywords: ['Black', 'T-Shirt', 'Cotton'],
    },
    {
      id: 2,
      price: 39.99,
      description: 'Leather Shoes',
      category: Category.Shoes,
      keywords: ['Leather', 'Shoes', 'Brown'],
    },
    {
      id: 3,
      price: 29.99,
      description: 'Blue Jeans',
      category: Category.Pants,
      keywords: ['Blue', 'Jeans', 'Denim'],
    },
  ]
    
