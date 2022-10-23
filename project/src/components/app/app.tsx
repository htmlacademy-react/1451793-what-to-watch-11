import MainScreen from '../../pages/main-screen/main-screen';

type AppProps = {
  filmsCount: number;
};

function App({ filmsCount }: AppProps): JSX.Element {
  return <MainScreen filmsCount={filmsCount} />;
}

export default App;
