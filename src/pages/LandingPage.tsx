import React, { useContext, useRef } from "react";

import { TUserContext } from "../@types/user";
import { ArrowIcon, EArrowDirection } from "../components/ArrowIcon";
import { Button } from "../components/Button";
import { Carousel, TCarouselSlide } from "../components/Carousel";
import { Chart } from "../components/chart-bar/Chart";
import { UserContext } from "../context/user-context";

import classes from "./LandingPage.module.scss";

const slides: Array<TCarouselSlide> = [
  {
    caption: <h1>Welcome to your personal area.</h1>,
    content: (
      <article>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        fermentum elit id auctor mollis. Aenean feugiat commodo quam, vulputate
        viverra lorem iaculis in. Curabitur varius commodo lacus eget
        vestibulum. Curabitur vitae risus nec justo faucibus vulputate. Nunc
        blandit nisi lobortis, gravida elit non, tincidunt dolor. Mauris
        ullamcorper suscipit risus, eget dictum dui consequat sed. Nam quis orci
        id dui consectetur elementum. Nulla et lacus massa.
      </article>
    ),
  },
  {
    caption: "title 2",
    content: "content 2",
  },
];

const LandingPage = () => {
  const { loggedinUser } = useContext(UserContext) as TUserContext;
  const chartRef = useRef<HTMLDivElement | null>(null);

  const arrowClickHandle = (dir: EArrowDirection) => {
    chartRef.current!.scrollLeft += 350 * dir;
  };

  return (
    <main className={classes.container}>
      <section className={classes.top}>
        <aside className={classes.info}>
          <div className={classes.carousel}>
            <Carousel slides={slides} />
          </div>
        </aside>
        <section className={classes.actions}>
          <div className={classes.action1}>
            <h2>Investments</h2>
            <article>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              fermentum elit id auctor mollis. Aenean feugiat commodo quam,
              vulputate viverra lorem iaculis in. Curabitur varius commodo lacus
              eget vestibulum. Curabitur vitae risus nec justo faucibus
              vulputate.
            </article>
          </div>
          <div className={classes.action2}>
            <Carousel
              slides={[
                {
                  caption: <h2>Stocks</h2>,
                  content: (
                    <article>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris fermentum elit id auctor mollis.
                      </p>
                      <Button>Explore &#8594;</Button>
                    </article>
                  ),
                },
              ]}
            />
          </div>
        </section>
      </section>
      <section className={classes.bottom}>
        <div className={classes.charttile}>
          <h1>Your products</h1>
        </div>
        <div className={classes.chartitself} ref={chartRef}>
          <Chart data={loggedinUser.data} axisYMax={1000} />
        </div>
        <ArrowIcon onClick={arrowClickHandle} />
      </section>
    </main>
  );
};

export default LandingPage;
