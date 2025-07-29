/**
 * @param {string} s
 * @return {number}
 */

/* https://leetcode.com/problems/roman-to-integer/description/ */
const romanNumbers = {
  I: {
    name: "I",
    value: 1,
  },
  V: {
    name: "V",
    value: 5,
  },
  X: {
    name: "X",
    value: 10,
  },
  L: {
    name: "L",
    value: 50,
  },
  C: {
    name: "C",
    value: 100,
  },
  D: {
    name: "D",
    value: 500,
  },
  M: {
    name: "M",
    value: 1000,
  },
};
var romanToInt = function (s) {
  const numbersArray = s.split("");
  let result = 0;
  numbersArray.map((number, index) => {
    const lastNumber = numbersArray[index - 1];
    const nextNumber = numbersArray[index + 1];
    if (number === romanNumbers.I.name) {
      if (nextNumber !== romanNumbers.V.name && nextNumber !== romanNumbers.X.name) {
        return (result += romanNumbers.I.value);
      }
    }
    if (number === romanNumbers.V.name) {
      if (lastNumber === romanNumbers.I.name) {
        return (result += romanNumbers.V.value - romanNumbers.I.value);
      } else {
        return (result += romanNumbers.V.value);
      }
    }
    if (number === romanNumbers.X.name) {
      if (nextNumber !== romanNumbers.L.name && nextNumber !== romanNumbers.C.name) {
        if (lastNumber === romanNumbers.I.name) {
          return (result += romanNumbers.X.value - romanNumbers.I.value);
        } else {
          return (result += romanNumbers.X.value);
        }
      }
    }
    if (number === romanNumbers.L.name) {
      if (lastNumber === romanNumbers.X.name) {
        return (result += romanNumbers.L.value - romanNumbers.X.value);
      } else {
        return (result += romanNumbers.L.value);
      }
    }
    if (number === romanNumbers.C.name) {
      if (
        nextNumber !== romanNumbers.D.name &&
        nextNumber !== romanNumbers.M.name
      ) {
        if (lastNumber === romanNumbers.X.name) {
          return (result += romanNumbers.C.value - romanNumbers.X.value);
        } else {
          return (result += romanNumbers.C.value);
        }
      }
    }
    if (number === romanNumbers.D.name) {
      if (lastNumber === romanNumbers.C.name) {
        return (result += romanNumbers.D.value - romanNumbers.C.value);
      } else {
        return (result += romanNumbers.D.value);
      }
    }
    if (number === romanNumbers.M.name) {
      if (lastNumber === romanNumbers.C.name) {
        return (result += romanNumbers.M.value - romanNumbers.C.value);
      } else {
        return (result += romanNumbers.M.value);
      }
    }
  });

  return result;
};
