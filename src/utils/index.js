const loadingBoilerplate = 'button is-link ld-ext-right ';

export default {
  simpleLoading(val) {
    return val ? loadingBoilerplate + 'running' : loadingBoilerplate;
  }
}