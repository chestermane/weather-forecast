export const formatPercent = (value: number | null | undefined, decimalPlace = 2) => {
  if (!value) {
    return null;
  }

  return value.toFixed(decimalPlace);
};
