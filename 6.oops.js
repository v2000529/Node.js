//encapsulatiion
class Student{
    constructor(name,marks){
        this.name = name;
        this.marks = marks;
    }
    getDetails(){
        return this.name + " scored " + this.marks + " marks.";
    }
}
const student1 = new Student("Vishwas", 85);
console.log(student1.getDetails()); // Vishwas scored 85 marks.

//Abstraction
class Car {
    start() {
        console.log("Car started.");
    }
}

const c1 = new Car();
c1.start(); // Car started.

//Inheritance
class Animal {
    eat() {
        console.log("Animal is eating.");
    }
}
class Dog extends Animal {
    bark() {
        console.log("Dog is barking.");
    }   
}
const d1 = new Dog();
d1.eat();
d1.bark(); // Dog is barking.

//Polymorphism
class Animal1 {
    makeSound() {
        console.log("Animal makes a sound.");
    }
}

class Dog1 extends Animal1 {
    makeSound() {
        console.log("Dog barks.");
    }
}

const a = new Dog1();
a.makeSound(); // Dog barks.