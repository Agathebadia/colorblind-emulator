import Route from '@ember/routing/route';

export default class CategoryRoute extends Route {

  async model(params) {
    let categories = [ 'No colorblindness', 'protanopia', 'protanomaly', 'deuteranopia', 'deuteranomaly', 'tritanopia', 'tritanomaly', 'achromatopsia', 'achromatomaly']
    let category = categories.find(category => category.id === params.category_id);
    return category
  }
}
