function isPrefixString(s: string, words: string[]): boolean {
  let res = "";
    for (const word of words) {
        res += word;
        if (res === s) {
          return true;
        }
    }
    return false;
};
