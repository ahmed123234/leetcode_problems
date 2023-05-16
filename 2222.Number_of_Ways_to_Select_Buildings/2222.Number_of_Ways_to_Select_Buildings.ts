function numberOfWays(s: string): number {
  let n = s.length;
  let one = 0, zero = 0;
  let n01= 0, n10=0, res = 0;
  for (let i = 0; i < n; i++) {
    let c = s.charAt(i); 
    if (c === '0'){
      zero++;
      n10 +=  one;
      res += n01;

    } else {
      one++;
      n01 +=  zero;
      res += n10;
    }
  }

  return res ;
};
