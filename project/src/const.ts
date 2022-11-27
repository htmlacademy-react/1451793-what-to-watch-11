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

const DefaultFormBg = {
  Color: 'white',
  Filter: 'contrast(120%)',
} as const;

const VIDEO_TIMEOUT = 1000;

const Genre = {
  AllGenres: 'All genres',
  Action: 'Action',
  Adventure: 'Adventure',
  Comedie: 'Comedy',
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

const FILMS_COUNT = 8;

const URL_API = 'https://11.react.pages.academy/wtw';

const APIRoute = {
  Films: '/films',
  Promo: '/promo',
  Login: '/login',
  Logout: '/logout',
  Comments: '/comments',
} as const;

const REQUEST_TIMEOUT = 5000;

export {
  FILMS_COUNT,
  AppRoute,
  AuthorizationStatus,
  TextRating,
  DefaultFormBg,
  VIDEO_TIMEOUT,
  Tab,
  Genre,
  URL_API,
  REQUEST_TIMEOUT,
  APIRoute,
};
