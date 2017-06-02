class Logger {
  log(msg, sev) {
    if (sev === 'info') {
      console.log(msg);
    } else if (sev === 'error') {
      console.error(msg);
    }
  }
}