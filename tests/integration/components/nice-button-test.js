import { module, test } from 'qunit';
import { setupRenderingTest } from 'embroider-peerdependency-bug/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | nice-button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<NiceButton />`);
    assert.dom(this.element).hasText('This is a nice button');
  });
});
