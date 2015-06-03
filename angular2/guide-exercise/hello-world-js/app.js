function MyAppComponent () {
    this.name = 'tb_fe';
}

MyAppComponent.annotations = [
    new angular.ComponentAnnotation({
        selector: 'my-app'
    }),
    new angular.ViewAnnotation({
        template: '<h1>Hello, {{ name }}!</h1>'
    })
];

document.addEventListener('DOMContentLoaded', function() {
    angular.bootstrap(MyAppComponent);
});
