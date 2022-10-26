const Setting = {
  FilmsCount: 20,
} as const;

const AppRoute = {
  Root: '/',
  SignIn: '/login',
  MyList: '/mylist',
  Film: '/films/:id',
  AddReview: '/films/:id/review',
  Player: '/player/:id',
};

const PromoMockData = {
  PromoName: 'The Grand Budapest Hotel',
  PromoGenre: 'Drama',
  PromoReleaseYear: 2014,
} as const;

export { Setting, AppRoute, PromoMockData };
