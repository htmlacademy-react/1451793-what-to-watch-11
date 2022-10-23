import MainScreen from '../../pages/main-screen/main-screen';

type AppProps = {
  filmsCount: number;
  promoName: string;
  promoGenre: string;
  promoReleaseYear: number;
};

function App({ filmsCount, promoName, promoGenre, promoReleaseYear }: AppProps): JSX.Element {
  return (
    <MainScreen
      filmsCount={filmsCount}
      promoName={promoName}
      promoGenre={promoGenre}
      promoReleaseYear={promoReleaseYear}
    />
  );
}

export default App;
