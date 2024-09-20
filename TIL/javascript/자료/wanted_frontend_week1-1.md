# 9월 8일 일요일
# Queue, Stack
## 저장공간 알아보기
- HDD : Program => Memory : Process
  - 메모리를 효율적으로 사용해야함. (자료구조의 중요성)
## 비트와 바이트, 2진법과 16진법
- 8bit = 1byte
- 16진법은 색상코드 등에 사용

## 메모리 자세히 알아보기
- OS => 프로그램 실행시 메모리 할당 .. 의 과정으로 진행
- Stack(지역변수, 매개변수의 영역 (Compile)), Heap(동적 할당 영역 (Runtime)), Data(전역변수, 정적변수 영역), Code(실행 한 프로그램의 코드 영역)
- 자료구조를 활용한 효과적/효율적 메모리 관리필요

## Micro task Queue , Macro Task Queue
- 우선순위에 차이가 있다.
  - Micro task Queue : 1번 수행할 때 큐를 모두 비운다.
    - setTimeout ...
  - Macro task Queue : 1번 수행할 때 1개의 Task만 비운다.
    - async, await ...
- micro task queue에 작업을 많이 할당한다면 문제가 생길 수 있음.
```js
// 실행 순서는 어떤식으로 될까요?
console.log('시작');
setTimeout(() => {
    console.log('settimeout')
}, 0);
Promise.resolve().then(() => {
    console.log('promise')
})
console.log('종료')
```
## Stack
### Call Stack?
- 프로그램이 실행되며 함수 호출에 대한 정보를 추적, 관리하는 역할
### Execution Context (실행 맥락)?
- JS동작 맥락에 관련된 이해가 필요하다.
- Lexical Scope?
  - JS가 같은 변수명을 사용하더라도 원하는 변수를 찾을 수 있는 이유
    ```js
    const a = "hi"
    function b() {
        const a = "bye"
        console.log(a)
        // 이거 뭐 출력됨?
    }
    ```

### JS의 동작 과정
- Global Code : 전역에 존재하는 코드, 다만 정의되어있는 함수, 클래스 내부 코드는 포함되지 않는다.
- Engine의 동작방식
  - 1. 소스코드 평가
    - Execution Context를 생성하고 코드의 시작부터 끝까지 확인함
    - 변수나 함수의 선언문 `만` 먼저 실행하여 식별자를 Execution Context에 저장한다.
  - 2. 소스코드 실행
    - 실행했는데, 선언 되어있나? 있으면 그 값에 할당
    - 