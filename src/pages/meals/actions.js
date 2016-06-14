import axios from 'axios';

const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000' : '/';

export const FETCH_MEALS = 'FETCH_MEALS';
export function fetchMeals() {
  const request = axios({
    method: 'GET',
    url: `${ROOT_URL}/api`
  });

  return {
    type: FETCH_MEALS,
    payload: request
  };
}

export const FETCH_MEALS_SUCCESS = 'FETCH_MEALS_SUCCESS';
export function fetchMealsSuccess(meals) {
  return {
    type: FETCH_MEALS_SUCCESS,
    payload: meals
  };
}

export const FETCH_MEALS_ERROR = 'FETCH_MEALS_ERROR';
export function fetchMealsError(meals) {
  return {
    type: FETCH_MEALS_ERROR,
    payload: meals
  };
} 

export const FILTER_MEALS = 'FILTER_MEALS';
export function filterMeals(filter) {  
  return {
    type: FILTER_MEALS,
    filter: filter
  };
} 