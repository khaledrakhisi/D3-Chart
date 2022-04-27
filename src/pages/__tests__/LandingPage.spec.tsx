import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";

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
          login: () => {},
          logoff: () => {},
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

  xit("should render 'Showing 10 of 100 results' in the page", async () => {
    await waitFor(() => {
      const element = screen.getByText(/showing 10 of 1000 results/i);

      expect(element).toBeInTheDocument();
    });
  });

  //   xit("should display car details when clicking the generate button", async () => {
  //     const mockResponse = {
  //       data: response,
  //       status: 200,
  //       statusText: "ok",
  //       headers: {},
  //       config: {},
  //     };
  //     mockedAxios.get.mockResolvedValue(mockResponse);
  //     const { getAllByText, queryByText } = render(<MockSearchPage />);

  //     expect(queryByText(/audi s6/i)).not.toBeInTheDocument();

  //     fireEvent.click(getAllByText(/filter/i)[0]);

  //     expect(queryByText(/Loading.../)).toBeInTheDocument();
  //     await waitFor(() => {
  //       const list = screen.getByRole("list");
  //       const { getAllByRole } = within(list);
  //       const items = getAllByRole("listitem");
  //       expect(items.length).toBeGreaterThan(0);
  //     });
  //   });
});
