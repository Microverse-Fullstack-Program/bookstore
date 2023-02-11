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
export const checkStatus = (payload) => ({
  type: STATUS,
  payload,
});

export default ReducerCategories;
