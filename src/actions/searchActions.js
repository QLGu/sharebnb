import {
  SEARCH_LOAD,
  SEARCH_LOAD_SUCCESS,
  SEARCH_LOAD_FAIL
} from '../actions/actionTypes';

const initial = {
  location: 'San Francisco',
  checkIn: '2015-10-2',
  checkOut: '2015-10-12',
  occupancy: 2
}

export function searchListings(query = initial) {
  return {
    types: [SEARCH_LOAD, SEARCH_LOAD_SUCCESS, SEARCH_LOAD_FAIL],
    promise: (client) => client.get('/search', {
      params: {
        location: query.location,
        checkIn: query.checkIn,
        checkOut: query.checkOut,
        occupancy: query.occupancy,
      }
    })
  };
}