// 마우스 따라다니는 원
const mouseCircle = document.getElementById('mouseCircle');

// mousemove 이벤트핸들러로 마우스 x,y 좌표값 구하기
document.addEventListener("mousemove", (e) => { 
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  mouseCircle.style.left = mouseX + 'px';
  mouseCircle.style.top = mouseY + 'px';
});
