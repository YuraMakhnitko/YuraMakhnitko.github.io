import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCategory } from '../../redux/filter/slice';

import { useSelector } from 'react-redux';

import catgoriesList from '../../redux/settings/categories.json';

const categories = JSON.parse(JSON.stringify(catgoriesList));

const disabledStyle = 'sidebar-left__link_disabled';

const CategoriesSideBar = () => {
  const lang = useSelector((state) => state.lang.type);

  const dispatch = useDispatch();

  return (
    <div className="sidebar-left__menu">
      <ul className="sidebar-left__list">
        {categories.map((category) => (
          <li className="sidebar-left__list-item" key={category.categoryId}>
            {category.isSoon && (
              <div className="info">
                <p className="info__text">{lang ? 'Скоро' : 'Soon'}</p>
              </div>
            )}

            <Link
              to={category.isSoon ? '' : '/goods'}
              className={`sidebar-left__link ${
                category.isSoon ? disabledStyle : ''
              }`}
              onClick={() => dispatch(setCategory({ ...category }))}
            >
              <img src={category.imgUrl} alt="pizza" />
              {lang ? category.titleUa : category.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CategoriesSideBar;
