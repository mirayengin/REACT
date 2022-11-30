export {};
console.log("Hello TypeScript!");

// class Employee {
//   empCode: "number";
//   empName: "string";

//   constructor(code: number, name: string)
//   {
//     this.empCode = code;
//     this.empName = name;
//   }
// }

// class Employee {
//   //! propety leri nasıl olacak onu yazdık
//   empCode:number;
//   empName:string;

//   constructor(code: number, name: string)
//   //? Burda bellekte ne kadar yer kaplayacak onu belirliyor.Aşağıdakiler constructer parametreleriyle aynı olmalı

//   //! Propertylerde işlem için constructer yazmalıyız yoksa undefined gelir.
//   {
//     this.empCode = code;
//     this.empName = name;
//   }
// }
// //? obje oluşturduk
// let emp = new Employee(100, "erhan")
// console.log(emp);

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

//! extends ile person class ını emplooyee ye ekledik
class Employee extends Person {
  empCode: number;
  constructor(code: number, name: string) {
    //? constructer da ilk super olmalı çünkü bununla miras alıoyoruz.
    super(name);
    //! buda eklediğimiz özellik
    this.empCode = code;
  }

  displayName(): void {
    console.log(this.name, this.empCode);
  }
}

//! ----------- IMPLEMNET -------------

//? iki tane class ların konuşması için interface oluşturuldu
interface IPerson {
  name: string;
  display(): void;
}

interface IEmployee {
  empCode: number;
}

// ?Bu class da person ve employeee denin içindekiler varsa sıkıntı yok ve diğer codlarla konuşabilir.
//! interface i implement ettiğimiz zaman mutlaka implement edilen interface lerin propertyleri o class ın içinde olmalıdır.

//? Bu class ta implement edilen interfaceler dışında da property verebiliriz.

class Employee implements IPerson, IEmployee {
  empCode: number;
  name: string;

  constructor(empcode: number, name: string) {
    this.empCode = empcode;
    this.name = name;
  }

  display(): void {
    console.log("Name = " + this.name + "Employee Code =" + this.empCode);
  }
}

//! per IPerson tipindedir ve propertyleri new ile oluşturulan Employee nesnesi karşılıyorsa bu tamam der.
let per: IPerson = new Employee(100, "Bill");
per.display();

//! burda emp nin display property si yok o yüzden hata
let emp: IEmployee = new Employee(100, "Bill");
emp.display();


//! Class lar  sadece bir class tan super ile miras alırken, birden fazla interface i implement edebilirler.



//? INTERFACE EXTENDS CLASS
//! Classlar intrface extend edemez fakat interface ler class ları extend edebilirler

class Person {
  name: string;
}

interface IEmployee extends Person {
  empCode: number;
}

let emp: IEmployee = { empCode: 1, name: "Erhan FIRAT" }


//! Class lar 1 class extend edebilir ama 1 veya birden fazla interface implement edebilir.
//? Interface ler bir ve birden fazla class ve interface extend edebilirler ama interface lerle implement işlemini yapamazlar




//!-------Abstract Class -----------

//? Soyut Class tır.


abstract class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  display(): void {
    console.log(this.name);
  }

  //? abstract class larda class ın ne yapacağı boş bırakılır ve extend edildiği yerde doldurulmak zorundadır.
  abstract find(string): Person
}

class Employee extends Person {
  empCode: number;
  constructor(code: number, name: string) {
    super(name);
    this.empCode = code;
  }


  //? nemae:string bulursa db de Employee i oluşturacak
  find(name: string): Person {
    return new Employee(name, 1);
  }
}


let emp: Person = new Employee("James", 100);
emp.display();

let emp2: Person = emp.find("Steve");

