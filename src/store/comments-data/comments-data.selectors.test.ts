import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { getComments } from './selectors';

describe('CommentsData selectors', () => {
  const state: Pick<State, NameSpace.Comments> = {
    [NameSpace.Comments]: {
      comments: []
    }
  };

  it('should return city from state', () => {
    const { comments } = state[NameSpace.Comments];
    const result = getComments(state);

    expect(result).toBe(comments);
  });
});
