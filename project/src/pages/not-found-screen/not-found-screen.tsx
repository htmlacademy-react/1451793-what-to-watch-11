import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import Logo from '../../components/logo/logo';

const NotFoundScreen = (): JSX.Element => (
  <section style={{ textAlign: 'center' }}>
    <Helmet>
      <title>Что посмотреть. Страница не найдена</title>
    </Helmet>

    <Logo isLogoLight />
    <h1>404. Page not found</h1>
    <Link to="/">Вернуться на главную</Link>
  </section>
);

export default NotFoundScreen;
