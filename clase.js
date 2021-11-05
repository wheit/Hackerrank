
class Country{
    constructor(name,population)    {
    this.name =name;
    this.population=population;
    }
description(){
    console.log(`${this.name}  are  ${this.population}  de locuitori`)


    }
}
const rou= new Country('Romania',19)
// console.log(rou)

///EX 2

 class Person{
     constructor(name,age,married,location){
        this.name =name;
        this.age=age;
        this.married=married;
        this.location=location;
        this.friends =[];
     }
     description(){
         if(this.married){
        console.log(`${this.name}  are  ${this.age}  de ani ,este casatorit si locuieste in ${this.location.name}`)
         }
         else{
            console.log(`${this.name}  are  ${this.age}  de ani ,nu casatorit si locuieste in ${this.location.name}`)
         }
 
        }
    addFriend(person){
        this.friends.push(person)

    }
 }
 const mi = new Person("Mihai",13,false,rou)
 const john = new Person("john",26,false,rou)

mi.description();
mi.addFriend(john)
class Car{
    constructor(brand,price,value,originCountry,owner){
        this.owner=owner;
        this.brand=brand;
        this.price=price;
        this.value=value;
        this.originCountry=originCountry;
        this.friends =[];

    }
    description(){
        console.log(`Automobilul ${this.brand} este produsa in ${this.originCountry.name},costa ${this.price} ${this.value} si ii aparetine lui ${this.owner.name}`)
    }

    showOwnerFriends(person){
        this.friends.push(person)
    }
    priceAftherTax(tax){
        let price =0
       return price =(this.price) *tax/100+(this.price)
    }
}
const dacia = new Car("Dacia",7000,"euro",rou,mi)
dacia.description();
dacia.priceAftherTax(7);


