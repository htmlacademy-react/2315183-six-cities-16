import { AppRoute, Sorts } from '../../const';
import { store } from '../../store';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { changeSort, closeSorts, openSorts } from '../../store/action';

function SortOptions(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isOpened = store.getState().isFiltersOpen;

  const activeSort = store.getState().sort;

  const sortFormClickHandler = () => {
    if (isOpened) {
      dispatch(closeSorts());
    } else {
      dispatch(openSorts());
    }
    navigate(AppRoute.Root);
  };

  const sortFormChangeHandler = (filter: string) => {
    dispatch(changeSort(filter));
    navigate(AppRoute.Root);
  };

  return (
    <form className="places__sorting" action="#" method="get"
      onClick={sortFormClickHandler}
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
            .map((filter) => (
              <li
                className={`places__option ${filter === activeSort ? 'places__option--active' : ''}`}
                tabIndex={0}
                key={filter}
                onClick={() => {
                  sortFormChangeHandler(filter);
                }}
              >
                {filter}
              </li>)
            )
        }
      </ul>
    </form>
  );
}
export default SortOptions;
