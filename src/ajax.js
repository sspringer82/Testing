function logName(logger) {
  const promise = $.ajax({
    url: '/user'
  });

  promise.then(function (data) {
    logger.log(data, 'info');
  }, function (err) {
    logger.error(err, 'error');
  });

  return promise;
}