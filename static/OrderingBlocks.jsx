// // react components ordering


// function OrderBlock(props) {
//     const [foodValue, setFoodValue] = React.useState(' food ');

//     function changeFoodValue() {
//         // to test just using input, later allow for user to choose stored items
//         const foodInput = "an input";
//         setFoodValue(foodInput);
//     }

//     return (
//         <button type="button" className="block" onClick={changeFoodValue}>
//         <i>food = {props.food}</i>
//         </button>
//     );
// }

// ReactDom.render(
//     <div>
//         <OrderBlock food="lol" />
//         <OrderBlock food="lol" />
//         <OrderBlock food="lol" />
//     </div>
//     ,
//     document.querySelector(".block"),
// );

  
  function OrderBlock(props) {
    const [orderTxt, setOrderTxt] = React.useState('?');
  
    function tAlert() {
    }
  
    return (
      <button type="button" className="block" id="main-block">
        <i>info={props.info}</i>
        <b>{orderTxt}</b>
      </button>

    );
  }
  
  ReactDOM.render(
    <div>
      <OrderBlock info="Main" />
    </div>,
    document.querySelector('#main-block'),
  );


  function SideOrderBlock(props) {
    const [orderTxt, setOrderTxt] = React.useState('?');
  
    function tAlert() {
    }
  
    return (
      <button type="button" className="block" id="side-block">
        <i>info={props.info}</i>
        <b>{orderTxt}</b>
      </button>

    );
  }
  
  ReactDOM.render(
    <div>
      <SideOrderBlock info="Side" />
    </div>,
    document.querySelector('#side-block'),
  );

  
  