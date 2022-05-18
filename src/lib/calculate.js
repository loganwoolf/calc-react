const PRECISION = 15;

const calculate = {
  "+": (a, b) => {
    const factor = Math.pow(10, PRECISION);
    return (
      ((+a).toFixed(PRECISION) * factor + (+b).toFixed(PRECISION) * factor) /
      factor
    );
  },
  "-": (a, b) => {
    const factor = Math.pow(10, PRECISION);
    return (
      ((+a).toFixed(PRECISION) * factor - (+b).toFixed(PRECISION) * factor) /
      factor
    );
  },
  "*": (a, b) => {
    const factor = Math.pow(10, PRECISION);
    return (
      ((+a).toFixed(PRECISION) *
        factor *
        ((+b).toFixed(PRECISION) * factor)) /
      factor /
      factor
    );
  },
  "/": (a, b) => {
    const factor = Math.pow(10, PRECISION);
    return (
      (((+a).toFixed(PRECISION) * factor) /
        ((+b).toFixed(PRECISION) * factor) /
        factor) *
      factor
    );
  },
};

export default calculate