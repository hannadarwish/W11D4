import produceData from '../mockData/produce.json';

export default function produceReducer(state = {}, action) {
  const nextState = {...state};

  debugger
  switch (action.type) {
    case POPULATE:
      action.produce.forEach(produce => {
        nextState[produce.id] = produce;
      });
      return nextState;
    default:
      return state;
  }
}

const POPULATE = 'produce/POPULATE';

export const populateProduce = () => {
  return {
    type: POPULATE,
    produce: produceData
  }
};



