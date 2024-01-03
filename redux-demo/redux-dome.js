const redux = require("redux");

// 기본값을 넣어줘야한다.
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};
const store = redux.createStore(counterReducer);

// 1. 저장소는 데이터를 관리해야한다.
// 2. 관리하는 데이터는 결국 리듀서 함수에 의해 결정된다.
// 2.1) 리듀서 함수가 새로운 상태 스냅샷을 생성할 것이기 떄문에,
// 2.2) 리듀서는 액션이 도착할 때마다 새로운 상태 스냅샷을 뱉어내야한다.
// createStroe : 리듀서를 가지고 저장소 만드는 메소드

// 리듀서 함수는 표준 자바스크립트 함수지만, 리덕스 라이브러리에 의해 호출된다.
// 항상 2개의 입력, 즉 2개의 파라미터를 받는다. (기존 상태, 발송된 액션)
// 그리고 이 리듀서 함수는 어떤 출력을 리턴해야만 한다.
// 항상 새로운 상태(문자,숫자,객체,배열, ) 객체를 리턴해야만 한다. (보통 객체로 리턴을 함)
//  그래서 리듀서 함수는 순수한 함수가 되어야한다.! =>
// ===>
// 동일한 입력, 즉 동일한 입력 값을 넣으면 항상 정확히 같은 출력이 산출 되어야 한다.
// 그 함수 안에서는 어떠한 부수적인 효과도 없어야 한다. 예를 들면 HTTP 요청을 전송한다거나, 뭔가를 로컬 저장소에 기록한다거나, 로컬 저장소에서 뭔가를 가져오지 말아야한다.
// 대신에 리듀서는 리덕스가 제공하는 입력을 취하고, 예상된 출력물인 새로운 상태 객체를 생성하는 순수한 함수가 되어야 한다.

const counterSubscriber = () => {
  // store.getState() store 상태를 가져오는 메소드
  const latestState = store.getState();
  console.log("latestState ===>", latestState);
};
// subscribe : 스토어에 counterSubscriber 함수를 구독시키는 메소드
// 이 리덕스가 이 구독함수를 인식하도록 하고, 상태가 변경될때마다, 이 함수를 실행하라고 말해주는것
// subscribe 메소드는 함수를 받는다. 받아서, 데이터와 저장소가 변경될때마다 실행해줄것,
store.subscribe(counterSubscriber);
// dispatch : 액션을 발송하는 메소드
// 액션은 자바스크립트 객체이다.
// 식별자 역할을 하는 타입 프로퍼티를 가진 자바스크립트 객체이다. 일반적으로 문자열을 사용하고 고유한 문자열이여야한다.
// dispatch를 통해 발송한 액션을 가지고 모든 고유한 액션들이 리듀서에서 해당 액션을 유발한다.
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
