// Node 클래스: Deque의 각 항목을 나타냅니다.
class Node {
    constructor(value) {
        this.value = value;  // 이 노드의 값
        this.next = null;    // 다음 노드를 가리킴
        this.prev = null;    // 이전 노드를 가리킴
    }
}

// Deque 클래스: 양쪽으로 넣고 뺄 수 있는 자료구조입니다.
class Deque {
    constructor() {
        this.init();  // Deque를 초기화합니다.
    }

    // Deque를 빈 상태로 만듭니다.
    init() {
        this.count = 0;      // 항목 개수
        this.front = null;   // 첫 번째 항목
        this.rear = null;    // 마지막 항목
    }

    // 맨 앞에 새 항목을 추가합니다.
    unshift(value) {
        const node = new Node(value);

        if (!this.front) {
            // Deque가 비어있으면 front와 rear 모두 새 노드로 설정
            this.front = node;
            this.rear = node;
        } else {
            // 새 노드를 기존 front 앞에 연결
            node.next = this.front;
            this.front.prev = node;
            this.front = node;
        }

        this.count += 1;  // 항목 개수 증가
        return this.count;  // 새로운 개수 반환
    }

    // 맨 앞의 항목을 제거하고 그 값을 반환합니다.
    shift() {
        if (this.count === 0) return null;  // 비어있으면 null 반환

        const value = this.front.value;  // 반환할 값 저장

        if (this.count === 1) {
            // 항목이 하나뿐이면 Deque를 비웁니다.
            this.init();
        } else {
            // front를 다음 노드로 이동
            this.front = this.front.next;
            this.front.prev = null;
            this.count -= 1;  // 항목 개수 감소
        }

        return value;
    }

    // 맨 뒤에 새 항목을 추가합니다.
    push(value) {
        const node = new Node(value);

        if (this.count === 0) {
            // Deque가 비어있으면 front와 rear 모두 새 노드로 설정
            this.front = node;
            this.rear = node;
        } else {
            // 새 노드를 기존 rear 뒤에 연결
            this.rear.next = node;
            node.prev = this.rear;
            this.rear = node;
        }

        this.count += 1;  // 항목 개수 증가
        return this.count;  // 새로운 개수 반환
    }

    // 맨 뒤의 항목을 제거하고 그 값을 반환합니다.
    pop() {
        if (this.count === 0) return;  // 비어있으면 아무것도 반환하지 않음

        const value = this.rear.value;  // 반환할 값 저장

        if (this.count === 1) {
            // 항목이 하나뿐이면 Deque를 비웁니다.
            this.init();
        } else {
            // rear를 이전 노드로 이동
            this.rear = this.rear.prev;
            this.rear.next = null;
            this.count -= 1;  // 항목 개수 감소
        }

        return value;
    }

    // 특정 위치의 값을 가져옵니다.
    getValue(idx) {
        if (idx >= this.count) return;  // 잘못된 위치면 아무것도 반환하지 않음
        let node = this.front;

        // idx만큼 다음 노드로 이동
        for (let i = 0; i < idx; i += 1) {