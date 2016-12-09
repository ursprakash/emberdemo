import { test } from 'qunit';
import moduleForAcceptance from 'emberdemo/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | emberdemo');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
	
  });
});
