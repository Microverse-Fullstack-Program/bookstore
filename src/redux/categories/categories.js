// Actions
const STATUS = 'CATEGORIES/BOOK_STATUS';

// Reducer
const ReducerCategories = (state = [], action) => {
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
