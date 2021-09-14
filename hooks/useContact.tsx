import { useEffect, useState } from 'react';

const defaultLink = 'mailto:example@example.com';

export function useContact() {
  const [link, setLink] = useState(defaultLink);
  let timer: ReturnType<typeof setTimeout>;

  const clickHandler = () => {
    setLink(() => {
      // hide mail address again
      timer = setTimeout(() => setLink(defaultLink), 2000);

      return 'mailto:website@cstenglein.com';
    });
  };

  useEffect(() => {
    return () => clearTimeout(timer);
    //@ts-ignore
  }, [timer]);

  return { link, clickHandler };
}
