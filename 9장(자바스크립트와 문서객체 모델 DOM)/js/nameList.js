function newRegister(){
  var newP = document.createElement("p") //새로운 p요소 만들기
  var userName = document.querySelector("#username")

  //입력값이 공백이 아닐때
  if(userName.value !== ""){
    var newText = document.createTextNode(userName.value) //새로운 텍스트 노드를 만드는 것
    newP.appendChild(newText) //p노드가 상위요소가 되고 text라는 하위 요소를 연결하기

    var delBtn =document.createElement("span") //새로운 버튼을 추가
    var delText = document.createTextNode("X") //새로운 택스트 노드를 추가
    delBtn.setAttribute('class', "del") //버튼에 class 선택자 속성을추가
    delBtn.appendChild(delText) //텍스트 노드가 button 하위요소를 연결
    newP.appendChild(delBtn) //delBtn을 p요소의 하위요소로 만들기


    var nameList = document.querySelector("#nameList")
    nameList.insertBefore(newP, nameList.childNodes[0]) //p요소를 #nameList의 맨앞에 추가
    // nameList.appendChild(newP) //p놓드가 #nameList의 하위요소가 된다.
    userName.value ="" //텍스트 필드 지우기

    var removeBtns = document.querySelectorAll(".del")
    
    //removeBtns 즉, 'X'의 전체를 반복한다.
    for(var i=0; i<removeBtns.length; i++){
      //removeBtns 각각의 버튼에 이벤트를 등록하고 있다.
      removeBtns[i].addEventListener("click", function(){
        //nameList를 의미한다. span태그의 부모가 p이고 p의 부모가 nameList이다.
        if(this.parentNode.parentNode){
          //p태그를 삭제함
          this.parentNode.parentNode.removeChild(this.parentNode);
        }
      })
    }
  }
}