/// <reference path="../../lib/typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, For, If} from 'angular2/angular2';

@Component({
    selector: 'my-app'
})
@View({
    template: `
    <h1>Hello, {{ name }}!</h1>
    <h2>our friends:</h2>
    <ul>
        <li *for="#friend of friends">
            {{ friend }}
        </li>
    </ul>
    <p *if="friends.length > 3">
        so many~
    </p>
    `,
    directives: [For, If]
})
class MyAppComponent {
    name: string;
    friends: Array<string>;

    constructor () {
        this.name = 'tb_fe';
        this.friends = ['tb_qa', 'tb_pm', 'tb_rd', 'baidu'];

        //testing for outer change
        setInterval(function () {
            this.name = 'tb_fe second: ' + (new Date().getSeconds());
        }.bind(this), 1000);
    }
}

bootstrap(MyAppComponent);
