const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const loadingBoilerplate = 'button is-link ld-ext-right ';

export default {
  simpleLoading(val) {
    return val ? loadingBoilerplate + 'running' : loadingBoilerplate;
  },
  complexLoading() {
    
  }
  
}