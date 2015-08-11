import {
  SEARCH_LOAD,
  SEARCH_LOAD_SUCCESS,
  SEARCH_LOAD_FAIL,
  SET_SEARCH_FILTER
} from '../actions/actionTypes';

const initial = {
  location: 'San Francisco',
  checkIn: '2015-10-2',
  checkOut: '2015-10-12',
  occupancy: 2,
  entirePlace: true,
  privateRoom: true,
  sharedRoom: true,
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
        entirePlace: query.entirePlace,
        privateRoom: query.privateRoom,
        sharedRoom: query.sharedRoom
      }
    })
  };
}