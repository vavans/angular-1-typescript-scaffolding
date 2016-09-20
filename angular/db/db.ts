module Utils {
    export class Planet {

        private _name: string;
        public get name(): string {
            return this._name;
        }
        public set name(v: string) {
            this._name = v;
        }

        private _size: number;
        public get size(): number {
            return this._size;
        }
        public set size(v: number) {
            this._size = v;
        }

        private _id: number;
        public get id(): number {
            return this._id;
        }
        public set id(v: number) {
            this._id = v;
        }

        constructor(id: number, name: string, size: number) {
            this._name = name;
            this._size = size;
            this._id = id;
        }
    }

    export class DB {
        public static planets = [
            new Planet(0, "Jupiter", 69911),
            new Planet(1, "Terre", 6371),
            new Planet(2, "Mercure", 2439),
            new Planet(3, "Venus", 6051)
        ];

        public static getPlanet(id: number) {
            return DB.planets.filter(p => p.id == id)[0];
        }
    }
}