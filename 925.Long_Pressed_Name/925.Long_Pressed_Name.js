var isLongPressedName = function(name, typed) {
    let i = 0;
    let j  = 0;
    let n = name.length;
    let m = typed.length;

    for( ; j < m; j++) {
        if (i < n && name.charAt(i) == typed.charAt(j))
            ++ i;
        else if (j == 0 || typed.charAt(j) != typed.charAt(j - 1))
        return false;
    }

    return i == n;
};
