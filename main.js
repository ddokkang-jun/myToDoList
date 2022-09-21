'use strict'

// 유저는 할일을 추가할 수 있다.
// 각 할일에 삭제와 체크버튼이 있다.
// 삭제버튼을 클릭하면 할일이 리스트에서 삭제된다.
// 체크버튼을 누르면 할일이 끝난것으로 간주하고 밑줄이간다.
// 끝난 할일은 되돌리기 버튼을 클릭하면 다시 되돌릴 수 있다.
// 탭을 이용해 아이템들을 상태별로 나누어서 볼 수 있다.
// 모바일 버전에서도 확인할 수 있는 반응형 웹이다

let input = document.querySelector(".task-input");
let addBtn = document.querySelector(".add-button");
let inputValueArray = [];

addBtn.addEventListener("click", addTask);
input.addEventListener("keypress", (e) => {
  
  if(e.key =="Enter"){
    let inputValue = input.value;
    if(inputValue == ''){
      return;
    }else {
      inputValueArray.push(inputValue);
      render();
      input.value = '';
    }
  }
})

function addTask(){
  let inputValue = input.value;
  if(inputValue == ''){
    return;
  }else {
    inputValueArray.push(inputValue);
    render();
  }
}

function render() {
  let taskBoardHTML = '';
  for(let i = 0; i < inputValueArray.length; i++){
    taskBoardHTML += `
      <div class="task">
        <div>${inputValueArray[i]}</div>
        <div>
          <button>
            <i class="fas fa-check"></i>
          </button>
          <button>
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    `;
  }

  document.querySelector(".task-board").innerHTML = taskBoardHTML;
}





// 나중에 다 하고 navar indicator 만들때 쓸 코드 주소
//https://hackmd.io/@oW_dDxdsRoSpl0M64Tfg2g/SyujQp2Lt