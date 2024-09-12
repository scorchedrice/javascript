class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class Deque {
    constructor() {
        this.init();
    }

    init() {
        this.count = 0;
        this.front = null;
        this.rear = null;
    }

    unshift(value) {
        const node = new Node(value);

        if (!this.front) {
            this.front = node;
            this.rear = node;
        } else {
            const cachedPrevFront = this.front;
            cachedPrevFront.prev = node;

            this.front = node;

            node.next = cachedPrevFront;
        }

        this.count += 1;
        return this.count;
    }

    shift() {
        if (this.count === 0) return null;

        const value = this.front.value;

        if (this.count === 1) {
            this.init();
        } else {
            this.front = this.front.next;
            this.front.prev = null;
            this.count -= 1;
        }

        return value;
    }

    push(value) {
        const node = new Node(value);

        if (this.count === 0) {
            this.front = node;
            this.rear = node;
        } else {
            const cachedPrevRear = this.rear;
            cachedPrevRear.next = node;

            node.prev = cachedPrevRear;

            this.rear = node;
        }

        this.count += 1;

        return this.count;
    }

    pop() {
        if (this.count === 0) return;

        const value = this.rear.value;

        if (this.count === 1) {
            this.init();
        } else {
            this.rear = this.rear.prev;
            this.rear.next = null;
            this.count -= 1;
        }

        return value;
    }

    getValue(idx) {
        if (idx >= this.count) return;
        let node = this.front;

        for (let i = 0; i < idx; i += 1) {
            node = node.next;
        }

        return node.value;
    }

    get rawArray() {
        let arr = [];
        let node = this.front;

        for (let i = 0; i < this.count; i += 1) {
            arr.push(node.value);
            node = node.next;
        }

        return arr;
    }

    get length() {
        return this.count;
    }
}

// 0,0 => N-1,M-1
function bfs() {
    var CI = 0;
    var CJ = 0;
    var DQI = [];
    var DQJ = [];
    var color = die_road[0][0];
    while (true) {
        // console.log(CI, CJ)
        die_road[CI][CJ] = 2;
        // console.log(die_road)
        for (var i = 0; i < ability + 1; i++) {
            for (var j = 0; j < ability + 1; j++) {
                if (i + j <= ability && (i === 0 && j === 0) === false) {
                    var NI = CI + i
                    var NJ = CJ + j
                    if (NI < N && NJ < M) {
                        if (die_road[NI][NJ] === color) {
                            // 이놈들이 진짜 갈 수 있는 후보군임.
                            if (NI === N-1 && NJ === M-1) {
                                die_road[N-1][M-1] = 2;
                                return die_road[N-1][M-1]
                            }
                            DQI.push(NI)
                            DQJ.push(NJ)
                        }
                    }
                }
            }
        }
        // console.log('AFTER FOR LOOP', DQI, DQJ)
        if (DQI.length === 0) {
            // console.log('STOP')
            return die_road[N-1][M-1]
        }
        CI = DQI.shift();
        CJ = DQJ.shift();
    }

}


const input = require('fs').readFileSync("../input.txt").toString().split('\n');
const data = input.map((data) => data.split(' ').map(Number))

// console.log(data)
const N = data[0][0];
const M = data[1][0];
const die_road = data.slice(2, 2+N);
const ability = data[2+N][0]
const result = bfs();
console.log(result === die_road[0][0] ? 'ALIVE' : 'DEAD')
