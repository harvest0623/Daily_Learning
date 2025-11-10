var nums = [2,7,11,15]
var target = 9

// 时间复杂度 o(n)
// 空间复杂度 o(n)

var twoSum = function(arr,res) {
    var diffs = {}
    var len = arr.length
    for(var i=0;i<len;i++){
        // res - arr[i]
        // 去对象中查找是否存在key 为 res - arr[i]
        
        if(diffs[res-arr[i]] !== undefined){
            return [diffs[res - arr[i]], i]
        }
        // 如果读不到
        diffs[arr[i]] = i
    }
};