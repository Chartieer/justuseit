# useOnOffLine Hook

## Just use it

calls callback on outside Click and esc key

```javascript
import useOnlOffLine from '@justuseit/useOnlOffLine';

const Component = () => {
  const status = useOnlOffLine();

  return (
    <div>
      <div style={{ color: status ? '#87d068' : '#f50' }}>
        {status ? 'online' : 'offline'}
      </div>
    </div>
  );
};
```
