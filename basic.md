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

# HashMap in JS
```js
// 1. map생성
var map = new Map();

// 2. map에 데이터 추가 (map.set)
map.set('example number', 4);

// 3. map의 정보 가져오기 (map.get)
console.log(map.get('example number'))

// 4. map에 존재여부 확인
console.log(map.has('test number')

// 5. map의 사이즈
console.log(map.size) // 이게 정답
console.log(map.length) // undefined

// 6. 탐색
// key, value 쌍으로 출력
for (let [key, value] of map) {
  console.log(key + ' = ' + value)
}

// key만 출력
for (let key of map.keys()) {
  console.log(key)
}

// value만 출력
for (let value of map.values()) {
  console.log(value)
}
```

# 일반 객체 vs Map()
- Map이 메모리 사용량이 많으나 성능자체는 우수하다.

# Set
- 고유 값 관리, 중복 제거 등에 활용.
  - Python의 set과 동일
## Set생성 및 관리방법
```js
let mySet = new Set();

// set 추가
mySet.add(1);
mySet.add(3);
mySet.add(1);
console.log(mySet);

// set 내부 존재 확인
console.log(mySet.has(1));
console.log(mySet.has(999));

// mySet 값 제거
mySet.delete(1);
console.log(mySet);

// 중복 제거 활용 Object => Set => Object
let numbers = [1,1,1,2,2,3,4,5]
let uniquenumbers = new Set(numbers)
console.log(uniquenumbers);
uniquenumbers = [...uniquenumbers]
console.log(uniquenumbers);
```

#배열 관리
## slice(a, b)
- array 자르기 (a부터 b index)

## splice (a, b, 'add array1' ...)
- array를 a부터 b개를 제거하고 뒤에 항목을 추가하는 작업
- b를 0으로 두면 단순 삽입 기능 구현 가능

## reverse()
- array를 거꾸로 배치
- string을 거꾸로 하는 함수가 존재하지 않기에, string을 다음과 같은 과정을 통해 거꾸로 배치 가능
```js
input = '거꾸로';
reversed = input.split('').reverse().join('')
console.log(reverse)
```

## push
- 배열에 값 추가

# string 관리
## repeat()
- str은 python과 달리 문자열을 숫자로 곱하여 반복할 수 없음.
- str.repeat(number) 으로 number만큼 반복 가능

## 대소문자
- toUpperCase()
- toLowerCase()

# class
- Dart와 크게 다르지 않음.
```js
class Wizard {
    constructor(health, mana, armor) {
        this.health = health;
        this.mana = mana;
        this.armor = armor;
    }

    attack() {
        console.log('파이어볼')
    }
}


const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();

// {/*출력*/}
// 545 210 10
// 파이어볼
```

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