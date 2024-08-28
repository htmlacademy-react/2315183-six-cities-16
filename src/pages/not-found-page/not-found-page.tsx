import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo.tsx';

function NotFoundPage(): JSX.Element {
  return (
    <section className="game" data-testid="not-found-page">
      <Helmet>
        <title>404 Not Found</title>
      </Helmet>
      <header className="game__header">
        <Logo />
      </header>

      <section className="game__screen">
        <h1>404. Page not found</h1>
        <Link to="/">Turn back</Link>
      </section>
    </section>
  );
}

export default NotFoundPage;
