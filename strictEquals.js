export function strictEquals(a, b) {
  if (Object.is(a, b)) {
    if (Object.is(a, NaN)) {
      return false;
    }
  }
}
