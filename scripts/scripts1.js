window.onload=function(){
  var myImage = document.querySelector('img');
  myImage.onclick = function() {
      var mySrc = myImage.getAttribute('src');
      if(mySrc === 'images/pic1.jpg') {
        myImage.setAttribute('src', 'images/pic3.jpg');
      } else {
        myImage.setAttribute('src', 'images/pic1.jpg');
      }
  }
  function setHeading(Lisa) {
      var myHeading = document.querySelector('h1');
      myHeading.textContent = 'Hello!' + Lisa + '!';
    }   
    function setUserName() {
      var myName = prompt('请输入你的名字');
      localStorage.setItem('name', myName);
      setHeading(myName);
    }    
    var storedName = localStorage.getItem('name');
    if(!storedName) {
       setUserName();
    } else {
       setHeading(storedName);
    }    
    var myButton = document.querySelector('button'); 
    myButton.onclick = setUserName;
};

// JavaScript Document