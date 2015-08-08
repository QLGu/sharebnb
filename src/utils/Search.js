import Location from '../core/Location';

function handleSubmit(event, q) {
  let path = "/search/";
      path += q.location;
      path += "$occupancy=" + q.occupancy;
      path += "&checkIn=" + q.checkIn;
      path += "&checkOut=" + q.checkOut;

  event.preventDefault();
  console.dir(path);
  Location.navigateTo(path);
}

export default { handleSubmit };