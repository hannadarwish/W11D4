
const ADD_PRODUCE = 'ADD_PRODUCE';

export const addProduce = (produce) => {
  return {
    type: ADD_PRODUCE,
    produce
  }
};

// const ADD_PRODUCE = 'ADD_PRODUCE';

// export const addProduce = () => {
//   return {
//     type: ADD_PRODUCE,
//     name: produce.name
//   }
// };

export default function cartReducer(state = {}, action) {
  const nextState = {...state};
  
  switch (action.type) {
    case ADD_PRODUCE:
      
      nextState[action.produce.id] = action.produce;
      // {...nextState, produce}
      return nextState; 
    default:
      return state;
  }
} 

