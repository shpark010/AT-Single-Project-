// PC가 아닌 다른 기기에서 실행 시 주소창에 주소는 바뀌지 않지만 홈페이지는 바뀌게

// 기기정보를 담는 배열 생성
let smartPhones=['iphone','ipod','ipad','opera mini','opera mobi','nokia','android',
'webos','windows ce','blackberry','iemobile','sonyericssion'];

// 스마트 폰 구분
for(let i in smartPhones) {
    // toLowerCase() : 대문자를 소문자로 전환
    if(navigator.userAgent.toLowerCase().match(new RegExp(smartPhones[i]))) {
        //  document.location : 주소창
        document.location = 'http://shpark010.dothome.co.kr/mindex.html';
    }
}

// 기기감지가 안되는 폰이면
// alert(navigator.userAgent);
// 브라우저 정보(스마트폰 운영체제,기기정보)