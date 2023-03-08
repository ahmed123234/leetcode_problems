const myAtoi = (s) => {
  const MAX = 2 ** 31 - 1, MIN = -(2 ** 31);
  s = s.trim();
  let res = 0;
  for (let i = s[0] === '-' || s[0] === '+' ? 1 : 0; i < s.length; i++) {
    if (s[i] === ' ' || Number.isNaN(s[i] - '0')) break;
    res = res * 10 + (s[i] - '0');
  }
  return s[0] === '-' ? Math.max(MIN, -res) : Math.min(MAX, res);
};
