import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class NiceButtonComponent extends Component {
  @tracked
  showButton = true;

  @action
  hide() {
    this.showButton = false;
  }
}
