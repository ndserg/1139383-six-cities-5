const labelTypes = {
  default: `none`,
  premium: `Premium`,
  new: `New`
};

const defaulValues = {
  maxRating: 5,
};

const OWNERS = [
  {
    firstName: `Angelina`,
    avatar: `img/avatar-angelina.jpg`,
    isSuper: false,
  }, {
    firstName: `Foma`,
    avatar: `img/avatar-max.jpg`,
    isSuper: true,
  }, {
    firstName: `Elena`,
    avatar: `img/avatar-angelina.jpg`,
    isSuper: false,
  }, {
    firstName: `Ivan`,
    avatar: `img/avatar-max.jpg`,
    isSuper: true,
  }
];

const CONSUMER_ITEMS = {
  wifi: `Wi-Fi`,
  washingMachine: `Washing machine`,
  towels: `Towels`,
  heating: `Heating`,
  coffeeMachine: `Coffee machine`,
  babySeat: `Baby seat`,
  kitchen: `Kitchen`,
  dishwasher: `Dishwasher`,
  cabelTV: `Cabel TV`,
  fridge: `Fridge`,
};

const IMAGES = [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`];

export const OFFERS = [
  {
    id: 1,
    owner: OWNERS[0],
    consumerItems: [CONSUMER_ITEMS.wifi, CONSUMER_ITEMS.towels, CONSUMER_ITEMS.kitchen],
    bedrooms: 3,
    maxGuests: 5,
    label: labelTypes.premium,
    inBookmarks: false,
    maxRating: defaulValues.maxRating,
    rating: 3.8,
    images: IMAGES,
    price: 120,
    priceText: `night`,
    name: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  }, {
    id: 2,
    owner: OWNERS[1],
    consumerItems: [CONSUMER_ITEMS.dishwasher, CONSUMER_ITEMS.heating, CONSUMER_ITEMS.fridge, CONSUMER_ITEMS.coffeeMachine, CONSUMER_ITEMS.babySeat],
    bedrooms: 2,
    maxGuests: 1,
    label: labelTypes.default,
    inBookmarks: true,
    maxRating: defaulValues.maxRating,
    rating: 3.4,
    images: IMAGES,
    price: 80,
    priceText: `night`,
    name: `Wood and stone place`,
    type: `Private room`,
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
  }, {
    id: 3,
    owner: OWNERS[2],
    consumerItems: [CONSUMER_ITEMS.cabelTV, CONSUMER_ITEMS.wifi, CONSUMER_ITEMS.fridge, CONSUMER_ITEMS.coffeeMachine, CONSUMER_ITEMS.towels],
    bedrooms: 4,
    maxGuests: 2,
    label: labelTypes.new,
    inBookmarks: false,
    maxRating: defaulValues.maxRating,
    rating: 4.9,
    images: IMAGES,
    price: 132,
    priceText: `night`,
    name: `Canal View Prinsengracht`,
    type: `Apartment`,
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
  }, {
    id: 4,
    owner: OWNERS[3],
    consumerItems: [CONSUMER_ITEMS.heating, CONSUMER_ITEMS.kitchen, CONSUMER_ITEMS.cabelTV, CONSUMER_ITEMS.wifi, CONSUMER_ITEMS.fridge, CONSUMER_ITEMS.coffeeMachine, CONSUMER_ITEMS.towels],
    bedrooms: 1,
    maxGuests: 4,
    label: labelTypes.default,
    inBookmarks: false,
    maxRating: defaulValues.maxRating,
    rating: 2.4,
    images: IMAGES,
    price: 180,
    priceText: `night`,
    name: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
  }
];
