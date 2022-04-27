import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { liqidUser } from "../../data/mock-user";
import { Chart } from "../chart-bar/Chart";

/**
 *
 * BARS TESTS
 *
 */
describe("Chart component BARS tests", () => {
  it("Should render 'Bars' count corresponds to data passed as expected", () => {
    const { getAllByTestId } = render(<Chart data={liqidUser.data} />);
    expect(getAllByTestId(/bar/i).length).toEqual(liqidUser.data.length);
  });

  it("Should display all 5 'Total Values' above each bar corresponds to data passed as expected", () => {
    const { getByText } = render(<Chart data={liqidUser.data} />);
    expect(
      getByText(`${liqidUser.data[0].product.total}€`)
    ).toBeInTheDocument();
    expect(
      getByText(`${liqidUser.data[1].product.total}€`)
    ).toBeInTheDocument();
    expect(
      getByText(`${liqidUser.data[2].product.total}€`)
    ).toBeInTheDocument();
    expect(
      getByText(`${liqidUser.data[3].product.total}€`)
    ).toBeInTheDocument();
    expect(
      getByText(`${liqidUser.data[4].product.total}€`)
    ).toBeInTheDocument();
  });
});

/**
 *
 * TOOLTIP TESTS
 *
 */
describe("Chart component TOOLTIP tests", () => {
  it("Should display a tooltip on mouse hover/click as exptected", async () => {
    const chart = render(<Chart data={liqidUser.data} />);
    const bars = chart.getAllByTestId(/bar/i);

    fireEvent.mouseMove(bars[2]);

    await waitFor(() => chart.getByTestId("tooltip"));
    expect(await screen.findByTestId("tooltip")).toBeInTheDocument();
  });
  test("if the displayed tooltip renders information as exptected", async () => {
    const chart = render(<Chart data={liqidUser.data} />);
    const bars = chart.getAllByTestId(/bar/i);

    fireEvent.mouseMove(bars[2]);

    await waitFor(() => chart.findByText(/total/i));
    expect(await screen.findByText(/initial invest./i)).toBeInTheDocument();
    expect(await screen.findByText(/growth/i)).toBeInTheDocument();
  });
});
