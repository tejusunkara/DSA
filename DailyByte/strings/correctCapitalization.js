var correctCapitalization = function(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
      if (s.charAt(i) === s.charAt(i).toUpperCase()) {
          count += 1;
      }
  }
  return count === 0
  || (count === 1 && s.charAt(0) === s.charAt(0).toUpperCase())
  || count === s.length;
}

/*
Time: O(N)
Space: O(1)
*/