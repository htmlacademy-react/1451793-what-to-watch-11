import MainScreen from '../../pages/main-screen/main-screen';

type Props = {
  filmsCount: number;
  promoName: string;
  promoGenre: string;
  promoReleaseYear: number;
};

const App = ({ filmsCount, promoName, promoGenre, promoReleaseYear }: Props): JSX.Element => (
  <MainScreen
    filmsCount={filmsCount}
    promoName={promoName}
    promoGenre={promoGenre}
    promoReleaseYear={promoReleaseYear}
  />
);

export default App;
