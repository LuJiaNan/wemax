const fun = {
    transformUnixTimestamp(time){
        let date = new Date(time * 1000)
        let Y = date.getFullYear()
        let M = ((date.getMonth() + 1) >= 10 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1))
        let D = (date.getDate() >= 10 ? date.getDate() : '0' + date.getDate())
        let toDay = Y + '_' + M + '-' + D
        return toDay
    },
    transformUnixTimestampRemoveYear(time){
        let date = new Date(time * 1000)
        let Y = date.getFullYear()
        let M = ((date.getMonth() + 1) >= 10 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1))
        let D = (date.getDate() >= 10 ? date.getDate() : '0' + date.getDate())
        let toDay = M + '-' + D
        return toDay
    }
}

export default fun