import { createAction } from '@reduxjs/toolkit';

import { AppRoute } from '../const';

import { Comments } from '../types/comments';
import { CommentData } from '../types/comment-data';

const loadFilmComments = createAction<Comments>('loadFilmComments');

const redirectToRoute = createAction<typeof AppRoute[keyof typeof AppRoute]>('redirectToRoute');

const postComment = createAction('postComment', (value: CommentData) => ({ payload: value }));

export { redirectToRoute, loadFilmComments, postComment };
