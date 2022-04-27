import { BrowserRouter } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";

import App from "../App";

const MockApp = () => {
  window.scrollTo = jest.fn();
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

const renderComponent = () => render(<MockApp />);
test("renders without crashing", async () => {
  const { getByText } = renderComponent();
  await waitFor(() => getByText(/Hallo,/i));
  await waitFor(() => getByText(/LIQID!/i));
});

afterEach(() => {
  global.innerWidth = 1024;
  global.dispatchEvent(new Event("resize"));
});
test("the App responsivness as expected", async () => {
  // Change the viewport to 500px.
  global.innerWidth = 500;
  // Trigger the window resize event.
  global.dispatchEvent(new Event("resize"));
  const { getByTestId } = renderComponent();
  await waitFor(() => getByTestId("menu"));
  expect(getByTestId("menu")).toBeInTheDocument();
});
