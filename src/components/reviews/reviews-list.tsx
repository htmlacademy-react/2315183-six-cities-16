import { Comment } from '../../types/comments.ts';
import ReviewsItem from './reviews-item.tsx';

type ReviewsProps = {
  comments: Comment[];
}

function ReviewsList({comments}: ReviewsProps): JSX.Element {
  return (
    <ul className="reviews__list" data-testid="reviewsList">
      {
        comments.map((comment) =>
          <ReviewsItem comment={comment} key={comment.id + comment.user.name}/>
        )
      }
    </ul>
  );
}

export default ReviewsList;
