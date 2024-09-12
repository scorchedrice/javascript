# Event를 다루는 함수 내부에서 코드 작성 요령
- 외부 변수를 변경하는 경우 (setState ...) => 밖으로 빼는 것이 좋음
- 3항 연산자, && 등을 활용할 수 있음.

```ts
    // 변경 전.
  const handleProfileImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setImageFile(file);
    } else {
      setImageFile(null);
    }
  };
```

```ts
const handleProfileImage = (event : ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null
    // const file = event.target.files && event.target.files[0];
    setImageFile(file);
}
```

# 단축평가
- `&&`
```js
const reader = imageFile && new FileReaders();
// imageFile이 있다면 new FileReaders을 해라
// imageFile이 falsy라면 (null, 0, undefined, '') 실행하지 말렴
```


```ts
// 이런 어떤식으로 바꿀 수 있을까.
  useEffect(() => {
    if (imageFile) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result as string);
        };
        reader.readAsDataURL(imageFile);
    } else {
        setPreview(null);
    }
}, [imageFile]);

```