'use strict'

// 첫째날 :
// 유저는 할일을 추가할 수 있다.
// 각 할일에 삭제와 체크버튼이 있다.

// 둘째날 :
// 체크버튼을 누르면 할일이 끝난것으로 간주하고 밑줄이간다. => 각각의 task들에 랜덤 id를 주고, 체크버튼을 클릭하면 해당되는 id를 찾아 CSS style을 바꾸어주자
// 삭제버튼을 클릭하면 할일이 리스트에서 삭제된다.
// 끝난 할일은 되돌리기 버튼을 클릭하면 다시 되돌릴 수 있다.
// 탭을 이용해 아이템들을 상태별로 나누어서 볼 수 있다.
// 모바일 버전에서도 확인할 수 있는 반응형 웹이다

let input = document.querySelector(".task-input");
let addBtn = document.querySelector(".add-button");
let inputValueArray = [];
input.focus();


// input에 할일을 입력하고 키보드 enter를 눌렀을때 이벤트 
input.addEventListener("keypress", (e) => {
  if(e.key =="Enter"){
    if(input.value == ''){
      return;
    }else {
      addTask();
      input.value = '';
    }
  }
})

// addTask() : +버튼을 클릭하여 task 추가해주는 함수
addBtn.addEventListener("click", addTask);

// 할일을 추가하는 함수
function addTask(){
  let task = {
    id: randomId(),
    taskValue: input.value,
    isItDone: false,
  }
  if(input.value == ''){
    input.focus();
    return;
  }else {
    inputValueArray.push(task);
    render();
    input.value = '';
    input.focus();
  }
}

// render() : 브라우저 화면에 task보여주는 함수
function render() {
  let taskBoardHTML = '';
  for(let i = 0; i < inputValueArray.length; i++){
    if(inputValueArray[i].isItDone == false){
      taskBoardHTML += `
      <div class="task">
        <div>${inputValueArray[i].taskValue}</div>
        <div>
          <button onclick="toggle('${inputValueArray[i].id}')">
            <i class="fas fa-check"></i>
          </button>
          <button>
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    `;
    }else {
      taskBoardHTML += `
      <div class="task">
        <div class="underline">${inputValueArray[i].taskValue}</div>
        <div>
          <button onclick="toggle('${inputValueArray[i].id}')">
            <i class="fas fa-check"></i>
          </button>
          <button>
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    `;
    }
    
  }

  document.querySelector(".task-board").innerHTML = taskBoardHTML;
}

// 체크버튼이 클릭된 해당 객체를 찾아서 값을 바꿔줌. 그리고 다시 렌더함수 호출
function toggle(id){
  inputValueArray.filter((item) => {
    if(item.id == id){
      return item.isItDone = !item.isItDone;
    }
  })
  render();
}

// task 객체에 random ID 주는 함수
function randomId() {
  return '_' + Math.random().toString(36).replace(/\./g,"");
}



// 나중에 다 하고 navar indicator 만들때 쓸 코드 주소
//https://hackmd.io/@oW_dDxdsRoSpl0M64Tfg2g/SyujQp2Lt