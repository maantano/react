import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
      // 아래처럼 redux, react-redux에서는 action.프로퍼티명 이렇게 넘겨준 값을 받았지만
      // 리덕스 툴킷에서는 위 처럼 action.payload로 받는다!
      //   여러개를 넘기면 객체형태로 payload의 또 다른 키로 연결되서 받으면 된다.

      //   state.counter += state.counter + action.amount;
    },
    decrement(state) {
      state.counter--;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
