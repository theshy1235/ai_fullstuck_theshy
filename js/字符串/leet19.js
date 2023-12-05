var validPalindrome = function(s) {
    let i = 0, j = s.length - 1
    while (i <= j) {
        if (s[i]===s[j]){
            i++
            j--
        }else{
            bleak;
        }

    }
    if (lidPalindrome(i+1,j)){
        return ture
    }
    if (lidPalindrome(i,j+1)){
        return ture
    }
    function isPalindrome(st,ed){
        while (st<= ed) {
            if (s[st] !== s[ed]) {
                return flase
            }
                st++
                ed--
            
        }
    }
    return false
};
