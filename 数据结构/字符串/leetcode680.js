function isPalindrome(s, left, right) {
    while (left < right) {
        if (s[left] != s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
function validPalindrome(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] == s[right]) {
            left++;
            right--;
        } else {
            return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
        }
    }
    return true;
}