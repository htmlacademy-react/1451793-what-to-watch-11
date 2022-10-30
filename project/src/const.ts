const AppRoute = {
  Root: '/',
  SignIn: '/login',
  MyList: '/mylist',
  Film: '/films/:id',
  AddReview: '/films/:id/review',
  Player: '/player/:id',
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

export { AppRoute, AuthorizationStatus, PromoMockData };
