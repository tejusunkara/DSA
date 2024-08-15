var vacuumCleaner = function(route) {
  let count = 0;
  for (let i = 0; i < route.length; i++) {
      if (route.charAt(i) === 'L' || route.charAt(i) === 'D') {
          count -= 1;
      } else {
          count += 1;
      }
  }
  return count === 0;
}

/*
Time: O(N)
Space: O(1)
*/