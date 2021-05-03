import Route from '@ember/routing/route';
import { tracked } from'@glimmer/tracking';

class Category {
    @tracked name;

    constructor({ id, name, description }) {
      this.id = id;
      this.name = name;
      this.description = description;
    }
  }

export default class CategoriesRoute extends Route {

  model() {
    let noColorBlindness = new Category ({
      name: 'No colorblindness',
      description: 'This is the view without color alteration.',
    });

    let protanopia = new Category ({
      name: 'protanopia',
      description: 'Insert description',
    });

    let protanomaly = new Category ({
      name: 'protanomaly',
      description: 'Insert description',
    });

    let deuteranopia = new Category ({
      name: 'deuteranopia',
      description: 'Insert description',
    });

    let deuteranomaly = new Category ({
      name: 'deuteranomaly',
      description: 'Insert description',
    });

    let tritanopia = new Category ({
      name: 'tritanopia',
      description: 'Insert description',
    });

    let tritanomaly = new Category ({
      name: 'tritanomaly',
      description: 'Insert description',
    });

    let achromatopsia = new Category ({
      name: 'achromatopsia',
      description: 'Insert description',
    });

    let achromatomaly = new Category ({
      name: 'achromatomaly',
      description: 'Insert description',
    });

    return [noColorBlindness, protanopia, protanomaly, deuteranopia, deuteranomaly, tritanopia, tritanomaly, achromatopsia, achromatomaly];
  }
}
