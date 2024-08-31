import { AppRoute, Sorts } from '../../const';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getOpenedStatus } from '../../store/sort-process/selectors';
import { closeSorts, openSorts } from '../../store/sort-process/sort-process';
import { changeSort } from '../../store/offer-data/offer-data';
import { getActiveSort } from '../../store/offer-data/selectors';

function SortOptions(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isOpened = useAppSelector(getOpenedStatus);
  const activeSort = useAppSelector(getActiveSort);

  const sortFormClickHandler = () => {
    if (isOpened) {
      dispatch(closeSorts());
    } else {
      dispatch(openSorts());
    }
    navigate(AppRoute.Root);
  };

  const sortFormChangeHandler = (sortType: string) => {
    dispatch(changeSort(sortType));
    navigate(AppRoute.Root);
  };

  return (
    <form className="places__sorting" action="#" method="get"
      onClick={sortFormClickHandler} data-testid="sortOptions"
    >
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : ''}`}>
        {
          Object.values(Sorts)
            .map((sort) => (
              <li
                className={`places__option ${sort === activeSort ? 'places__option--active' : ''}`}
                tabIndex={0}
                key={sort}
                onClick={() => {
                  sortFormChangeHandler(sort);
                }}
              >
                {sort}
              </li>)
            )
        }
      </ul>
    </form>
  );
}
export default SortOptions;
