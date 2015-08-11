export default function(req) {
  return new Promise((resolve) => {
    resolve({
      message: 'This is the search that came from the server',
      query: req.query,
      time: Date.now(),
      listings: [
        {
          id: 1,
          title: "SO Chinese Food",
          address: "1010 Bryant St San Francisco, CA 94103",
          lat: 37.781668,
          lng: -122.410920,
          price: 160
        },
        {
          id: 2,
          title: "App Academy",
          address: "1061 Market St San Francisco CA 94103",
          lat: 37.772404,
          lng: -122.407149,
          price: 160
        },
      ]
    });
  });
}
