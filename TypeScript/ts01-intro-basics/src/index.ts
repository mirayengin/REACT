export {};
console.log("Hello TypeScript!");
// let a = 5;
let a:number = 5;
// a="5"
a = 42;

console.log(a);

let myVar: any = "cw";

myVar = 77;
console.log(myVar);


//! Data Type(Enum) 

enum Roles {  Manager = 1, Instructor, Mentor, Student };

console.log(Roles.Instructor);


//? Js karşılığı
// var Roles;
// (function (Roles) {
//     Roles[Roles["Manager"] = 1] = "Manager";
//     Roles[Roles["Instructor"] = 2] = "Instructor";
//     Roles[Roles["Mentor"] = 3] = "Mentor";
//     Roles[Roles["Student"] = 4] = "Student";
// })(Roles || (Roles = {}));

// console.log(Roles.Instructor);

//! TypeScript'teki bir Interface, aşağı yukarı bir object için önceden kurgulanmış plan gibi davranır. Object'lerde ki property(özellik) adları ve value(değerleri) hakkındaki bilgileri tanımlar. Bu, TypeScript derleyicisinin object'lerinizi doğrulamasına yardımcı olabilir, böylece object'leri yanlış biçimde tanımlamazsınız.


//? TypeScript'deki interface, temelinde bir tip tanımından başka birşey değildir. ***class*** ve ***function***'lar nesnelerin davranışlarını tanımlarken, ***interface***'ler nesnelerin tiplerini tanımlar şeklinde düşünebiliriz. Javascript'de interface kavramı olmadığı için TypeScript'de bir interface tanımladığınız ve compile ettiğiniz zaman, onun bir Javascript kodu üretmediğini görürsünüz. Bu noktada interface'lerin compile zamanında tipleri tanımladığını ve geliştirme aşamasında da kolaylık sağlar.


//!Soyutlama Örneği

//!Senaryo: Bir gün canınız sıkıldı ve çocukluğunuzda kalmış tatlı bir aktivite olan lunaparka gidip çarpışan arabaya binmek istediniz. Biletinizi aldınız ve seçtiğiniz arabaya oturup size gelen görevliye bileti teslim ettiniz. Görevli alana baktı ve araçları hareket ettirecek olan elektriği vermek için yeterli sayıda kişinin olduğuna karar verip bir düğmeye bastı. Görevlinin düğmeye basmasıyla çarpışan arabaların hareket etmesi için gerekli olan elektrik akımı verildi ve arabanız çalışır hale geldi. Direksiyonu, gaz pedalını ve freni kullanarak dilediğiniz şekilde aracı kullanmaya başladınız.
//?Şimdi gelin bu gerçek hayatın birebir içinden olan senaryodaki soyutlamaları (abstractions) inceleyelim. Böylece yazılım alanında da aslında aynı mantığın kullanıldığını ve soyutlamanın hayatımızı nasıl kolaylaştırdığını daha iyi anlamış olacağız.
//!Senaryoda Yer Alan Soyutlamalar(Abstractions): İlk soyutlama örneğimiz biletinizi teslim ettiğiniz görevlinin eğlenceyi başlatmak için bastığı küçük kırmızı düğme 🙂 Görevli o kırmızı düğmeye bastığında bizler sadece eğlencenin başlayacağını biliyoruz, görevli de on dakikalık bir seansa daha start vereceğini biliyor yalnızca. Düğmeye basıldığı anda elektrik devresindeki anahtarın kapanıp akımın başlayacağını ne biz ne de görevli aklının ucundan dahi geçirmiyor. İşte bu tam bir soyutlama örneği. Yalnızca input(düğmeye basmak) ve output(eğlencenin başlaması) değerleriyle ilgileniyoruz. Arka tarafta dönen teknik hadiseleri hiç düşünmeden bize sunulmuş bir düğmeyi kullanarak işimizi görüyoruz.
//?Eğer hala bir şeyler oturmadıysa kafanızda bir de çarpışan arabamızdaki soyutlamaya bakalım. Siz arabayı kullanırken direksiyonu gitmek istediğiniz yöne çeviriyor, gaz pedalına basarak ilerliyorsunuz. Gaz pedalına bastığınızdaki motorda oluşan tetiklenmeleri, direksiyonu çevirdiğinizde lastiklerin dönmesini sağlayan mekanizmayı hiç düşünmeden yalnızca iki pedal bir direksiyonla aslında arka planında onlarca aksiyon yatan bir işlevi gerçekleştirmiş oluyorsunuz. Input (gaz/fren pedalları, direksiyon) ve output (arabanın gitmesi) değerlerini bilmek size yetiyor.


//! private değiştirici, aynı sınıf içinde erişime izin verir. protected değiştirici, aynı sınıf ve alt sınıflar içinde erişime izin verir


function update<O extends object, K extends keyof O>(
  obj: O,
  key: K,
  newValue: O[K]
): O {
  return { ...obj, [key]: newValue };
}

interface Product {
  name: string;
  price: number;
  brand: string;
}

let prod1: Product = { name: "SSD", price: 220, brand: "WD" };

update(prod1, "price", "7");