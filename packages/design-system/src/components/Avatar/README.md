# Avatar

> Resizable avatar component.

## Usage

To use this component within your React app, import as follows:

```jsx
import { Avatar } from "@sampingan-ui/design-system";

export default function MyApp({ children }) {
  return <Avatar src="path/to/image" />;
}
```

## Props

| Property  | Type             | Required | Default        |
| --------- | ---------------- | -------- | -------------- |
| src       | `string`         | -        | -              |
| alt       | `string`         | yes      | `Sampingan UI` |
| size      | `AvatarSizeType` | -        | `lg`           |
| className | `string`         | -        | `undefined`    |
