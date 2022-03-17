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
    { name: 'protanopia', hover: 'Red/Green colorblindness'},
    { name: 'protanomaly', hover: 'Red/Green, milder type'},
    { name: 'deuteranopia', hover: 'Red/Green colorblindness'},
    { name: 'deuteranomaly', hover: 'Red/Green, milder type'},
    { name: 'tritanopia', hover: 'Blue/yellow colorblindness'},
    { name: 'tritanomaly', hover: 'Blue/yellow, milder type'},
    { name: 'achromatopsia', hover: 'No color'},
    { name: 'achromatomaly', hover: 'Dull color vision'},
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
