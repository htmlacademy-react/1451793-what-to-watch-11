import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type Props = {
  authorizationStatus: typeof AuthorizationStatus[keyof typeof AuthorizationStatus];
  children: JSX.Element;
};

const PrivateRoute = (props: Props): JSX.Element => {
  const { authorizationStatus, children } = props;

  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.SignIn} />
  );
};

export default PrivateRoute;
