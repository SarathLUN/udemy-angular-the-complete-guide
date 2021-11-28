# MyFirstApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

---

# Video: 065 Splitting Apps into Components

- generate components

```shell
ng g c cockpit --skip-tests true # g = generate, c = component
ng g c server-element --skip-tests true
```

- then we start to split the components

# Video: 067 Binding to Custom Properties

- use `@Input()` decoration to bind custom proper from parent component into child component

# Video: 069 Binding to Custom Events

- use `@Output()` decoration to bind custom event from child component to parent component

# Video: 073 More on View Encapsulation

- use `encapsulation` to change behavior on how CSS applied on component
- `Emulated`: default from Angular
- `None`: will disable the encapsulation, there for, the CSS selector is worked as global
- `Native`: this will use **ShadowDom** that may not support by some browser

```typescript
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})

```

# Video: 076 Getting Access to the Template & DOM with @ViewChild

- You should not change HTML element through this, as Angular provide better ways to manipulate the DOM.
- It will be mess

# Video: 078 lifecycle

- [Lifecycle hooks](https://angular.io/guide/lifecycle-hooks)

