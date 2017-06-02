class Logger {
  log(msg, sev) {
    const date = (new Date()).toString();

    if (sev === 'info') {
      console.log(date, msg);
    } else if (sev === 'error') {
      console.error(date, msg);
    }
  }
}