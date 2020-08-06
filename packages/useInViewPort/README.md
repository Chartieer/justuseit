# useOutsideClick Hook

## Just use it how

calls callback on outside Click and esc key

```javascript
import useOutsideClick from '@justuseit/useOutsideClick';

const Component = () => {
  const ref = useOutsideClick(() => {
    //.. implement your code
  });

  return (
    <div ref={ref}>
      <h1>click Outside</h1>
    </div>
  );
};
```
