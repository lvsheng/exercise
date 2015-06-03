/// <reference path="../../lib/typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, For, If} from 'angular2/angular2';

class FriendsService {
    names: Array<string>;
    constructor () {
        this.names = [];
    }
}

@Component({
    selector: 'my-app',
    injectables: [FriendsService]
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
    <input type="text" #myname/>
    <button (click)="addFriend(myname.value)">Add</button>
    `,
    directives: [For, If]
})
class MyAppComponent {
    name: string;
    friends: Array<string>;

    constructor (friendsService: FriendsService) {
        this.name = 'tb_fe';
        this.friends = friendsService.names;

        //testing for outer change
        setInterval(function () {
            this.name = 'tb_fe second: ' + (new Date().getSeconds());
        }.bind(this), 1000);
    }

    addFriend (name) {
        this.friends.push(name);
    }
}

bootstrap(MyAppComponent);
