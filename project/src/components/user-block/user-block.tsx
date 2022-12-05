import { Link } from 'react-router-dom';

import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { logoutAction } from '../../store/api-actions';

import { getAuthorizationStatus } from '../../store/user-process/selectors';

const UserBlock = (): JSX.Element => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();

  const handleClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return authorizationStatus === AuthorizationStatus.Auth ? (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <Link
          to="/"
          className="user-block__link"
          onClick={(evt) => {
            handleClick(evt);
          }}
        >
          Sign out
        </Link>
      </li>
    </ul>
  ) : (
    <div className="user-block">
      <Link to="/login" className="user-block__link">
        Sign in
      </Link>
    </div>
  );
};

export default UserBlock;
