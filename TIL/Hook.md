# SetState - Prev 사용 이유
- 왜 prev state를 사용하는가
  - 같은 set 처리를 여러번 실행한다면 여러번 처리되는 것이 아닌, 한번만 처리된다.
  ```js
  const [myNum, setMyNum] = useState(0);
  const addNum = () => {
    setMyNum(myNum++)
    setMyNum(myNum++)
    setMyNum(myNum++)
  };
  // 이래도 한번만 증가한다. 
  ```
  - prev를 사용하는 경우 여러번 처리할 수 있다.
  ```js
  const [myNum, setMyNum] = useState(0);
  const addNum = () => {
  setMyNum((prev) => prev + 1)
  setMyNum((prev) => prev + 1)
  setMyNum((prev) => prev + 1)
  };
  ```
  ![prev_state.PNG](image%2FHook.md%2Fprev_state.PNG)