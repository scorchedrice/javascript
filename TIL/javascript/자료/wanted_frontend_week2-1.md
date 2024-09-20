# 챌린지 참여자 발표 내용
## ES5, ES6 무슨 차이? (JS의 변화, 조민지님)
### ES?
- ECMA Script의 줄임말로, 웹 브라우저에서 사용되는 표준화된 스크립트 언어.
- ECMA-262 규격에 맞게 ..
### 그래서 JS와 ECMA는 무슨 상관이냐
- JS가 여러 환경에서 일관된 방식으로 동작할 수 있도록 한 JS의 표준사양.
- 모든 JS엔진은 이를 따른다.
### 그래서 ES5, ES6 뭐가 다름?
- ES5 : 09년 발표, 대부분의 브라우저가 표준으로 지원하는 JS의 전통 버전
- ES6 : 15년 발표, 효율적인 문법 추가, 사용성 및 가독성 개선 => JS 개발 변화
### ES6의 대표적인 변화
- let, const 추가
- 화살표함수 추가
- 템플릿 리터럴 추가
- 구조 분해 할당
- 새로운 반복문 (forEach, for ... in, for ... of)
- 스프레드 연산자
- 비교 연산자 ===
- 모듈 import / export
- class
- Promise
### let / const
![var_let_const.png](var_let_const.png)
- var의 경우 재선언하여 값이 바뀌는 문제, 호이스팅 등의 문제 발생 가능
  - 이를 let, const로 방지 (block scope)
  - TDZ으로 초기화 전 변수를 사용하는 실수 방지.

### 화살표 함수
- function 키워드 생략 가능
- 매개변수에 기본 값을 할당할 수 있다.
- 함수의 바디가 하나의 표현식인 경우, 중괄호를 생략 가능(물론 하는게 더 안전할 것 같긴함.)
- 매개변수가 하나인 경우 소괄호를 생략 가능 (물론 안전한 방법은 쓰는 것 같음.)

#### 화살표 함수의 등장으로 this바인딩 이슈를 예방할 수 있었다.
- 화살표 함수 자체는 this가 정적으로 바인딩 되기 때문에, 상위 스코프로 this가 binding된다.
  - window가 binding되는 문제 방지 할 수 있잖음~
#### 근데 얘도 완전한 해결책은 아님.
- 상황에 맞는 함수 선택 필요.

## SPA, CSR, SSR (이경택님)
### MPA란?
- Multi Page Application
  - 서버에 미리 만들어져있는 정적 HTML파일을 클라이언트가 받아 랜더링
  - 페이지 이동시 HTML을 받고 이동
  - 같은 웹 어플리케이션에서 활동하더라도 이동하는 경우 HTML을 받는 과정으로 서버의 비용, 사용자 경험등 좋지 못함
  - SSR경우 많음.

### SPA등장
- 유저 인터랙션의 증가, 모바일의 증가로 사용도 증가.. 이것이 등장 원인
- 하나의 페이지로 구성된 웹 어플리케이션으로
  - 빈 HTML파일을 클라이언트가 받고, JS로 화면에 표시
  - 페이지 이동시 동적으로 페이지 랜더링
  - initial request => html to client => ajax => json to client
    - 변경이 필요한 부분만 json으로 받고 바꾼다
  - 주로 CSR

### SSR
- initial request => html to client => js to client ... interaction까지의 시간 걸림
- SEO에 유리함
- TTV 빠름 (time to view)

#### SSR 단점
- 서버 부하가 크다 (HTML을 불러와야함)
- 페이지 변경 시 깜빡임이 있을 수 있다.

### CSR
- initial request => 빈 html to client => 내용이 없기에 js to client => js파일을 바탕으로 동적 화면 랜더링, 즉시 상호작용 가능
- html 마크업이 아닌, js를 통해 화면 랜더링
- js로 변경이 필요한 부분만 요청하기에 서버 부하가 적다.
- TTV, TTI (time to view / interaction) 시간 차 적거나 없다.
- 페이지 변경 사항 시 깜빡임 X

