import { useRef, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import sortItems from '../redux/settings/sortList.json';
import { setSort, setOpenPopUp } from '../redux/filter/slice';

const sortList = JSON.parse(JSON.stringify(sortItems));

const popupClassListClosed = 'popup-sort__box popup-sort__box_closed';
const popupClassList = 'popup-sort__box';

const Sort = () => {
  const dispatch = useDispatch();
  const openPopUp = useSelector((state) => state.filter.openPopUp);
  const lang = useSelector((state) => state.lang.type);
  const { titleFilter, titleFilterUa } = useSelector(
    (state) => state.filter.sort
  );

  console.log(lang);
  const ref = useRef();

  const onClickCloseHandle = (sort) => {
    dispatch(setSort({ ...sort }, openPopUp));
  };

  const popUpOpenHandle = () => {
    dispatch(setOpenPopUp(!openPopUp));
  };

  const useClickOutside = (ref) => {
    useEffect(() => {
      if (openPopUp) {
        const listener = (event) => {
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          dispatch(setOpenPopUp(false));
        };
        document.addEventListener('click', listener);
        return () => {
          document.removeEventListener('click', listener);
        };
      }
    }, [ref, openPopUp]);
  };

  return (
    <div
      className="goods-page__sort-popup popup-sort"
      onClick={useClickOutside(ref)}
      ref={ref}
    >
      <div className={`${openPopUp ? popupClassList : popupClassListClosed}`}>
        <div className="popup-sort__top">
          {!lang ? (
            <p className="popup-sort__title">Sorting</p>
          ) : (
            <p className="popup-sort__title">Сорування</p>
          )}
          <p className="popup-sort__type" onClick={popUpOpenHandle}>
            {lang ? titleFilterUa : titleFilter}
          </p>
        </div>
        {openPopUp && (
          <ul className="popup-sort__list">
            {openPopUp &&
              sortList.map((sort, ind) => (
                <li
                  className="popup-sort__item"
                  onClick={() => onClickCloseHandle({ ...sort })}
                  key={ind}
                >
                  <a href="#" className="popup-sort__item-link">
                    {lang ? sort.titleFilterUa : sort.titleFilter}
                  </a>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sort;
