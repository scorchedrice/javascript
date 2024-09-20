# JavaScript의 특징
- 싱글스레드이다.
  - == 하나의 콜 스택을 가진다.
    - 콜스택에 명령을 쌓고, 이를 빼는 과정으로 연산 처리 진행

# EventLoop
- 싱글스레드로 동작하는 JS를 브라우저에서 동시성을 제공하기위한 동작방식을 의미
  - JS는 동기적으로 작동하는 언어이다.

## EventLoop Detail
- youtube link : `https://youtu.be/8aGhZQkoFbQ?si=ecdtI8fJFuHLJuM1`
### 느려진다는 것은 무엇인가
- JS의 싱글스레드라는 특징 => 콜스택에 오래 걸리는 작업이 남아있는 경우, 이 경우 속도의 저하 다수 발생
- 브라우저에서 JS가 작동한다는 것이 느려지는 것의 원인
  - 콜스택에 API 요청과같은 작업이 남아있다면 속도 저하, 왜? 싱글스레드니까
    ```js
    var foo = $.getReq('//foo')
    var bar = $.getReq('//bar')
    var baz = $.getReq('//baz')
    console.log(foo)
    console.log(bar)
    console.log(baz)
    ```
    - getReq라는 가상의 함수가 존재한다고 칠때
      - 해당 코드를 실행하면, 요청이 완료되기 전까지 클릭같은 것 제한됨 (브라우저에서 동작하는 것의 한계)
        - 비동기 콜백의 활용 필요!
### JS의 한계 + Web API의 도움 => 극복
- 싱글스레드 (작업 하나씩 하나씩 ..) JS + Web API => 동시성의 확보
```js
console.log('1');
setTimeout(function cb() {
    console.log('2');
}, 5000);
console.log('3');
```
- 이 경우 다음과 같은 흐름
  - console.log('1')은 바로
  - setTimeout은 stack => webapi(여기서 timer) => 타이머 종료 후 task queue => task queue는 stack이 비어있는 경우 stack에 업무 할당 => console
  - 최종 : 1 => 3 => 2
    - setTimeout에 0초를 할당해도 결과는 같다.
      - stack이 비어있는 경우에 task queue에 있던 작업이 넘어가기 때문에
      - 
