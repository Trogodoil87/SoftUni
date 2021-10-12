function add(a) {
    function b(b) {
        function c(c) {
            return a + b + c;
        }
        return c();

    }
  return  b();
}
console.log(add(1));