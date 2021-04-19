import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | category', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:category');
    assert.ok(route);
  });
});
