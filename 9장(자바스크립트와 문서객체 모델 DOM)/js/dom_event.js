var pic = document.querySelector("#pic")
var pic1 = document.getElementById("pic")
//id선택자인 pic에게 마우스가 올라가면 changePic()을 호출하고, false는 버블링을 선택하지 않겠다.
//버블링이란,
//이벤트가 하위요소에서 발생하면 상위요소까지 전파되는 형태

//아래와 같이 하나의 선택자에게 다중으로 인벤트를 등록할 수 있다.
pic.addEventListener("mouseover", changePic, false)
pic.addEventListener("mouseout", originPic, false)

function changePic(){
  pic.src = "images/boy.png"
  // pic1.src = "images/boy.png"
}

function originPic(){
  pic.src = "images/girl.png"
  // pic1.src = "images/girl.png"
}
