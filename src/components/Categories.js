import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleCheckStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="btn-categories">
      <button type="button" onClick={handleCheckStatus}>Check Status</button>
      <p>{status}</p>
    </div>
  );
};

export default Categories;
