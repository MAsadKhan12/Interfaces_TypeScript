interface ICar{
 CarName:string;
 CarEngineno:string;
Cartype:string;
Car_wheels:string;

drive(a:string):string;



}


class Suzuki implements ICar{

    
    constructor(public CarName:string,public CarEngineno:string,public Cartype:string,public Car_wheels:string)
    {
    }

drive(a:string):string{

return a;
}

}

class Toyota implements ICar{

    
    constructor(public CarName:string,public CarEngineno:string,public Cartype:string,public Car_wheels:string)
    {
    }

    drive(a:string):string{

        return a;
        }

}


class KIA implements ICar{

    
    constructor(public CarName:string,public CarEngineno:string,public Cartype:string,public Car_wheels:string)
    {
    }

    drive(a:string):string{

        return a;
        }

}


class Vitara extends Suzuki{


    constructor(public CarName:string,public CarEngineno:string,public Cartype:string,public Car_wheels:string)
    {
   
   super(CarName,CarEngineno,Cartype,Car_wheels);
   
   
    }

    drive(a:string):string{

        return a;
    }


display():void{

console.log("Car name is"+this.CarName);
console.log("Car Engine number is"+this.CarEngineno);
console.log("Car type is"+this.Cartype);
console.log("Car wheels are"+this.Car_wheels);


}


}


class Corolla extends Toyota{


    constructor(public CarName:string,public CarEngineno:string,public Cartype:string,public Car_wheels:string)
    {
   
   super(CarName,CarEngineno,Cartype,Car_wheels);
   
   
    }
    drive(a:string):string{

        return a;
    }


    display():void{

        console.log("Car name is"+this.CarName);
        console.log("Car Engine number is"+this.CarEngineno);
        console.log("Car type is"+this.Cartype);
        console.log("Car wheels are"+this.Car_wheels);
        
        
        }
        

}

class Carnival extends KIA{


    constructor(public CarName:string,public CarEngineno:string,public Cartype:string,public Car_wheels:string)
    {
   
   super(CarName,CarEngineno,Cartype,Car_wheels);
   
   
    }

    drive(a:string):string{

        return a;
    }


    display():void{

        console.log("Car name is"+this.CarName);
        console.log("Car Engine number is"+this.CarEngineno);
        console.log("Car type is"+this.Cartype);
        console.log("Car wheels are"+this.Car_wheels);
        
        
        }

    

}


var a=new Vitara("Vitara_Suzuki","2240","Saloon","4");
console.log(a.drive("Good milage vitara"));
a.display();



var b=new Corolla("Corolla_Toyota","5566","SE-Saloon","4");
console.log(b.drive("Corolla best car"));
b.display();


var c=new Carnival("Grand Carnival_KIA","9953","VXR","4");
console.log(a.drive("Affordable car by KIA"));
c.display();
