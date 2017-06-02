function logName(cb) {
  $.ajax({
    url: '/user'
  }).then(function (data) {
    logger.log(data, 'info');
    cb();
  }, function (err) {
    logger.error(err, 'error');
    cb();
  });
}