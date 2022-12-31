function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();
  const result = new Array<string[]>();

  for (let s of strs) {
    const alpha = new Array<number>(26);
    alpha.fill(0);
    for (let c of s) {
      const index = c.charCodeAt(0) - 97;
      alpha[index] += 1;
    }
    const key = alpha.toString();

    const wordArr = map.get(key) || [];
    wordArr.push(s);
    map.set(key, wordArr);
  }

  for (let val of map.values()) {
    result.push(val);
  }

  return result;
}

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
