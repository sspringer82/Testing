function logName() {
  $.get('/user').then(function (data) {
    console.log(data);
  }, function (err) {
    console.error(err);
  });
}