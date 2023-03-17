import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilterParam, changeSortParam } from '../../features/filter/filterSlice';

const SideBar = () => {

  const dispatch = useDispatch();
  const { filterParam } = useSelector((state) => state.filter)

  const sortHandler = (e) => {
    const sort = e.target.value;
    dispatch(changeSortParam(sort))

  }
  const filterHandler = (e) => {
    const filter = e.target.value;
    dispatch(changeFilterParam(filter))

  }
  return (
    <aside>
      <div className="sidebar-items">
        <div className="sidebar-content">
          <h4>Sort</h4>
          <select
            name="sort"
            id="lws-sort"
            className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
            onChange={sortHandler}
          >
            <option value="">Default</option>
            <option value="newest">Newest</option>
            <option value="most_liked">Most Liked</option>
          </select>
        </div>
        <div className="sidebar-content">
          <h4>Filter</h4>
          <div className="radio-group">

            <div>
              <input
                type="radio"
                name="filter"
                id="lws-all"
                className="radio" 
                value="all"
                checked={filterParam === 'all'}
                onChange={filterHandler}
                />
              <label htmlFor="lws-all">All</label>
            </div>
            <div>
              <input
                type="radio"
                name="filter"
                id="lws-saved"
                className="radio"
                value="saved"
                checked={filterParam === "saved"}
                onChange={filterHandler}
              />

              <label htmlFor="lws-saved">Saved</label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;