import { useState } from 'react';

export default function useModal () {
  const [isShowing, setIsShowing] = useState(null);

  const toggle = () => setIsShowing((show) => !show);

  return {
    isShowing,
    toggle
  };
}
