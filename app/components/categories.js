import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { A } from '@ember/array';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';


export default class CategoriesComponent extends Component {
  @service store;
  @service router;

  @tracked categories = [];

  menuItems = A([
    { name: 'protanopia'},
    { name: 'protanomaly'},
    { name: 'deuteranopia'},
    { name: 'deuteranomaly'},
    { name: 'tritanopia'},
    { name: 'tritanomaly'},
    { name: 'achromatopsia'},
    { name: 'achromatomaly'},
  ]);

  constructor(...args) {
    super(...args);

    // this.getCategories();
  }

  @action
  async getCategories() {
    const categories = await this.store.findAll('category');

    this.categories = categories;
  }
}
