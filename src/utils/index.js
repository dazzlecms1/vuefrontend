const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const loadingBoilerplate = 'button is-link ld-ext-right ';
const loadingDelete = 'button ld-ext-right ';
const running = 'running';

export default {
  simpleLoading(loadingVal) {
    return loadingVal ? loadingBoilerplate + 'running' : loadingBoilerplate;
  },
  complexLoading({loadingId, id}) {
    return id === loadingId ? loadingDelete + running : loadingDelete;
  }
}