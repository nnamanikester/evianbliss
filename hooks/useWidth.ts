import * as React from "react";

export const useWidth = (elementRef: React.RefObject<HTMLElement>) => {
  const [width, setWidth] = React.useState<number>(0);

  const updateWidth = React.useCallback(() => {
    if (elementRef && elementRef.current) {
      const { width } = elementRef.current.getBoundingClientRect();
      setWidth(width);
    }
  }, [elementRef]);

  const firstUpdateWidth = React.useCallback(() => {
    if (elementRef && elementRef.current) {
      let { width } = elementRef.current.getBoundingClientRect();
      width =
        width -
        parseInt(
          window
            .getComputedStyle(elementRef.current)
            .getPropertyValue("border-left-width")
        ) -
        parseInt(
          window
            .getComputedStyle(elementRef.current)
            .getPropertyValue("border-right-width")
        );

      width =
        width -
        parseInt(
          window
            .getComputedStyle(elementRef.current)
            .getPropertyValue("padding-left")
        ) -
        parseInt(
          window
            .getComputedStyle(elementRef.current)
            .getPropertyValue("padding-right")
        );

      setWidth(width);
    }
  }, [elementRef]);

  React.useEffect(() => {
    firstUpdateWidth();
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, [updateWidth]);

  return [width];
};
