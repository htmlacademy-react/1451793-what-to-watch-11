import { store } from '../store';
import { AuthorizationStatus } from '../const';

export type UserProcess = {
  authorizationStatus: typeof AuthorizationStatus[keyof typeof AuthorizationStatus];
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
