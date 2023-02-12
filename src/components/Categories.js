import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const [isActive, setIsActive] = useState({ display: 'none' });
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleCheckStatus = () => {
    setIsActive({ display: 'flex' });
    dispatch(checkStatus());
  };

  return (
    <div className="btn-categories">
      <button type="button" onClick={handleCheckStatus}>Check Status</button>
      <p style={isActive}>{status}</p>
    </div>
  );
};

export default Categories;
