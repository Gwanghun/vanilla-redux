import { createStore } from "redux";

const add = document.querySelector('#add');
const minus = document.querySelector('#minus');
const number = document.querySelector('span');
/*
let count = 0;

number.innerText = count

const updateText = () => {
  number.innerText = count
}

const handleAdd = () => {
  count = count + 1;
  updateText();
}
const handleMinus = () => {
  count = count - 1;
  updateText();
}

plus.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
*/

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

// countModifier - reducer(function)
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();   // getState - state 값을 가져올 때 사용
};

countStore.subscribe(onChange);     // subscribe - state 값이 변할때 마다 감지

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS }); // dispatch - action 에 값을 전달할 때 사용, object 형태로 전달
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

/*

✅ reducer : 현재 상태의 application과 함께 불려지는 function (+ with action)
return하는 것은 application의 state가 됨
✅ action : reducer와 소통하는 방법으로 Object여야 하며 그 key 이름은 항상 type임 (바꿀 수 없음)
✅ dispatch : reducer에게 action을 보내는 방법
✅ subscribe : store의 변화를 감지하면 인자값으로 준 함수를 실행

*/