import { comments } from '../../mocks/comments.ts';
import { Comment } from '../../types/comments.ts';
import { Offer } from '../../types/offer.ts';
import CommentForm from '../comment-form/comment-form.tsx';
import ReviewItem from './reviews-item.tsx';

type ReviewsListProps = {
  offer: Offer;
}

function ReviewsList({offer}: ReviewsListProps): JSX.Element {
  const currentComments: Comment[] = comments.filter((comment) => comment.id === offer.id);
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">
          { currentComments.length ? '0' : currentComments.length }
        </span>
      </h2>
      {currentComments?.length ? <ReviewItem comments={currentComments}/> : ''}
      <CommentForm />
    </section>
  );
}

export default ReviewsList;
