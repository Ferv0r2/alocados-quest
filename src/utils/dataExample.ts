export interface Nav {
  name: string;
  path: string;
}

export interface IChain {
  name: string;
  symbol: string;
  balance: number;
  rate: number;
}

export interface ITransaction {
  from: string;
  to: string;
  fromAmount: number;
  toAmount: number;
  date: Date;
}

export const navItems: Nav[] = [
  { name: "환전하기", path: "/" },
  { name: "거래내역", path: "/transaction" },
];

export const chainItems: IChain[] = [
  { name: "Solana", symbol: "SOL", balance: 0, rate: 1 / 100 },
  { name: "Ethereum", symbol: "ETH", balance: 2000, rate: 1 },
  { name: "BnB", symbol: "BNB", balance: 0, rate: 1 / 50 },
];

export const txLogItems: ITransaction[] = [
  {
    from: "SOL",
    to: "ETH",
    fromAmount: 1000,
    toAmount: 10,
    date: new Date(2023, 2, 9, 20, 38),
  },
  {
    from: "ETH",
    to: "SOL",
    fromAmount: 10,
    toAmount: 1000,
    date: new Date(2023, 2, 9, 11, 17),
  },
];
