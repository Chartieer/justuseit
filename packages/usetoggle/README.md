# useToggle Hook

Just toggles a state from false to true, defaults to false.

```javascript
import useToggle from '@justuseit/useToggle';

const Component = () => {
  const { state, onToggle } = useToggle();

  return <div>My State is {JSON.stringify(state)}</div>;
};

const Component = () => {
  const { state, onToggle } = useToggle(true);

  return <div>My State is {JSON.stringify(state)}</div>;
};
```
