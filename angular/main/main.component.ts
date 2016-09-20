/// <reference path="../db/db.ts" />

class MainComponent implements ng.IComponentOptions {
    public templateUrl : string                  = 'main/main.template.html';
    public controller  : ng.IComponentController = MainController;
}

class MainController implements ng.IComponentController {
    public planetid : number;
    static $inject = ['$routeParams'];
    constructor($routeParams : IPlanetDetailsParams) {
        this.planetid = $routeParams.planetId;
    }
}

interface IPlanetDetailsParams extends ng.route.IRouteParamsService {
   planetId : number;
}

angular.module('planet').component('main', new MainComponent());