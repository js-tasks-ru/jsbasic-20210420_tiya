function factorial(n) {
  // ваш код...
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i
  } 
  return result
}