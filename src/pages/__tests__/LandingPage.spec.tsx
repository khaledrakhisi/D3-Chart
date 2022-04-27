import React from "react";
import { BrowserRouter } from "react-router-dom";
import { cleanup, render, screen } from "@testing-library/react";

import { IUser } from "../../@types/user";
import { UserContext } from "../../context/user-context";
import { liqidUser } from "../../data/mock-user";
import LandingPage from "../LandingPage";

interface IMockLandingPageProps {
  user: IUser;
}
const MockLandingPage: React.FunctionComponent<IMockLandingPageProps> = ({
  user,
}) => {
  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{
          loggedinUser: user!,
          login: jest.fn(),
          logoff: jest.fn(),
          contextMenuState: false,
          openContextMenu: jest.fn(),
        }}
      >
        <LandingPage />
      </UserContext.Provider>
    </BrowserRouter>
  );
};

describe("Landing page appearance", () => {
  beforeEach(() => {
    render(<MockLandingPage user={liqidUser} />);
  });
  afterEach(cleanup);
  it("Should render 'Chart Left Axis' in the page as expected.", async () => {
    expect(screen.getByText(/100€/i)).toBeInTheDocument();
    expect(screen.getByText(/200€/i)).toBeInTheDocument();
    expect(screen.getByText(/300€/i)).toBeInTheDocument();
    expect(screen.getByText(/400€/i)).toBeInTheDocument();
    expect(screen.getByText(/500€/i)).toBeInTheDocument();
    expect(screen.getByText(/600€/i)).toBeInTheDocument();
    expect(screen.getByText(/700€/i)).toBeInTheDocument();
    expect(screen.getByText(/800€/i)).toBeInTheDocument();
    expect(screen.getByText(/900€/i)).toBeInTheDocument();
    expect(screen.getByText(/1000€/i)).toBeInTheDocument();
  });

  it("Should render 'Chart Bottom Axis' in the page as expected.", async () => {
    expect(screen.getByText(/LIQID Cash/i)).toBeInTheDocument();
    expect(screen.getByText(/LIQID Real Estate/i)).toBeInTheDocument();
    expect(screen.getByText(/LIQID Wealth/i)).toBeInTheDocument();
    expect(screen.getByText(/LIQID Private Equity/i)).toBeInTheDocument();
    expect(screen.getByText(/LIQID Venture/i)).toBeInTheDocument();
  });

  it("Should render 'Chart Bars' according user data in the page as expected.", async () => {
    expect(screen.getByText(/LIQID Cash/i)).toBeInTheDocument();
    expect(screen.getByText(/LIQID Real Estate/i)).toBeInTheDocument();
    expect(screen.getByText(/LIQID Wealth/i)).toBeInTheDocument();
    expect(screen.getByText(/LIQID Private Equity/i)).toBeInTheDocument();
    expect(screen.getByText(/LIQID Venture/i)).toBeInTheDocument();
  });

  it("Should not render '0€' in the page as expected", async () => {
    expect(screen.queryByText("0€")).toBeFalsy();
  });
});
