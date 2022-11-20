const AppRoute = {
  Root: '/',
  SignIn: '/login',
  MyList: '/mylist',
  Film: '/films/:id',
  Films: '/films',
  AddReview: '/films/:id/review',
  Player: '/player/:id',
} as const;

const TextRating = {
  Bad: 'Bad',
  Normal: 'Normal',
  Good: 'Good',
  VeryGood: 'Very Good',
  Awesome: 'Awesome',
} as const;

const Tab = {
  Overview: 'Overview',
  Details: 'Details',
  Reviews: 'Reviews',
} as const;

const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
} as const;

const PromoMockData = {
  PromoName: 'The Grand Budapest Hotel',
  PromoGenre: 'Drama',
  PromoReleaseYear: 2014,
} as const;

const DefaultFormBg = {
  Color: 'white',
  Filter: 'contrast(120%)',
} as const;

const VIDEO_TIMEOUT = 1000;

const Genre = {
  AllGenres: 'All genres',
  Action: 'Action',
  Adventure: 'Adventure',
  Comedie: 'Comedie',
  Crime: 'Crime',
  Documentary: 'Documentary',
  Drama: 'Drama',
  Fantasy: 'Fantasy',
  Horror: 'Horror',
  KidsAndFamily: 'Kids & Family',
  Romance: 'Romance',
  SciFi: 'Sci-Fi',
  Thriller: 'Thriller',
} as const;

export {
  AppRoute,
  AuthorizationStatus,
  PromoMockData,
  TextRating,
  DefaultFormBg,
  VIDEO_TIMEOUT,
  Tab,
  Genre,
};