#### CSR 단점
- SEO에 불리하다.
- 초기 로딩이 느리다.

### 뭘 쓸까?
- 사내 사용, 상호작용 많음 => CSR
- 쇼핑몰과 같은 유입 필요 => SSR
  - SSR의 경우 보안? => 서버를 사용하기에, 전역변수 하나 잘못 사용한다면...! 토큰이 섞이고 이런 경우가 발생할 수 있음.
  - 레이스 컨디션? 이런 오류 주의, jwt토큰이 섞이는 것..
    - 전역에 있는 쿠키를 가져오는 라이브러리 ? 이런거 쓸 때, SSR의 경우 여러 사람들이 동시에 들어온다면 ..? 이런 현상이 발생할 수 있음.

### server component, ssr 다른 개념인가?
- yes

## 라이브러리와 프레임워크의 차이?
- 라이브러리 : 기능 구현을 위한 코드의 집합 (단순 도구)
- 프레임워크 : 애플리케이션 구현을 위한 라이브러리의 집합 (규칙이 정해져 있음)
    - 정해져 있는게 있으니, 고민할 필요가 없긴 함

## React 16 +의 동작원리 (심민섭님)
### Why React
- stackoverflow 기준 react 많이 쓰긴 함.
  - 근데 많이 쓰는게 이유가 되는것은 옳지 못하다 생각함.
- component 기반 아키텍쳐 (UI 모듈화, 재사용, 유지보수 및 협업에 용이)
- 가상 DOM 사용 => 변경된 부분만 업데이트하여 빠른 반응성 보장, 대규모 어플리케이션에 큰 장점
- 풍부한 생태계 / 커뮤니티 (인원수 많은 것의 장점)

### React 동작 단계
- 초기 랜더링 단계 : JSX => React.createElement()로 변환하여 엘레먼트 트리를 생성, 이 트리를 기반으로 DOM 구성
- 재조정단계
- Commit 단계
- 업데이트 단계

### Fiber Reconciler
- 16 버전 이후 등장
- chunk 단위로 작업을 진행하기에 큰 장점.
  - A cartoon intro to fiber - react conf 2017
- 한번 알아보자!
- https://claudiopro.github.io/react-fiber-vs-stack-demo/

## 비동기 처리에서 고려해야할 점
### Promise.all(), Promise.allSettled()
- API waterfall 방지 목적으로 사용하는 경우가 많다. (병렬 진행 필요할 때)
```js
// promise.all()
[a, b, c, d] = Promise.all([getA(), getB(), getC(), getD()])
// 모든 프로미스가 이행되면 이행되고, 하나라도 거부된다면 거부된다.

// promise.allSettled() 의 경우, 실패해도 진행할 수 있는 경우 사용
// 모든 프로미스가 해결되면 이행됩니다.
```
## EventLoop 정리
- Event Loop : 싱글스레드로 동작하는 JS를 브라우저에서 동시성을 제공하기 위한 동작방식을 의미
- JS가 싱글스레드다 !== JS runtime은 싱글스레드이다.
- Callback Queue => 우선순위 있음. macro, animation, micro ...
- JS에서 실행컨텍스트는 큰 비중을 차지한다.
  - 클로저, 호이스팅, this ... 이런 것을 이해하는데 큰 중요

## Engineer가 가져야 하는 습관
![engineer_habit.png](engineer_habit.png)
- 추상화 된 기능들에 관심을 가지자
  - 당연하게 동작하는 것은 없다.
- 당연하게 생각하지 않기.
  - example) jsx에서 span tag 두개로 된 것이 오류나는 이유?
    - <></>으로 감싸면 되는거 맞긴 하지~ 근데, 동작하지 않을 이유가 있나?
      - BABEL으로 변환될 때, 어떤식으로 동작되는지 알면 알 수 있겠다.
        - createElement('div'. [createElement('span', '~'), createElement('span', '~~')])
