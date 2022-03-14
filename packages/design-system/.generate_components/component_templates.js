// component.tsx
exports.component = (name) => `import React, { forwardRef } from "react";
import { ${name}Props } from './${name}.types'
import { ${name}Wrapper } from './${name}.styled';

export const ${name} = forwardRef<HTMLElement, ${name}Props>(
  (_props, _ref) => {
    return <${name}Wrapper>${name}</${name}Wrapper>;
  }
);

const componentName = ${name}.displayName || ${name}.name;
${name}.defaultProps = {
  id: "Sampingan--${name}",
  children: undefined,
  className: "Sampingan--${name}--className",
};
${name}.displayName = "${name}" + "(" + componentName + ")";
`;

// styled tsx
exports.styled = (name) => `import { styled } from "stitches.config";

const ${name}Wrapper = styled("div", {});

export { ${name}Wrapper };
`;

exports.test = (name) => `import React from 'react';
import { render } from '@testing-library/react';
import { ${name} } from './${name}';
describe('${name} Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<${name} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
`;

// types.ts
exports.types = (name) => `
import { GeneralProperties } from "sampingan-types";

  export interface ${name}Props extends GeneralProperties {};
  export const default${name}Props: Partial<${name}Props> = {};
`;

// index.ts
exports.barrel = (name) => `import { ${name} } from './${name}';
export default ${name};
`;
