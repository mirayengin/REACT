//!Başka bir örneği ,tanıdık olması için - yolda destructure
//! function ({target}) {
//! a.innerHTML = target.value}

const Msg = ({ name }) => {
    //   console.log(props);
  
    //! Destructurimg
    //   const { name } = props;
    return (
      <div>
        <h3>Merhaba {name}</h3>
        {/* <h3>Merhaba {props.name}</h3> */}
      </div>
    );
  };
  
  export default Msg;