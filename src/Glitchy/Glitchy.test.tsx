import React from "react";
import { render, within } from "@testing-library/react";

import Glitchy from "./Glitchy";
import { TestComponentProps } from "./Glitchy.types";

describe("TestComponent", () => {
  const renderComponent = ({ heading, content }: Partial<TestComponentProps>) =>
    render(<Glitchy transitionText="lol">testtt</Glitchy>);

  it("should render heading text correctly", () => {
    const headingText = "Some test heading";

    const { getByTestId } = renderComponent({ heading: headingText });

    const testComponent = getByTestId("test-component__heading");

    expect(testComponent).toHaveTextContent(headingText);
  });

  it("should render content correctly", () => {
    const { getByTestId } = renderComponent({
      content: <div data-testid="some-test-content">I am test content</div>,
    });

    expect(
      within(getByTestId("test-component__content")).queryByTestId(
        "some-test-content"
      )
    ).toBeInTheDocument();
  });
});
