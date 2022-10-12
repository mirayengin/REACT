//* ============================ CLASS COMPONENTS AND STATE ============================
//* React'da Class-Component'ler ES6 class yapisina dayanmaktadir.
//* Cok fazla boilerplate kod icermektedir.
//* Ancak Class-Component'ler React'da state'leri barindiran ilk component yapisidir.
//* State, aslinda bir component hakkinda bilgi tutan bir React nesnesidir.
//* Bir componentin state'i zaman icerisinde degisebilir.
//* State her degistiginde React bu componenti yeninden render eder.
//* Bir state'e baslangıc degeri constructor metodu icersinde this.state ile atanabilir
//* constructor'in disinda state, setState() metodu ile degistilebilir.
//* ====================================================================================

import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    //! burası obje o yüzden key-value şeklinde yazıyoruz.
    //? count state ine başlangıç değeri atatık.
    this.state = {
      // count: 0,
      count: props.count || 0,
    };

    //? increment metodunun Counter class ına bağlanması (bind)
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({
      //? bu şekilde göremiyor count u
      // count: count
      count: this.state.count + 1,
    });
  }

  //! Yazmis oldugumuz metotlar default olarak classa baglanmaz.
  //! Ancak, React built-in fonksiyonlari baglidir.

  //! Bunun icin metotlarimizi ya constructor icerisinde baglamaliyiz ya da otomatik baglamayi saglayan arrow fonksiyonlarini kullanmaliyiz.
  decrement = () => {
    this.setState({
      //? bu şekilde göremiyor count u
      // count: count
      count: this.state.count - 1,
    });
  }

  render() {
    return (
      <div className="container text-center mt-4">
        <h1>CLASSFUL COMPONENTS</h1>
        <h2 className="display-4 text-danger">COUNT:{this.state.count}</h2>
        <button onClick={this.increment} className="btn btn-success">
          INC
        </button>

        <button className="btn btn-dark">CLR</button>

        <button onClick={this.decrement} className="btn btn-danger">
          DEC
        </button>
      </div>
    );
  }
}

export default Counter;
