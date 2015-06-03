/// <reference path="../../lib/typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'my-app'
})
@View({
    template: '<h1>Hello, {{ name }}!</h1>'
})
class MyAppComponent {
    name: string;
    constructor () {
        this.name = 'tb_fe';

        //testing for outer change
        setInterval(function () {
            debugger;
            this.name = 'tb_fe second: ' + (new Date().getSeconds());
        }.bind(this), 1000);
    }
}

bootstrap(MyAppComponent);
