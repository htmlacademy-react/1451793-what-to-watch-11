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

export { AppRoute, AuthorizationStatus, PromoMockData, TextRating, DefaultFormBg };
