import { Link } from 'react-router-dom';

import Logo from '../../components/logo/logo';

function NotFoundScreen(): JSX.Element {
  return (
    <section style={{ textAlign: 'center' }}>
      <Logo isLogoLight />
      <h1>404. Page not found</h1>
      <Link to="/">Вернуться на главную</Link>
    </section>
  );
}

export default NotFoundScreen;
