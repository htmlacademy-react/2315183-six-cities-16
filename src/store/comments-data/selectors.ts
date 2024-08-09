import { NameSpace } from '../../const';
import { Comment } from '../../types/comments';
import { State } from '../../types/state';

export const getComments = (state: State): Comment[] =>
  state[NameSpace.Comments].comments;
