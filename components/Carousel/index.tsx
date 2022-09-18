import * as React from "react";
import { style } from "typestyle";
import { useWidth } from "../../hooks";
import SliderNavigation from "../SliderNavigation";

interface CarouselProps {
  itemWidth?: number;
  itemRef: React.RefObject<HTMLElement>;
  interval?: number;
  autoScroll?: boolean;
  children: any;
  componentClasses?: string;
  text: string;
}

const wrapper = style({
  display: "flex",
  alignItems: "center",
  overflowX: "scroll",
  height: "100%",
  scrollSnapType: "x mandatory",
  "-webkit-overflow-scrolling": "touch",
  flexFlow: "row nowrap",
  "-ms-overflow-style": "none",
  scrollbarWidth: "none",
  $nest: {
    "& > *": {
      boxSizing: "border-box",
      flexShrink: 0,
    },

    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});

const Carousel: React.FC<CarouselProps> = ({
  children,
  itemRef,
  interval = 3000,
  autoScroll = false,
  text,
  componentClasses,
}) => {
  const [itemWidth] = useWidth(itemRef);
  const [, setScrollInterval] = React.useState<NodeJS.Timeout>();
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const cc = React.Children.count(children);
  const [currentScrollLeft, setCurrentScrollLeft] = React.useState<number>(1);

  const onScrollLeft = () => {
    setCurrentScrollLeft((csl) => csl + 1);
  };

  const onScrollRight = () => {
    setCurrentScrollLeft((csl) => csl - 1);
  };

  React.useEffect(() => {
    if (currentScrollLeft === 0) {
      wrapperRef.current?.scrollTo({ left: 0 });
      setCurrentScrollLeft(cc);
      return;
    }
    if (currentScrollLeft > cc) {
      setCurrentScrollLeft(1);
      return;
    }

    if (itemWidth != undefined) {
      wrapperRef.current?.scrollTo({
        left: itemWidth * currentScrollLeft,
        behavior: "smooth",
      });
    }
  }, [currentScrollLeft, itemWidth]);

  React.useEffect(() => {
    if (autoScroll) {
      const i = setInterval(() => {
        setCurrentScrollLeft((csl) => csl + 1);
      }, interval);
      setScrollInterval(i);
    }

    return () => {
      setScrollInterval((i) => {
        if (i) {
          clearInterval(i);
        }
        return undefined;
      });
    };
  }, [itemWidth, interval, autoScroll]);

  // console.log(Math.floor((currentScrollLeft / cc) * 100), "Percentage");

  return (
    <>
      <div className={`${wrapper} ${componentClasses}`} ref={wrapperRef}>
        {children}
        {children}
      </div>
      <SliderNavigation
        type="carousel"
        text={text}
        progress={Math.floor((currentScrollLeft / cc) * 100)}
        onLeftClick={onScrollRight}
        onRightClick={onScrollLeft}
      />
    </>
  );
};

export default Carousel;
