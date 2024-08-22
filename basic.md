# 변수설정
- let, const, var

## let
- 재할당 가능 (값을 바꿀 수 있음)
- 재선언 불가능

## const
- 재할당, 재선언 불가

# type
## 원시자료형
- Number, String, Boolean, null, undefined
- 변수에 값이 직접 저장, 불변/값이 복사
    - 변수 선언시 신경 안쓰고 해도 됨. (서로 영향 X)
## 참조자료형
- Objects(Object, Array, Function)
- 객체의 주소가 저장되는 자료형, 가변/주소가 복사
    - 메모리 주소를 저장하기에 값을 선언하는 경우 생각을 해야함. (서로 영향을 끼침)

# 변수 값을 포함한 String 저장 방법
- `` + $ 조합으로 사용

# == vs. ===
- ==의 경우 암묵적 타입변환 후 일치여부 확인
- ===는 완전 동일한지 확인

# 논리연산자
- && : and
- || : or
- ! : not

# 조건문
- 삼항 연산자의 경우 dart와 동일
- 일반 조건문의 경우 if (condition) {수행} 형태

# 반복문
- while (조건) {수행}
- for (초기; 조건; 증감;) {수행} : index로 반복하는 경우
- for (var in obj) {수행} : obj 내 열거하기 위해 사용
    - 일반 array에서 in을 사용하면 index를 가져옴
- for (var of iterable) {} : 반복 가능한 객체 (배열(array) 및 문자열)

# 백준에서 nodejs로 알고리즘 푸는 방법
## 입력하는게 한 줄 일때
```js
const fs = require('fs');
const input = fs.readFileSync("dev/stdin").toString().split(" ");
```
- 여기에 split을 조건에 맞게 해줘야함.

## 입력하는게 여러줄
```js
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")
```

## 입력하는게 여러줄 + 각 줄의 의미가 다른 경우
```js
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const inputN = Number(input[0]);
const inputLine = [];
for (let i = 1; i < input.length; i++) {
  inputLine.push(input[i].toString().trim().split(" ").map(v => Number(v)));
}
```