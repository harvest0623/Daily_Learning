var nums = [2,7,11,15]
var target = 9
var twoSum = function(arr,res) {
    for(var i=0;i<arr.length;i++){
        var left=arr[i]
        for(var j=i+1;j<arr.length;j++){
            var right=arr[j]
            if(left+right==res){
                return [i,j]
            }
        }
    }
};
console.log(twoSum(nums,target));