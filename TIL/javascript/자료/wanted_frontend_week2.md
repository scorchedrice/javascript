# Example
```js
function getId(callback) {
    setTimeout(() => {
        console.log("ID");
        callback();
    }, 500);
}

function getEmail(callback) {
    setTimeout(() => {
        console.log("Email");
        callback();
    }, 500);
}

function getPassword(callback) {
    setTimeout(() => {
        console.log("Password");
        callback();
    }, 500);
}

getId(() => getEmail(() => getPassword()));
```
- 이런식으로 callback 사용 가능

## Example2
- 무인 주차 서비스에 가입되어 있지 않다 => 서비스 소개
- 가입되어있으면서 현재 주차중이라면 => 주차데이터
- 가입되어있으면서 주차 X => 주차 예약 버튼
- 가입되어있고 주차X인데, 첫 예약이라면 => 이벤트
    - 이렇게 개복잡하면 어케 할텐가~
    - 콜백지옥 ?
        - promise의 필요성 등장 (물론 promise를 직접 만들고 사용하는 경우는 적기함)

# Promise
- promise 객체는 비동기 작업을 맞이할 미래의 완료 또는 실패와 그 값을 나타낸다.
    - 뭔소리임?

## 쉽게 알아보자 promise
- 현재상태 Pending, Fulfilled, Rejected
- 처리기 then, catch, finally
```js
function promiseSetTimeout(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }
  
  function main() {
    const delay500ms = promiseSetTimeout(500);
  
    delay500ms.then(() => {
      console.log("500ms 딜러이 후 출력");
    });
  }
  
  main();
```

## async, await ... 왜 도입함?
- 이해하기 쉬움
- 근데, 기능적으로 promise보다 우수한가? 그런건 아님. 직관적이고 읽기 편하기 때문.
    - 단순히 문법만 다르게 적게끔 해주는 편의기능임.
    - 실제로 JS는 async await를 promise객체로 처리함.
    - 구조분해할당, 속성명 단축, 삼항 조건연산자, 템플릿 리터럴과 같은 Syntax Sugar 중 하나.
- await는 async function 내부에서만 사용 가능하며, async function은 Promise 객체를 반환한다.

### + fetch
- fetch는 promise를 반환... then사용 가능

# 그렇다면 이벤트 루프를 고려한 코드??
- Macro Task Queue
    - 한번 수행할 때 한개의 Task만 비운다.
    - setTimeout, setIntervbal, Event handlers ...
- Micro task Queue
    - Promise ...
    - 한번 수행할 때 큐를 모두 비운다.
- Animation Frame Queue
    - 브라우저 랜더링 역할 (드래그해서 파란색으로 바뀌는것도 얘가 랜더링 하는거임.)
- 우선순위
    - Macro < Animation < Micro
    - 만약 micro queue에 엄청 쌓여있는 경우? => 클릭 해도 이벤트 발생 X (처럼 보이는거임) => 시간이 지난 후 Queue에 쌓인 클릭이벤트 발동

# 일급객체
- First Class Object
    - 기술 X, 개념 O
    - JS 함수 : 일급객체.
        - 그래서 그게 뭔데?
        - 다른 객체들에 일반적으로 적용 가능한 연산을 모두 지원하는 객체
            - 함수의 매개변수가 될 수 있어야 한다.
            - 함수의 반환값이 될 수 있어야 한다.
            - 명령문으로 할당할 수 있다. (const Test = function () => ...)
            - 동일하게 비교할 수 있어야 한다. (typeof Fn === 'function')
    - 함수가 일급객체라면 무엇이 좋은가?
        - 커링
        ```js
        const getInfo = (name) => (phone) => (address) => `${name}, ${phone}, ${address}`;
        getInfo('jiwoong')('010...')('seoul');
        ```
            - 4개의 API를 호출할 때, 3개의 정보를 가지고 있다? 3개의 정보를 가진 함수를 만들고 이를 활용할 수 있음.
