import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { A } from '@ember/array';
import { action } from '@ember/object';
import { reads } from '@ember/object/computed';
import { inject as service } from '@ember/service';


export default class CategoriesComponent extends Component {
  @service store;
  @service router;
  @tracked categories = [];

  activeCategory = reads('router.currentRoute.params.id')

  menuItems = A([
    { name: 'protanopia', hover: 'Red colorblindness'},
    { name: 'protanomaly', hover: 'Partial red colorblindness'},
    { name: 'deuteranopia', hover: 'Green colorblindness'},
    { name: 'deuteranomaly', hover: 'Partial green colorblindness'},
    { name: 'tritanopia', hover: 'Blue colorblindness'},
    { name: 'tritanomaly', hover: 'Partial blue colorblindness'},
    { name: 'achromatopsia', hover: 'No color'},
    { name: 'achromatomaly', hover: 'Partial colorblindness'},
    { name: 'no colorblindness', hover: 'Vision without colorblindness'}
  ])

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
