import Component from '@glimmer/component';
import { computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class CategoryComponent extends Component {
  @service store;
  @tracked category = {};

  // protanopia = computed('category', function(){
  // if (this.get('category.name') === 'protanopia') {
  //   return true;
  // }
  // })
}
