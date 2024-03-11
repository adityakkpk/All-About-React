## Day 0 - Started Learning React

1. Know about the history of React.
2. How it is created?
3. React Roadmap
4. Why to use React?
5. React is a Library.

## Day 1 - Create React App

* Creating React app using the below command

> npx create-react-app 01basicreact

the upper command is very slow so will use some utiliy bundlers like vite or parcel.

* Creating React app using the vite 

> npm create vite@latest

* Compared Both the React apps 

* Understood File structures and Cleaning the file structure

## Day 2 - Understand the react flow and structure

* React, ReactDOM and React-native
    - ReactDOM is an implementation of react on web
    - React-native is an implementation of react on mobile apps

* Project Structure

* Analysing the Basic React app

* Analysing the Vite React app

* Best Practices : 
    - Components name and File name should be Capitalized
    - If a function is returning JSX then the file name should be in JSX (it depends on the Libraries)

## Day 3 - Creating own React library and JSX

* Creating our own React App.

* Evaluated Expressions to inject variables in JSX.

* Explored the React Library code on Github.

## Day 4 - Why you need hooks in project

* Creating a new counter app using Vite

* Understanding Why to use Hooks and How to use it?

* How states updated in React.

## Day 5 - Virtual DOM, Fibre and Reconciliation

* What CreateRoot method does Behind the scene :
    - It creates DOM Like Structure and update only those things which are updated in UI. But Browser removes all the DOM and repaint new DOM, this is known sa Realoading in Browser.

* What is Virtual DOM: 
    - In Virtual DOM you can track tree like structure and find those values which are changed, remove them from DOM and repaint them.

* React Fiber Algorithm: 
    - Article Link : https://github.com/acdlite/react-fiber-architecture

    - Reconcilliation: It is the algorithm behind what is popularly understood as the "Virtual-DOM".

* Why to use Keys.
    - To improve list's performance in React in new Fiber algorithm.

## Day 6 - Tailwind and Props in ReactJs

* Configure Tailwind CSS in React

* Props: 
    - Props made components reusable


## Day 7 - A React Interview Question on Counter

* What will happen in below situation:

```
setCounter(counter + 1)
setCounter(counter + 1)
setCounter(counter + 1)
setCounter(counter + 1)
setCounter(counter + 1)
```
    - In this senario React's fiber algorithum will create a batch for all the 5 function. And these function will update the same same counter value.

* To update count valu in each setCount() we can use callback function to update counter variable :

```
setCounter((counter) => counter+1)
```

## Day 8 - Building a react project

* Building a Background Changer Application in React

## Day 9 - useEffect, useRef and useCallback with 1 project

* Build a password generator in react.
* Understand some hooks like useCallback, useRef and useEffect in React.

## Day 10 - Custom hooks in react | currency Project

* Building a currency converter in Racat
* Understanding the concept of APIs
* Understanding and Creating custom hooks in React

* Best Practice
    - Remember the key in loops in React.

## Day 11 - React router with a project
 
* Installtion command for React-router
> npm install react-router-dom

* 'Link' tag in React-router Dom is used at the place of 'a' tag because a tag refeshes the page where as in react page should not refresh when we click on the link. So we use 'Link' tag in React.

* 'NavLink' tag in React-router Dom provide some additional features like "isActive"

* useLoaderdata, useParams hook in React-Router-Dom