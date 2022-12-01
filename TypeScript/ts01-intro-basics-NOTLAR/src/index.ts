import { type } from "os";

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
//! Classlar intrface extend edemez fakat interface ler class ları extend edebilirler.
//? Interface ler classlarn sahip olması gereken özelliklerin tümü

class Person {
  name: string;
}

interface IEmployee extends Person {
  empCode: number;
}

let emp: IEmployee = { empCode: 1, name: "Erhan FIRAT" };

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
  abstract find(string): Person;
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

//!------INTERFACE DECLARATION------

interface Calendar {
  //? içinde string elemanlar  olan array
  events: string[];
  addEvent(event: string): void;
}

//! burada caledar implaments edilmiş ve intrface in property lerini minimum içermesi gerekiyor.
class LmsCalendar implements Calendar {
  events: string[];
  constructor() {
    this.events = [];
  }

  addEvent(event: string): void {
    this.events.push(event);
  }
}

//!------INTERFACE VS TYPE ALİASES------

interface Person {
  name: string;
}

//? person değişkeni Person interface i type ında olmalı ve minimum onun propertylerini içermeli
let person: Person = {
  name: "Erhan",
};

//! Burada da aynı
type Person1 = {
  name: string;
};

let person1: Person1 = {
  name: "Erhan",
};

//!------INTERFACES------

interface Color {
  color: { r: number; g: number; b: number };
}

interface Shape {
  area: number;
}

class Square implements Color, Shape {
  color: { r: number; g: number; b: number };
  area: number;
  constructor(c: { r: number; g: number; b: number }, a: number) {
    this.color = c;
    this.area = a;
  }
}

//! Burda iki interface implements ediliyor ve kare çiziliyor.
//? İnterfaceler sadece typescript te kalır.Javascript e gitmez.

//!------INTERFACES AS FUNCTION TYPE-----

interface NumKey {
  (key: number, value: string): void;
}

function addKeyVal(k: number, v: string): void {
  console.log(k, v);
}

function update(index: number, newVal: string): void {
  console.log(index, newVal);
}

//! kvp NumKey tipinde ve addKeyVal func. işlemini yapacak
let kvp: NumKey = addKeyVal;
kvp(1, "John");

//! kvp yi update func göre değerleri update et.
kvp = update;
kvp(2, "Aslı");

//!------DATA MODIFIERS - PUBLIC-----

class Employee {
  //? burda erişebilirliğini söyledik ama default olarak public tir
  public empCode: string;
  empName: string;
}

let emp = new Employee();
emp.empCode = 123;
emp.empName = "Erhan"


//? Eğer yukarıdaki propertyler private olsalardı sadece class içinde değiştirilebilirdi dışarıda değil. Private ta sadece kullanılan yerde kalır özellik implements edilmez.

//! READONLY dediğimiz zaman update yapamıyoruz sadece okuyoruz.

//? STATIC: Typescript te oluşturmadan javascriptten çağırdığımız her şeye denir.(Math.random())



//!----------EXAMPLE---------

//? Kuşlar uçar, kediler miyav der, balıklar yüzer evcil hayvanlar için tanımlama

type Bird = {
  fly: () => void
};

type Fish = {
  swim: () => void
};

type Cat = {
  meow:() => void
}

type pet = Bird | Fish | Cat



//! status null veya undefined değilse get status u cağır
let x = status ?? getStatus();



//?----------GENERİCS--------------(< >)

//! bir func tanımladık ve T generic olsun func her items ı T[] tipinde return dede T[] type ında olsun
function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items)
}


//? numArr type ı number array oldu
let numArr = getArray([1, 2, 3])

//! strArr type ı string array oldu
let strArr = getArray(["Engin", "Miray"])

numArr.push(4)
strArr.push("Aslı")
//? Error verir. Çünkü number array
numArr.push("Erhan")

//? Error verir. Çünkü string array
strArr.push(4)












