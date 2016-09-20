/// <reference path="../db/db.ts" />

class PlanetDetailsComponent implements ng.IComponentOptions {
    bindings : {[binding: string]: string}       = { planetid : '<' };
    public templateUrl : string                  = 'planet-details/planet-details.template.html';
    public controller  : ng.IComponentController = PlanetDetailsController;
}

class PlanetDetailsController implements ng.IComponentController {

    public planetid : number;
    public vm : PlanetDetailsVM;

    $onInit() {
        let planet = Utils.DB.getPlanet(this.planetid);
        this.vm = new PlanetDetailsVM();
        this.vm.name = planet.name;
        this.vm.size = planet.size;
    }
}

class PlanetDetailsVM {
    name : string;
    size : number;
}

angular.module('planet').component('planetDetails', new PlanetDetailsComponent());