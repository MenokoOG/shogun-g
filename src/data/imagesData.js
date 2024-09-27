import shogunGeisha from "../assets/images/a Japanese shogun-geisha- red cherry blossom.webp";

const originalImageDimensions = {
  width: 1008,
  height: 576,
};

export const imagesData = {
  shogunGeisha: {
    src: shogunGeisha,
    alt: "Shogun and Geisha Image",
    clickableAreas: {
      shogun: {
        x1: 700 / originalImageDimensions.width,
        y1: 450 / originalImageDimensions.height,
        x2: 920 / originalImageDimensions.width,
        y2: 650 / originalImageDimensions.height,
        label: "Shogun",
      },
      geisha: {
        x1: 1000 / originalImageDimensions.width,
        y1: 650 / originalImageDimensions.height,
        x2: 1200 / originalImageDimensions.width,
        y2: 750 / originalImageDimensions.height,
        label: "Geisha",
      },
      cherry_blossom: {
        x1: 57 / originalImageDimensions.width,
        y1: 100 / originalImageDimensions.height,
        x2: 357 / originalImageDimensions.width,
        y2: 400 / originalImageDimensions.height,
        label: "Cherry Blossom",
      },
      swordsBelt: {
        x1: 580 / originalImageDimensions.width,
        y1: 600 / originalImageDimensions.height,
        x2: 780 / originalImageDimensions.width,
        y2: 800 / originalImageDimensions.height,
        label: "Swords Belt",
      },
      kabuto: {
        x1: 626 / originalImageDimensions.width,
        y1: 150 / originalImageDimensions.height,
        x2: 940 / originalImageDimensions.width,
        y2: 340 / originalImageDimensions.height,
        label: "Kabuto",
      },
      kanzashi: {
        x1: 1005 / originalImageDimensions.width,
        y1: 250 / originalImageDimensions.height,
        x2: 1200 / originalImageDimensions.width,
        y2: 400 / originalImageDimensions.height,
        label: "Kanzashi",
      },
      oshiroi: {
        x1: 1000 / originalImageDimensions.width,
        y1: 400 / originalImageDimensions.height,
        x2: 1200 / originalImageDimensions.width,
        y2: 600 / originalImageDimensions.height,
        label: "Oshiroi",
      },
      kimono: {
        x1: 1000 / originalImageDimensions.width,
        y1: 750 / originalImageDimensions.height,
        x2: 1200 / originalImageDimensions.width,
        y2: 830 / originalImageDimensions.height,
        label: "Kimono",
      },
    },
  },
};
