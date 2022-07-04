angular.module("marvelApi").filter("status", function () {
  return function (value, param) {
    if (value === 0) {
      return `(${param}) inativo`;
    }
    return `(${param}) ativo`;
  };
});
