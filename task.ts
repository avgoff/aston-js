class Vehicle {
 
    constructor(
      public brand:string, 
      public model:string | number, 
      public year:number,
      protected speed:number){
    }
    accelerate(amount:number):void{
            this.speed += amount;
            console.log(`Увеличили скорость на ${amount}. Сейчас скорость${this.speed}`)  
    }

    brake(amount:number):void{
            this.speed = Math.max(0, this.speed - amount)//проверка чтоб скорость не была более 0
            console.log(`Сейчас скорость ${this.speed}`)

    }

    info():string{
        return `Бренд:${this.brand}, модель:${this.model}, год выпуска:${this.year}, скорость: ${this.speed}`
    }
}

class Car extends Vehicle{
  public fuelType: string;

    constructor(brand:string, model: string | number, year: number, speed: number, fuelType: string){
        super(brand, model, year, speed);
        this.fuelType = fuelType;
    }

    refuel():string{
        return `Автомобиль был заправлен топливом: ${this.fuelType}`
    }
}

class ElectricCar extends Car{
    private _batteryLevel: number;

    constructor(brand:string, model:string | number, year:number, speed:number, fuelType:string, batteryLevel:number){
        super(brand, model, year, speed, fuelType);
        this._batteryLevel = batteryLevel;
    }

    set batteryLevel(amount:number){
      if(amount > 100 || amount < 0){
          console.log('Значение может быть от 0 до 100');
          return
        }
        this._batteryLevel = amount
    }

    get batteryLevel(){
      return this._batteryLevel
    }

    charge(amount:number){
          this._batteryLevel = Math.min(100, this._batteryLevel + amount)//проверка что не более 100%, если перебор то вернет 100%
          this._batteryLevel;
    }

    refuel():string{
        return `Батарея электромобиля заряжена, теперь уровень заряда ${this._batteryLevel}%`
    }

    info():string{
        return `Бренд:${this.brand}, модель:${this.model}, год выпуска:${this.year}, скорость: ${this.speed}, батарея заряжена на ${this._batteryLevel}%`
    }
}

const car1 = new ElectricCar('tesla', 3, 2020, 250, 'electric',44);
console.log(car1.info());
car1.batteryLevel = -88//ошибка

console.log(car1.info());
car1.charge(40)
console.log(car1.batteryLevel)//84

const car2 = new Car('Mercedes', 211, 2008, 220, 'diesel');
console.log(car2.info())
console.log(car2.refuel())




