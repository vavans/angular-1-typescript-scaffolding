/// <reference path="../db/db.ts" />

class PlanetListComponent implements ng.IComponentOptions {
    public templateUrl : string                  = 'planet-list/planet-list.template.html';
    public controller  : ng.IComponentController = PlanetListController;
}

class PlanetListController implements ng.IComponentController {
    planets: Array<Utils.Planet>;

    constructor() {
        this.planets = Utils.DB.planets;
    }
}

interface PlanetListScope {
    planets: Array<Utils.Planet>;
}

angular.module('planet').component('planetList', new PlanetListComponent());