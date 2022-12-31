const UNICODE_VALUE = {
  a: 97,
  z: 97 + 25,
  A: 65,
  Z: 65 + 25,
  0: 48,
  9: 48 + 9,
};
function isPalindrome(s: string): boolean {
  const newS = s.split("").reduce((prev, curr) => {
    const char = curr.charCodeAt(0);

    if (
      (char >= UNICODE_VALUE.a && char <= UNICODE_VALUE.z) ||
      (char >= UNICODE_VALUE.A && char <= UNICODE_VALUE.Z) ||
      (char >= UNICODE_VALUE["0"] && char <= UNICODE_VALUE["9"])
    )
      return prev + curr.toLowerCase();
    return prev;
  }, "");

  let l = 0;
  let r = newS.length - 1;
console.log(newS)
  while (l <= r) {
    if (newS[l] !== newS[r]) return false;

    l++;
    r--;
  }

  return true;
}

console.log(isPalindrome("Marge, let's \"[went].\" I await {news} telegram."));
