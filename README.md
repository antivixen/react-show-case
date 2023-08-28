# React Show Case

JSX component to deal with conditional rendering in React Js.
Inspired by [SolidJS version](https://www.solidjs.com/docs/latest#show)

## Usage

```ts
import { Show, Fallback } from "@antivixen/react-show-case";

export const Example = () => {
  const [isAvailable, setIsAvailable] = useState(false);
  return (
    <Show when={isAvailable}>
      <h1>Some content to show</h1>
      <Fallback>
        <h1>Some content to show if when statement is false</h1>
      </Fallback>
    </Show>
  );
};
```

It's worth noting that neither the Show nor the Feedback functions are compatible with primitive values. To make use of them, you can either employ a standard ternary operator or investigate [this library](https://www.npmjs.com/package/@antivixen/andor)
