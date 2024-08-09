import { useEffect, useState } from 'react';
import { AuthorizationStatus } from '../../const.ts';
import { useAppSelector } from '../../hooks/index.ts';
import CommentForm from '../comment-form/comment-form.tsx';
import ReviewList from './reviews-list.tsx';
import { Comment, CommentToSend } from '../../types/comments.ts';
import { store } from '../../store/index.ts';
import { postCommentAction } from '../../store/api-actions.ts';
import { convertToComment } from '../../utils/list.ts';
import { getComments } from '../../store/comments-data/selectors.ts';
import { getAuthorizationStatus } from '../../store/user-process/selectors.ts';

function Reviews(): JSX.Element {
  const [comments, setComments] = useState<Comment[]>([]);

  const currentComments = useAppSelector(getComments);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    setComments(currentComments);
  }, [currentComments]);

  const addCommentHandler = async (commentData: CommentToSend) => {
    const {payload} = await store.dispatch(postCommentAction(commentData));
    if (payload) {
      const newComment = convertToComment(payload);
      if (newComment) {
        setComments((prevComments) => [...prevComments, newComment]);
      }
    }
  };

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">
          { comments?.length }
        </span>
      </h2>
      {comments?.length ? <ReviewList comments={comments}/> : ''}
      {authorizationStatus === AuthorizationStatus.Auth ? <CommentForm onFormSubmit={addCommentHandler}/> : ''}
    </section>
  );
}

export default Reviews;
