import * as React from "react";

export default function useMounted() {
  const [isMounted, setMounted] = React.useState(true);

  React.useEffect(() => {
    return () => {
      setMounted(false);
    };
  }, []);

  return isMounted;
}
