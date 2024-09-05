const input = require('fs').readFileSync("../input.txt").toString().split('\n');
// const input = require('fs').readFileSync("/dev/stdin").toString().split('\n');

// 1. N, M, K를 정의합니다.
let N;
let M;
let K;

const input_data = input[0].trim().split(' ').map(Number)
N = input_data[0];
M = input_data[1];
K = input_data[2];

// 2. 감염된 컴퓨터 리스트와 온전한 컴퓨터 리스트를 Map 형식으로 받습니다.
// 앞으로 반복문을 사용할 때, 이 Map을 변경하며 풀이를 진행합니다.
// Computer name => [min time, set] or false
// min time 을 갱신하면서 과정 진행, 단 감염되지 않은 컴퓨터를 건들이면 false 처리

const computerMap = new Map()
const virus_data = input[1].trim().split(' ').map(Number)
for (computer_name of virus_data) {
    computerMap.set(computer_name, [null,new Set()])
}

// 3. 로그 정보를 받으면서 과정을 진행합니다. 단 시간 순으로 진행해야 하므로 sort 하는 과정을 거칩니다.
const time_input = input.slice(2,input.length)
for (let i = 0; i < M; i++) {
    time_input[i] = time_input[i].split(' ').map(Number)
}
time_input.sort()

for (time_data of time_input) {
    const sec = time_data[0]
    const start = time_data[1]
    const end = time_data[2]

    // 보낸 컴퓨터, 받은 컴퓨터 모두 감염이라면
    if (computerMap.has(start)===true && computerMap.has(end)===true) {
        // 보낸 컴퓨터의 시간 정보를 최신화합니다.
        console.log(start, end)
        if (computerMap.get(start) !== false) {
            // 다른 컴퓨터에 영향 끼친 것을 아직 파악하지 못했다면
            if (computerMap.get(start)[0] === null) {
                // 만약 갱신된 적 없는 정보라면
                const sick_list = computerMap.get(start)[1]
                sick_list.add(end)
                computerMap.set(start, [sec, sick_list])
            } else {
                // 갱신된 정보라면 시간 정보 변화 X, 오직 sick_list 추가
                const old_sec = computerMap.get(start)[0]
                const sick_list = computerMap.get(start)[1]
                sick_list.add(end)
                computerMap.set(start, [old_sec, sick_list])
            }
        }
    } else if (computerMap.has(start) === true && computerMap.has(end) === false) {
        // 감염된 컴퓨터인데 비감염 컴퓨터로 전달할 수 없으니
        computerMap.set(start, false)
    }
}

let result = null;
let result_node = null;
console.log(computerMap)
computerMap.forEach((info, node) => {
    console.log(node,info)
    if (info !== false) {
        const result_data = canIcontinue(node)
        if (result_data === true) {
            if (result === null) {
                result = info[0]
                result_node = node
            } else {
                if (result > info[0]) {
                    result = info[0]
                    result_node = node
                }
            }
        }
    }
})

console.log(result_node)


function canIcontinue(start) {
    var current = start;
    var stack = [start]
    var visited = new Map()
    for (vir_data of virus_data) {
        visited.set(vir_data, false)
    }
    visited.set(start, true)
    var count_visited = 1

    while (true) {
        var candidates = computerMap.get(current);
        console.log('--------------------------')
        console.log(candidates)
        console.log('--------------------------')
        candidates = candidates[1]

        candidates = [...candidates]
        for (candidate of candidates) {
            if (visited.get(candidate) === false) {
                visited.set(current, true)
                count_visited ++
                if (count_visited === K) {
                    return true
                }
                current = candidate;
                stack.push(visited)
                break;
            }
        }
        // for 문에 안걸리면
        if (stack === []) {
            return false
        } else {
            current = stack.pop()
        }
    }
}
