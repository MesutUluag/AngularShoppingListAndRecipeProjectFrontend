# Project

1. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

2. Project uses firebase for backend functionality. Database uses nosql. 
    * If you want to use it with database functionality you should go firebase, create project and create a real-time database.
    * Base url will be like https://recipeandshoppinglistbackend-default-rtdb.firebaseio.com/ - you should change base url in accordance with firebase generated url.
    * Authentication is also uses firebase authentication. You should set your rules as below shown example
    
           {
                "rules": {
                    ".read": "auth!=null",  
                    ".write": "auth!=null",
                }
           }

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
