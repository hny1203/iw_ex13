const frame = 'section';
const box = 'article';
const speed = '0.5s';
const activeClass = "on";
const btn = document.querySelectorAll("main ul li");
let grid;   // 플러그인의 정보값이 담길 변수를 이곳에 전역으로 설정

// 이미지 소스를 활용한 모든 콘텐츠의 로딩이 완료되면
window.addEventListener("load", () => {
    init(); // 화면 초기화 함수
    filter(btn);    // 정렬 버튼 기능 함수
});

function init() {
    grid = new Isotope(frame, { // 배치할 요소를 감싸는 부모 요소명
        itemSelector: box,    // 배치할 요소명
        columnWidth: box,     // 너비값을 구할 요소명
        transitionDuration: speed  // 화면 재배치 시 요소가 움직이는 속도
    });
}

function filter(arr) {
    for(let el of arr) {
        el.addEventListener("click", e => {
            e.preventDefault();

            // 변수 sort에 클릭한 대상의 자식 a 요소의 href 속성값 저장
            const sort = e.currentTarget.querySelector("a").getAttribute("href");

            grid.arrange({      // grid에 저장된 결괏값을 불러와 재정렬 기능 연결
                filter: sort    // 옵션값으로 sort 변수값 지정
            })

            for(let el of arr) {
                el.classList.remove("on");  // 각 버튼의 클래스명 on 제거해 비활성화
            }
            e.currentTarget.classList.add('on');    // 클릭한 대상만 선택해서 클래스명 on 추가해 활성화
        });
    }
}