import _ from 'lodash'

const INITIAL_STATE = {
  isLoading: true,
  labels: [ 'all', 'chicken', 'beef', 'pork', 'lamb', 'fish', 'asian', 'italian', 'soup', 'soup noodles', 'lunch', 'slow cooker', 'summer', 'winter', 'vegetable' ],
  filterBy: 'all',
  meals: []
}

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {
    case 'FETCH_MEALS':
      return Object.assign({}, state, { isLoading: true });
    case 'FETCH_MEALS_SUCCESS':
      var cachedMeals = _.orderBy(action.payload.data, item => { return item.name.toLowerCase() })
      console.log(_(cachedMeals).groupBy('labels'))
      return Object.assign({}, state, { isLoading: false, cachedMeals: cachedMeals, meals: cachedMeals });
    case 'FILTER_MEALS':
      var meals = action.filter === 'all' ? 
        state.cachedMeals : 
        state.cachedMeals.filter(item => { return _.some(item.labels, label => { return label === action.filter }) })
      meals = _.orderBy(meals, item => { return item.name.toLowerCase() })
      return Object.assign({}, state, { meals: meals, filterBy: action.filter });       
    default:
      return state;
  }
}
