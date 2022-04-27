import { Product } from "../@types/product";
import { IUser } from "../@types/user";

export const liqidUser: IUser = {
  id: 1000,
  name: "LIQID",
  avatar: "/src/assets/images/Group 1.svg",
  data: [
    {
      product: new Product("LIQID Cash", 100, 50),
      color: "#C9B7C5",
    },
    {
      product: new Product("LIQID Real Estate", 630, 100),
      color: "#AFDDAF",
    },
    {
      product: new Product("LIQID Wealth", 850, 85),
      color: "#076283",
    },
    {
      product: new Product("LIQID Private Equity", 220, 20),
      color: "#79C6C0",
    },
    {
      product: new Product("LIQID Venture", 510, 60),
      color: "#FFE163",
    },
  ],
};
