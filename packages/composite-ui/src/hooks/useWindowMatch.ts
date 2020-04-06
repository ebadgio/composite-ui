import { useEffect, useState } from 'react';
import { matchesBelow } from '../util';

export const useWindowMatch = (
  width: string,
  onChange?: (match: boolean) => void
): boolean => {
  const [matches, setMatches] = useState(matchesBelow(width));

  useEffect(() => {
    const handleResize = () => {
      console.log('resize');
      const match = matchesBelow(width);
      if (match != matches) {
        setMatches(match);
        onChange && onChange(match);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [matches]);

  return matches;
};
