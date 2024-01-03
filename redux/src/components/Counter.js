import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
    // 리덕스에서 고유 타입과 액션의 프로퍼티를 담아서 보내던거를 위의 리덕스 툴킷에서는 이렇게 고유 식별자를 따로 적지 않아도,
    // 액션 프로퍼티를 따로 담아서 보내지 않아도 아래 처럼 payload라는 프로퍼티에 다 담겨서 넘어간다.
    // payload는 따로 지정해주는게 아니라 리덕스 툴킷 내부에서 정해놓은 프로퍼티 명
    //===> {type:'SOME_UNIQUE_IDENTIFIER',payload:5}
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>increment by 5</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;

// 함수형 컴포넌트 redux * react-redux 사용
// const Counter = () => {
//   const dispatch = useDispatch();

//   const counter = useSelector((state) => state.counter);
//   const show = useSelector((state) => state.showCounter);

//   const incrementHandler = () => {
//     dispatch({ type: "increment" });
//   };
//   const increaseHandler = () => {
//     dispatch({ type: "increase", amount: 5 });
//   };
//   const decrementHandler = () => {
//     dispatch({ type: "decrement" });
//   };
//   const toggleCounterHandler = () => {
//     dispatch({ type: "toggle" });
//   };
//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       {show && <div className={classes.value}>{counter}</div>}
//       <div>
//         <button onClick={incrementHandler}>increment</button>
//         <button onClick={increaseHandler}>increment by 5</button>
//         <button onClick={decrementHandler}>decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };
// export default Counter;

// 클래스 컴포넌트 redux 사용할 경우
// import { connect} from "react-redux";
// import classes from "./Counter.module.css";
// import { Component } from "react";
// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {}
//   // constructor(){

//   // }
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchProps)(Counter);
