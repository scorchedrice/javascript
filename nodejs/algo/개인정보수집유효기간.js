// programmers
function solution(today, terms, privacies) {
    var answer = [];
    
    // 오늘 정보 가공
    var today_info = today.split('.')
    let today_year = Number(today_info[0])
    let today_month = Number(today_info[1])
    let today_day = Number(today_info[2])
    
    // HashMap 생성 (terms 가공)
    var map = new Map();
    for (let i = 0; i < terms.length; i++) {
        var term_info = terms[i].trim().split(' ')
        map.set(term_info[0], Number(term_info[1]))
    }
    
    // map과 today정보를 기준으로 정답 출력
    for (let i = 0; i < privacies.length; i++) {
        var target = privacies[i].trim().split(' ')
        // target date
        var target_date = target[0].trim().split('.')
        var target_year = Number(target_date[0])
        var target_month = Number(target_date[1])
        var target_day = Number(target_date[2])
        // target type
        var target_term = map.get(target[1])
        
        var year_diff = today_year - target_year
        var month_diff = today_month - target_month
        var day_diff = today_day - target_day
        var total_diff = year_diff * 12 * 28 + month_diff * 28 + day_diff
        if (total_diff/28 >= target_term) {
            answer.push(i+1)
        }
        
    }
    
    return answer;
}
