import MainPage from '../../pages/main-page/main-page.tsx';

type AppProps = {
  countOfCards: number;
}

function App({countOfCards}: AppProps): JSX.Element {
  return (
    <MainPage countOfCards={countOfCards} />
  );
}

export default App;
