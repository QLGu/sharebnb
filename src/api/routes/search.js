export default function(req) {
  return new Promise((resolve) => {
    resolve({
      message: 'This is the search that came from the server',
      query: req.query,
      time: Date.now()
    });
  });
}
