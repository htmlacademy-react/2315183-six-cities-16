import { store } from '../../store/index.ts';
import CommentForm from '../comment-form/comment-form.tsx';
import ReviewItem from './reviews-item.tsx';


function ReviewsList(): JSX.Element {
  const currentComments = store.getState().comments;
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">
          { currentComments.length }
        </span>
      </h2>
      {currentComments.length ? <ReviewItem comments={currentComments}/> : ''}
      <CommentForm />
    </section>
  );
}

export default ReviewsList;
