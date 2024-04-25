import { Component } from '@angular/core';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {
  person =new Person("Mittal", 30, "mitu796@gmail.com")
  show(){
    console.log(this.person.display())
  }

}

class Person{
  name: string="";
  age: number =0;
  email: string = "";

  constructor(name: string, age:number, email: string){
    this.name = name;
    this.age = age;
    this.email = email;
  }
  
  display(){
    return this.name + " : " + this.age + " : " + this.email;

  }

}
