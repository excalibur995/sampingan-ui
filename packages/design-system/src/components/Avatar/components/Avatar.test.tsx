import Avatar from "./Avatar";

import { render } from "@testing-library/react";

describe("Avatar Component", () => {
  test("it should match the snapshot", () => {
    const { asFragment } = render(<Avatar alt={""} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
