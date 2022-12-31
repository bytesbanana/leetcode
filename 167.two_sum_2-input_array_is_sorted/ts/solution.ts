function twoSum(numbers: number[], target: number): number[] {
  const map = new Map();
  const N = numbers.length;
  for (let i = 0; i < N; i++) {
    if (map.has(target - numbers[i])) {
      return [map.get(target - numbers[i]) + 1, i + 1];
    }
    if (!map.has(numbers[i])) map.set(numbers[i], i);
  }
  console.log(map);

  return [];
}

function runTestCases() {
  const inputs = [
    { numbers: [2, 7, 11, 15], target: 9 },
    { numbers: [2, 3, 4], target: 6 },
    { numbers: [-1, 0], target: -1 },
  ];
  const expected = [
    [1, 2],
    [1, 3],
    [1, 2],
  ];

  for (let i = 0; i < inputs.length; i++) {
    console.log("################# CASE-" + (i + 1) + " ##################");
    const { numbers, target } = inputs[i];
    console.log("LOGGING:");
    const actualResult = twoSum(numbers, target);
    const result = JSON.stringify(expected[i]) === JSON.stringify(actualResult);
    console.log("_____________________________________");
    console.log(`Input: [${numbers}] ${target} `);
    console.log(`Expected: [${expected[i]}]`);

    console.log(
      result ? "\x1b[32m%s\x1b[0m" : "\x1b[31m%s\x1b[0m",
      `Actual: [${actualResult}] - ${result ? "PASS!" : "FAILED"}`
    );
    console.log();
  }
}

runTestCases();
