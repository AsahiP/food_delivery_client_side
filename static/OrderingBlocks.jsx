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

  
  function MainBlock(props) {
    const [orderTxt, setOrderTxt] = React.useState('Main Course');
  
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
      <MainBlock info="Main Course" />
    </div>,
    document.querySelector('#main-block-id'),
  );




  function SideOneBlock(props) {
    const [orderTxt, setOrderTxt] = React.useState('Side');
  
    function tAlert() {
    }
  
    return (
      <button type="button" className="block" id="side-one-block">
        <i>info={props.info}</i>
        <b>{orderTxt}</b>
      </button>

    );
  }
  
  ReactDOM.render(
    <div>
      <SideOneBlock info="Side" />
    </div>,
    document.querySelector('#side-one-block-id'),
  );




  function SideTwoBlock(props) {
    const [orderTxt, setOrderTxt] = React.useState('Side');
  
    function tAlert() {
    }
  
    return (
      <button type="button" className="block" id="side-two-block">
        <i>info={props.info}</i>
        <b>{orderTxt}</b>
      </button>

    );
  }
  
  ReactDOM.render(
    <div>
      <SideTwoBlock info="Side" />
    </div>,
    document.querySelector('#side-two-block-id'),
  );
  