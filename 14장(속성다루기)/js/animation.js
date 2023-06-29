

    //전역 변수 초기화
    var view = null;
    var currentIndex = 1;
    var timerId = 0;
    //시작 부분
    $(document).ready(function(){
      init() //전역 변수 초기화 및 함수 호출
      initEvent() //이벤트 초기화 함수 등록
    })
    //초기화 함수
    function init(){
      view = $('#view')
    }

    //이벤트 초기화
    function initEvent(){
      //자동 실행 이벤트 등록
      $('#play').click(function(){
        startAutoPlay();
      })
      $('#stop').click(function(){
        stopAutoPlay();
      })
      $('#prev').click(function(){
        prev();
      })
      $('#next').click(function(){
        next();
      })
    }

    //자동 실행 함수
    function startAutoPlay(){
      if(timerId == 0 ){
        //0.01초마다 nextImg를 호출
        timerId = setInterval(function(){
          nextImg();
        }, 50)
      }
    }

    //멈춤 함수
    function stopAutoPlay(){
      //타이머 아이디가 존재한다면 실행되고 있다는 것이므로
      if(timerId != 0){
        clearInterval(timerId);
        timerId = 0
      }
    }

    //이전 이미지를 보여주는 함수
    function prev(){
      stopAutoPlay()
      prevImg()
    }

    //다음 이미지를 보여주는 함수
    function next(){
      stopAutoPlay()
      nextImg()
    }

    //다음 이미지를 보여주는 함수
    function nextImg(){
      //다음 이미지를 보여주기 위해 +1
      var index = currentIndex + 1
      if(index == 60){
        index = 1;
      }
      showImg(index);
    }

    function prevImg(){
      var index = currentIndex - 1
      if(index == 0){
        index = 60;
      }
      showImg(index);
    }

    //이미지를 보여주는 함수
    function showImg(index){
      view.attr('src', "images/"+index+".jpg" )
      currentIndex = index;
    }