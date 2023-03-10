export const replaceBalance = (cash: number): string => {
  return String(cash).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const replaceDemical = (num: number, demical: number): number => {
  return Number(num.toFixed(demical));
};

export const rateBalance = (
  from: number,
  to: number,
  amount: number
): number => {
  return (from / to) * amount;
};
