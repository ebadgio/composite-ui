import { useEffect, useState } from 'react';
import { matchesBelow } from '../util';

export const useWindowMatch = (width: string): boolean => {
  const [matches, setMatches] = useState(matchesBelow(width));

  useEffect(() => {
    const handleResize = () => {
      const match = matchesBelow(width);
      setMatches(match);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return matches;
};
