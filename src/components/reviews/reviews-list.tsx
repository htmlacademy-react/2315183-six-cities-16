import { AuthorizationStatus } from '../../const.ts';
import { useAppSelector } from '../../hooks/index.ts';
import CommentForm from '../comment-form/comment-form.tsx';
import ReviewItem from './reviews-item.tsx';

type ReviewListProps = {
  onFormSubmit: () => void;
}

function ReviewsList({onFormSubmit}: ReviewListProps): JSX.Element {
  const currentComments = useAppSelector((state) => state.comments);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">
          { currentComments.length }
        </span>
      </h2>
      {currentComments.length ? <ReviewItem comments={currentComments}/> : ''}
      {authorizationStatus === AuthorizationStatus.Auth ? <CommentForm onFormSubmit={onFormSubmit}/> : ''}
    </section>
  );
}

export default ReviewsList;
