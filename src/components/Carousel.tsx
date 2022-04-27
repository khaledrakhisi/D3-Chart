import React from "react";

import classes from "./Carousel.module.scss";

/**
 *
 * This component is soposed to be a caeousel with some nice animarions! but for now
 * it is just a simple presentational component
 *
 */

export type TCarouselSlide = {
  caption: React.ReactNode;
  content: React.ReactNode;
};
export interface ICarouselProps {
  slides: Array<TCarouselSlide>;
}

export const Carousel: React.FunctionComponent<ICarouselProps> = ({
  slides,
}) => {
  return (
    <div className={classes.carousel}>
      <React.Fragment>
        <blockquote>{slides[0].caption}</blockquote>
        <section>{slides[0].content}</section>
      </React.Fragment>
    </div>
  );
};
