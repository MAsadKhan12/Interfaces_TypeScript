var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Suzuki = /** @class */ (function () {
    function Suzuki(CarName, CarEngineno, Cartype, Car_wheels) {
        this.CarName = CarName;
        this.CarEngineno = CarEngineno;
        this.Cartype = Cartype;
        this.Car_wheels = Car_wheels;
    }
    Suzuki.prototype.drive = function (a) {
        return a;
    };
    return Suzuki;
}());
var Toyota = /** @class */ (function () {
    function Toyota(CarName, CarEngineno, Cartype, Car_wheels) {
        this.CarName = CarName;
        this.CarEngineno = CarEngineno;
        this.Cartype = Cartype;
        this.Car_wheels = Car_wheels;
    }
    Toyota.prototype.drive = function (a) {
        return a;
    };
    return Toyota;
}());
var KIA = /** @class */ (function () {
    function KIA(CarName, CarEngineno, Cartype, Car_wheels) {
        this.CarName = CarName;
        this.CarEngineno = CarEngineno;
        this.Cartype = Cartype;
        this.Car_wheels = Car_wheels;
    }
    KIA.prototype.drive = function (a) {
        return a;
    };
    return KIA;
}());
var Vitara = /** @class */ (function (_super) {
    __extends(Vitara, _super);
    function Vitara(CarName, CarEngineno, Cartype, Car_wheels) {
        var _this = _super.call(this, CarName, CarEngineno, Cartype, Car_wheels) || this;
        _this.CarName = CarName;
        _this.CarEngineno = CarEngineno;
        _this.Cartype = Cartype;
        _this.Car_wheels = Car_wheels;
        return _this;
    }
    Vitara.prototype.drive = function (a) {
        return a;
    };
    Vitara.prototype.display = function () {
        console.log("Car name is" + this.CarName);
        console.log("Car Engine number is" + this.CarEngineno);
        console.log("Car type is" + this.Cartype);
        console.log("Car wheels are" + this.Car_wheels);
    };
    return Vitara;
}(Suzuki));
var Corolla = /** @class */ (function (_super) {
    __extends(Corolla, _super);
    function Corolla(CarName, CarEngineno, Cartype, Car_wheels) {
        var _this = _super.call(this, CarName, CarEngineno, Cartype, Car_wheels) || this;
        _this.CarName = CarName;
        _this.CarEngineno = CarEngineno;
        _this.Cartype = Cartype;
        _this.Car_wheels = Car_wheels;
        return _this;
    }
    Corolla.prototype.drive = function (a) {
        return a;
    };
    Corolla.prototype.display = function () {
        console.log("Car name is" + this.CarName);
        console.log("Car Engine number is" + this.CarEngineno);
        console.log("Car type is" + this.Cartype);
        console.log("Car wheels are" + this.Car_wheels);
    };
    return Corolla;
}(Toyota));
var Carnival = /** @class */ (function (_super) {
    __extends(Carnival, _super);
    function Carnival(CarName, CarEngineno, Cartype, Car_wheels) {
        var _this = _super.call(this, CarName, CarEngineno, Cartype, Car_wheels) || this;
        _this.CarName = CarName;
        _this.CarEngineno = CarEngineno;
        _this.Cartype = Cartype;
        _this.Car_wheels = Car_wheels;
        return _this;
    }
    Carnival.prototype.drive = function (a) {
        return a;
    };
    Carnival.prototype.display = function () {
        console.log("Car name is" + this.CarName);
        console.log("Car Engine number is" + this.CarEngineno);
        console.log("Car type is" + this.Cartype);
        console.log("Car wheels are" + this.Car_wheels);
    };
    return Carnival;
}(KIA));
var a = new Vitara("Vitara_Suzuki", "2240", "Saloon", "4");
console.log(a.drive("Good milage vitara"));
a.display();
var b = new Corolla("Corolla_Toyota", "5566", "SE-Saloon", "4");
console.log(b.drive("Corolla best car"));
b.display();
var c = new Carnival("Grand Carnival_KIA", "9953", "VXR", "4");
console.log(a.drive("Affordable car by KIA"));
c.display();
