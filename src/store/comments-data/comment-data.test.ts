import { makeFakeComments } from '../../utils/mocks';
import { fetchCommentsAction } from '../api-actions';
import { commentsData } from './comments-data';

describe('CommentsData Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      comments: makeFakeComments()
    };

    const result = commentsData.reducer(expectedState.comments, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      comments: []
    };

    const result = commentsData.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "comments" to array with comments with "fetchCommentsAction.fulfilled"', () => {
    const mockComments = makeFakeComments();
    const expectedState = {
      comments: [mockComments]
    };

    const result = commentsData.reducer(undefined, fetchCommentsAction.fulfilled(mockComments.comments, '', ''));

    expect(result).toEqual(expectedState);
  });
});
