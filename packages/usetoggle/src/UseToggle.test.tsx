import { act, renderHook } from '@testing-library/react-hooks';
import useToggle from './index';

describe('The useToggle hook', () => {
  describe('when the is called with default state', () => {
    it('should return false', () => {
      const { result } = renderHook(() => useToggle());
      expect(result.current.state).toBe(false);
    });

    it('should return true', () => {
      const { result } = renderHook(() => useToggle(true));
      expect(result.current.state).toBe(true);
    });
  });

  describe('when the onToogle is called', () => {
    it('should return false', () => {
      const { result } = renderHook(() => useToggle());
      expect(result.current.state).toBe(false);
      act(() => {
        result.current.onToggle();
      });
      expect(result.current.state).toBe(true);
    });

    it('should return true', () => {
      const { result } = renderHook(() => useToggle(true));
      expect(result.current.state).toBe(true);
      act(() => {
        result.current.onToggle();
      });
      expect(result.current.state).toBe(false);
    });
  });
});
