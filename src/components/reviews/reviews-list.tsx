import { comments } from '../../mocks/comments.ts';
import { Offer } from '../../types/offer.ts';
import ReviewItem from './reviews-item.tsx';

type ReviewsListProps = {
  offer: Offer;
}

function ReviewsList({offer}: ReviewsListProps): JSX.Element {
  const currentComments = comments.find((comment) => comment.id === offer.id);
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">
          { currentComments.length === undefined ? '0' : currentComments.length }
        </span>
      </h2>
      <ReviewItem comments={currentComments}/>
    </section>
  );
}

export default ReviewsList;
