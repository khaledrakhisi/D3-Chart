import React from "react";

import { Button } from "../components/Button";
import { Carousel, TCarouselSlide } from "../components/Carousel";

import classes from "./HomePage.module.scss";

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

const HomePage: React.FunctionComponent = () => {
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
            <Carousel
              slides={[
                {
                  caption: <h1>Investments</h1>,
                  content: (
                    <article>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris fermentum elit id auctor mollis. Aenean feugiat
                      commodo quam, vulputate viverra lorem iaculis in.
                      Curabitur varius commodo lacus eget vestibulum. Curabitur
                      vitae risus nec justo faucibus vulputate.
                    </article>
                  ),
                },
              ]}
            />
          </div>
          <div className={classes.action2}>
            <Carousel
              slides={[
                {
                  caption: <h1>Stocks</h1>,
                  content: (
                    <article>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris fermentum elit id auctor mollis.
                      <Button>Explore &#8594;</Button>
                    </article>
                  ),
                },
              ]}
            />
          </div>
        </section>
      </section>
      <section className={classes.chart}>
        <Carousel
          slides={[
            {
              caption: <h1>Your products</h1>,
              content: "",
            },
          ]}
        />
      </section>
    </main>
  );
};

export default HomePage;
