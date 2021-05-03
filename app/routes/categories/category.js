import Route from '@ember/routing/route';

//Restructure categories for easier path

  let categories =
    {
  "data": [
    {
      "name": "no colorblindness",
      "id": 1,
      "description": "Emulator without colorblindness"
    },
    {
      "name": "protanopia",
      "id": 2,
      "description": "Protans have difficulties to distinguish between blue and green colors and also between red and green colors. Protans have either defective long-wavelength cones (L-cones) or the L-cones are missing at all. If they are missing it is called protanopia or sometimes red-dichromacy."
    },
    {
      "name": "protanomaly",
      "id": 3,
      "description": "Protans have difficulties to distinguish between blue and green colors and also between red and green colors. If L-cones are not missing but defective it is called protanomaly. People suffering from this kind of color blindness are called anomalous trichromats."
    },
    {
      "name": "deuteranopia",
      "id": 4,
      "description": "Deutan color vision deficiencies are by far the most common forms of color blindness. This subtype of red-green color blindness is found in about 6% of the male population, mostly in its mild form deuteranomaly. When you have a look at the color spectrum of a deuteranopic person you can see that a variety of colors look different than in a normal color spectrum. Whereas red and green are the main problem colors, there are also for example some gray, purple and a greenish blue-green which can’t be distinguished very well."
    },
    {
      "name": "deuteranomaly",
      "id": 5,
      "description": "Deutan color vision deficiencies are by far the most common forms of color blindness. This subtype of red-green color blindness is found in about 6% of the male population, mostly in its mild form deuteranomaly. Anomalous Trichromats: Deuteranomaly (green-weak). This can be everything between almost normal color vision and deuteranopia. The green sensitive cones are not missing in this case, but the peak of sensitivity is moved towards the red sensitive cones."
    },
    {
      "name": "tritanopia",
      "id": 6,
      "description": "People affected by tritan color blindness confuse blue with green and yellow with violet. People affected by tritanopia are dichromats. This means the S-cones are completely missing and only long- and medium-wavelength cones are present."
    },
    {
      "name": "tritanomaly",
      "id": 7,
      "description": "People affected by tritan color blindness confuse blue with green and yellow with violet. Tritanomany is an alleviated form of blue-yellow color blindness, where the S-cones are present but do have some kind of mutation"
    },
    {
      "name": "achromatopsia",
      "id": 8,
      "description": "Achromatopsia means without color. Most achromats are rod monochromats. Complete rod monochromats have no color vision. While incomplete rod monochromats may have small traces of specific colors when the light and glare are 'just right.' While we often describe the vision of complete achromats as seeing black and white or gray, the range of tones of gray when light is controlled can be quite stunning, like a fine black and white photograph."
    },
    {
      "name": "achromatomaly",
      "id": 9,
      "description": "Most achromats are rod monochromats. Complete rod monochromats have no color vision. While incomplete rod monochromats may have small traces of specific colors when the light and glare are 'just right.' While we often describe the vision of complete achromats as seeing black and white or gray, the range of tones of gray when light is controlled can be quite stunning, like a fine black and white photograph. Achromatomaly is a less severe form of Achromatopsia."
    }
  ]
}

export default class CategoriesCategoryRoute extends Route {
   model(params) {
    return {
      name: params.id,
      content: categories.data.find(category => category.name === params.id ),
    };
  }
}
