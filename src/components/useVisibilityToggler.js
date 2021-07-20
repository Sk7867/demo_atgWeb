import { useState } from 'react';

const useVisibilityToggler = (component, visiblity = false) => {
  const [visible, setVisibility] = useState(() => visiblity);
  return [visible ? component : null, () => setVisibility((v) => !v)];
};

export default useVisibilityToggler;
