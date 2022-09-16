import * as React from "react";

interface SliderNavigationProps {
  /**
   * Text to be shown.
   */
  text: string;
  /**
   * Slider progress in %age.
   */
  progress: number;
  onLeftClick: () => void;
  onRightClick: () => void;
}

const SliderNavigation: React.FC<SliderNavigationProps> = ({
  text,
  progress,
  onLeftClick,
  onRightClick,
}) => {
  return (
    <>
      <div className="bottom-navigator">
        <div className="col-10">
          <p>{text}</p>
          <div className="underline">
            <div
              className={`underline__progress underline__progress-${progress}`}
            />
          </div>
        </div>
        <div className="col-2 arrows">
          <span
            onClick={onLeftClick}
            className="arrows__left lni lni-arrow-left"
          />
          <span
            onClick={onRightClick}
            className="arrows__right lni lni-arrow-right"
          />
        </div>
      </div>
    </>
  );
};

export default SliderNavigation;
