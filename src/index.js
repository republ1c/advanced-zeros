module.exports = function getZerosCount(number, base) {
  var c, k, i, j, p, zerosCount;
  zerosCount = number;
  j = base;

  for (i = 2; i <= base; i++) {
    if (j % i == 0) {
      p = 0;
      while (j % i == 0) {
        p++;
        j = Math.floor(j / i);
      }
      k = number;
      c = 0;
      while (Math.floor(k / i) > 0) {
        c += Math.floor(k / i);
        k = Math.floor(k / i);
      }
      zerosCount = Math.min(zerosCount, Math.floor(c / p));
    }
  }

  return zerosCount;
}