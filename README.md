# MyFirstApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---

# 03 Course Project - The Basics

### 048 Setting up the Application

- When I try to add bootstrap css framework into `angular.json`, I got error.

```json
{
  [...]
  "styles": [
    "../node_modules/bootstrap/dist/css/bootstrap.min.css",
    "src/styles.css"
  ],
  [...]
}
```

- compile error:

```shell
An unhandled exception occurred: ENOENT: no such file or directory, lstat '/Users/sarath/Public/Angular-Udemy/node_modules'
See "/private/var/folders/jm/q6lxzs_x4dx17yxzl3frkwpr0000gn/T/ng-3ixqcJ/angular-errors.log" for further details.
⠋ Generating browser application bundles (phase: setup)...%
```

- this new version of Angular, the app start at the root folder of the project instead of src, therefore, the relative path of bootstrap not required `"../node_modules/..."`.
- so the correct configuration should be

```json
{
  [...]
  "styles": [
    "./node_modules/bootstrap/dist/css/bootstrap.min.css",
    "src/styles.css"
  ],
  [...]
}
```

# 04 Debugging

### 062 Understanding Angular Error Messages

In my case, I got error when try to run `ng serve`

```shell
✔ Browser application bundle generation complete.

Initial Chunk Files   | Names         |      Size
vendor.js             | vendor        |   2.11 MB
styles.css, styles.js | styles        | 373.99 kB
polyfills.js          | polyfills     | 339.08 kB
scripts.js            | scripts       | 145.27 kB
main.js               | main          |   8.69 kB
runtime.js            | runtime       |   6.86 kB

                      | Initial Total |   2.96 MB

Build at: 2021-11-25T15:55:35.847Z - Hash: c222991269b73de6 - Time: 4912ms

Error: src/app/app.component.ts:9:3 - error TS7008: Member 'servers' implicitly has an 'any' type.

9   servers;
    ~~~~~~~




** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **


✖ Failed to compile.

```

- the service is running, but it already reports the error and can't access at all
- thus, I need to fix the error first
- I just observe that the new version of TypeScript is more stronger in type, event I try with this syntax `server = [];`, I still got same error message
- until I explicitly specify type of servers in declaration

```typescript
	servers: string[] = [];
```
