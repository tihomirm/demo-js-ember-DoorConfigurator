import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('configurator/q-glass', 'Integration | Component | configurator/q glass', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{configurator/q-glass}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#configurator/q-glass}}
      template block text
    {{/configurator/q-glass}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});