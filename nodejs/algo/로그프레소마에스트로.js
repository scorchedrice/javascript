function dfs(start) {
    let current;
    let stack;
    let visited;
    stack = [start]
    visited = []
    visit_history = []
    for (let i = 0; i <= NMK[0]; i++) {
        visited.push(0)
    }
    while (stack.length > 0) {
        current = stack.pop()
        // console.log('Current',current)
        const futures = road[current]
        // console.log('Future', futures)
        for (future of futures) {
            if (virus_computer.includes(future) && virus_computer.includes(current)) {
                if (visited[future] === 0) {
                    // 방문 기록이 없다면
                    stack.push(future)
                    visited[future] = 1
                    visit_history.push(future)
                    break;
                }
            } else {
                // console.log(visit_history)
                return false;
            }

        }
        if (visit_history.length === NMK[2] - 1) {
            // console.log(visit_history)
            return true;
        }
    }
    // console.log(visit_history)
    if (visit_history.length === NMK[2] - 1) {
        // console.log(visit_history)
        return true;
    } else {
        return false;
    }
}

let input = require('fs').readFileSync("../input.txt").toString().split('\n');
// const input = require('fs').readFileSync("/dev/stdin").toString().split('\n');
input = input.map((detail) => detail.split(' ').map(Number))

const NMK = input[0]
const virus_computer = input[1]
// console.log('virus computer', virus_computer)
const log_datas = input.slice(2,2 + NMK[1])
const min_time_map = new Map()
let road = []
for (let i = 0; i <= NMK[0]; i++) {
    road.push([])
}
for (let j = 0; j < log_datas.length; j++) {
    const log_data = log_datas[j]
    if (min_time_map.has(log_data[1]) === false) {
        min_time_map.set(log_data[1], log_data[0])
    }
    if (road[log_data[1]] === []) {
        road[log_data[1]] = [log_data[2]]
    } else {
        road[log_data[1]].push(log_data[2])
    }
}
const sorted_map = Array.from(min_time_map)
sorted_map.sort((a, b) => a[1] - b[1])

// console.log(min_time_map)
// console.log(road)
for (target of sorted_map) {
    // console.log('start', k)
    // console.log(dfs(k))
    const result = dfs(target[0])
    if (result === true) {
        console.log(target[0])
        break;
    }
}