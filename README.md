Angular Concepts:

1: Components : Building blocks of an application
   How to create a Component:

    ng generate component <Comp-name> 
    or 
    ng g c Login

if you are creating custom component
Steps to follow for component :
      > Import { component } from angular/core
      > add a decorartor @Component which conatains
            ... selector:'app-Login',
            ... templateUrl:'login.component.html' or template:'<h1>Ali</h1>',
            ... styleUrl:'login.component.css' or style:'h1{color:red;}'
      > export class Component(LoginComponent) {}

important tip : never use html names in the selector like div or p its changes all the tags what you made with p or div like you color gray all divs will be gray so dont use them create unique names 
like : selector:'div'

