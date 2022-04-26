import { IUser } from "../@types/user";

export const liqidUser: IUser = {
  id: 1000,
  name: "LIQID",
  avatar: "/src/assets/images/Group 1.svg",
  data: [
    {
      product: {
        name: "LIQID Cash",
        total: 920,
        initialInvest: 8,
        growth: 1.0,
      },
      color: "#C9B7C5",
    },
    {
      product: {
        name: "LIQID Real Estate",
        total: 630,
        initialInvest: 100,
        growth: 100,
      },
      color: "#AFDDAF",
    },
    {
      product: {
        name: "LIQID Wealth",
        total: 850,
        initialInvest: 85,
        growth: 45,
      },
      color: "#076283",
    },
    {
      product: {
        name: "LIQID Private Equity",
        total: 220,
        initialInvest: 20,
        growth: 30,
      },
      color: "#79C6C0",
    },
    {
      product: {
        name: "LIQID Venture",
        total: 510,
        initialInvest: 60,
        growth: 60,
      },
      color: "#FFE163",
    },
  ],
};
