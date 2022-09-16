function removeUnit(unit) {
  return parseFloat(unit, 10);
}

function em(unit, base = 16) {
  return `${removeUnit(unit) / removeUnit(base)}em`;
}

// exports.em = em;

function rem(unit, base = 16) {
  return `${removeUnit(unit) / removeUnit(base)}rem`;
}

// exports.rem = rem;

// Node.js 모듈 <- CommonJS
module.exports = {
  removeUnit,
  em,
  rem,
};
