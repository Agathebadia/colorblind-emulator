import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class CategoryComponent extends Component {
  @service store;
  @tracked category = {};
}
