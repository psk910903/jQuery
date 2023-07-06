var bigPic = document.querySelector("#cup"); //큰 이미지 찾아옴
var smallPic = document.querySelectorAll(".small"); //작은 이미지 찾아옴(노드리스트)
var cup = document.querySelector("#cup");
var isOpen = false

for(var i=0; i<smallPic.length; i++){
  //작은 이미지 노드리스트들을 클릭하면 changePic()가 호출된다.
  smallPic[i].addEventListener("click", changePic)
}

function changePic() {
  //click이벤트가 발생한 대상(this)의 src속성을 newPic에 저장
  var newPic = this.src;
  //newPic의 값을 큰 이미지의 src속성으로 대입되어 큰 이미지로 나타남
  bigPic.setAttribute('src', newPic)
  // cup.src = newPic
}