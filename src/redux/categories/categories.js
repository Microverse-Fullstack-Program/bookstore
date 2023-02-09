// Actions
const STATUS = 'CATEGORIES/BOOK_STATUS';

const initStateCategories = [];

// Reducer
const ReducerCategories = (state = initStateCategories, action) => {
  switch (action.type) {
    case STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

// Action creator
export const Status = () => ({
  type: STATUS,
});

export default ReducerCategories;
