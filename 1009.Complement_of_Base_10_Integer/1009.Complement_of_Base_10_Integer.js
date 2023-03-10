var bitwiseComplement = function(n) {
    let perfect = 1;

    while (perfect < n) perfect = perfect * 2 + 1;

    return perfect ^ n;
};
