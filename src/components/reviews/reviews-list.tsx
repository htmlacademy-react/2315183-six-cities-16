import { useEffect, useState } from 'react';
import { AuthorizationStatus } from '../../const.ts';
import { useAppSelector } from '../../hooks/index.ts';
import CommentForm from '../comment-form/comment-form.tsx';
import ReviewItem from './reviews-item.tsx';
import { Comment } from '../../types/comments.ts';
import { store } from '../../store/index.ts';
import { postCommentAction } from '../../store/api-actions.ts';

function ReviewsList(): JSX.Element {
  const [comments, setComments] = useState<Comment[]>([]);

  const currentComments = useAppSelector((state) => state.comments);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const newComment = useAppSelector((state) => state.newComment);

  useEffect(() => {
    setComments(currentComments);
  }, []);

  const addCommentHandler = (commentData: Comment) => {
    store.dispatch(postCommentAction(commentData));
    if (newComment) {
      setComments((prevComments) => [...prevComments, newComment]);
    }
  };

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">
          { comments.length }
        </span>
      </h2>
      {comments.length ? <ReviewItem comments={comments}/> : ''}
      {authorizationStatus === AuthorizationStatus.Auth ? <CommentForm onFormSubmit={addCommentHandler}/> : ''}
    </section>
  );
}

export default ReviewsList;
