import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return ['Yukihiro \"Matz\" Matsumoto', 'David Heimler Hanssen', 'Piotr Solniza'];
  }
});
