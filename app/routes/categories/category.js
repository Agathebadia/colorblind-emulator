import Route from '@ember/routing/route';

export default class CategoriesCategoryRoute extends Route {
   model(params) {
    let categories = this.modelFor('categories');
    let category = categories.find(category => category.id === params.category_id);
    return category;
  }
}
