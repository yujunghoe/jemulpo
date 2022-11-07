//필요한 변수들 설정 및 선언
let rad = 10;  //입자 반지름
let xpos, ypos, vx, vy, ax, ay, dt;  //운동 관련 필요 변수들

//화면 구성 및 입자에 대한 설정
function setup() {
	createCanvas(windowWidth, windowHeight);  //화면 크기
	background(100);  //배경 색(위치를 어디에 둘지 고민해 보기)
	ellipseMode(RADIUS);  //반지름을 기준으로 타원그리기
	xpos = windowWidth/4;  //x의 초기값
    ypos = windowHeight/5;  //y의 초기값
	vy = 50;	 //y방향 초기속도
	ay = 50; //0.5;	 //y방향 초기 가속도
    dt = 0.1;  //시간간격
}

//반복적 작동 부분
function draw() {
	vy += ay*dt;  //y방향 초기 가속도
	ypos += vy*dt;  //y방향 초기 가속도
	ellipse(xpos, ypos, rad, rad);
}
