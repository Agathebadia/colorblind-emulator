import Component from '@glimmer/component';
import { A } from '@ember/array';
import { inject as service } from '@ember/service';

export default class CategoryComponent extends Component {
  store = service();
  menuItems = A([
    { name: 'No colorblindness'},
    { name: 'protanopia'},
    { name: 'protanomaly'},
    { name: 'deuteranopia'},
    { name: 'deuteranomaly'},
    { name: 'tritanopia'},
    { name: 'tritanomaly'},
    { name: 'achromatopsia'},
    { name: 'achromatomaly'},
  ]);

  async init() {
  this._super(...arguments);
  const categories = await this.store.findAll('category');
  this.set('menuItems', categories || []);
  }
}
