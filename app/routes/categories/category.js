import Route from '@ember/routing/route';

  let categories =
    {
  "data": [
    {
      "name": "no colorblindness",
      "id": 1,
      "description": "This emulation does not have colorblindness on. Go through the page and switch between this emulation and others to see the difference in color perception!",
      "red-vision": "",
      "green-vision": "Green seen through the eyes of a non colorblind user.",
      "yellow-vision": "This emulation does not have colorblindness on. Go through the page and switch between this emulation and others to see the difference in color perception!",
      "purple-vision": "Purple seen through the eyes of a non colorblind user.",
      "blue-vision": "This emulation does not have colorblindness on. Go through the page and switch between this emulation and others to see the difference in color perception!",
      "redfigcaption": "Red caption",
      "red-description": "Here, red is seen through the lense of a non colorblind user. We can see a light red background with tomatoes, red paprika, chili, strawberries, grenada. There is no alteration of colours.",
      "greenfigcaption": "Green caption",
      "green-description": "",
      "yellowfigcaption": "Yellow caption",
      "yellow-description": "",
      "purplefigcaption": "Purple caption",
      "purple-description": "",
      "bluefigcaption": "Blue caption",
      "Blue-description": "",
    },
    {
      "name": "protanopia",
      "id": 2,
      "author":"Gery Coady",
      "description": "It’s one of the two types of color blindness commonly referred to as “red-green” color blindness. Affected people, called protanopes, have trouble distinguishing colors in the green–yellow–red area of the spectrum. Protans have either defective long-wavelength cones (L-cones) or the L-cones are missing at all. If they are missing it is called protanopia or sometimes red-dichromacy.",
      "red-vision": "Reds often appear to be gray or black, and purples may be indistinguishable from shades of blue. The term “red-green” color blindness can be quite misleading, since protanopes often have trouble distinguishing many more colors beyond just red and green. ",
      "green-vision": "Similarly to deuteranopia, protanopia makes you unable or very difficult to differentiate red and green.",
      "yellow-vision": "With Protanopia, the brightness of red, orange, and yellow colors is reduced. Are you able to read this text without underlining it...? :)",
      "purple-vision": "As shown on the picture, purple is slightly faded to a greyish purple, and the orange elements seen in the apricot, fig are green-yellowish.",
      "blue-vision": "Blue is attenuated and the green elements seen on the turtle shell, the corals are seen as grey.",
      "redfigcaption": "Red caption",
      "red-description": "Photo composition of tomatoes, paprika, jalapenos, grenada, strawberries that originally are red, but seen as light green with protanopia",
      "greenfigcaption": "Green caption",
      "green-description": "Photo composition of avocados, kiwis, salad, broccoli, grapes, apples that originally are green/dark green, but seen as light green/grey with protanopia",
      "yellowfigcaption": "Yellow caption",
      "yellow-description": "Photo composition of bananas, paprikas, lemons, mais that originally are yellow, but seen as bright yellow, almost neon yellow with protanopia",
      "purplefigcaption": "Purple caption",
      "purple-description": "Photo composition of aubergines, figs, blueberries, grapes that originally are purple, but seen as greyish purple or grey with protanopia",
      "bluefigcaption": "Blue caption",
      "blue-description": "Photo composition under the sea with a turtle, coral reef in the background. The original colors are between light blue and green, but seen as darker blue with protanopia. The green colors are seen as grey."
    },
    {
      "name": "protanomaly",
      "id": 3,
      "description": "People suffering from this kind of color blindness are called anomalous trichromats. Protanomaly is a mild colorblindness and does not get in the way of normal activities.",
      "author": "National Eye Institute of the United States",
      "red-vision": "Protanomaly results in poor red-green color discrimination and less saturated colors.",
      "green-vision": "Greens are not too much changes from non color blindness, except from a slight decrease in saturation.",
      "yellow-vision": "Similarly to green, purple and blue, yellows are less saturated.",
      "purple-vision": "Purples are less saturated but their color remain unchanged",
      "blue-vision": "In the same way, blues and greens are not altered or very lightly. The saturation is also lessened",
      "redfigcaption": "Red caption",
      "red-description": "Photo composition of tomatoes, paprika, jalapenos, grenada, strawberries that originally are red, but seen as orange with protanomaly",
      "greenfigcaption": "Green caption",
      "green-description": "Photo composition of avocados, kiwis, salad, broccoli, grapes, apples that originally are green/dark green, and see with the same colors with protanomaly",
      "yellowfigcaption": "Yellow caption",
      "yellow-description": "Photo composition of bananas, paprikas, lemons, mais that originally are yellow, but seen with brighter tones, with protanomaly",
      "purplefigcaption": "Purple caption",
      "purple-description": "Photo composition of aubergines, figs, blueberries, grapes that originally are purple, and seen with the same colors with protanomaly",
      "bluefigcaption": "Blue caption",
      "blue-description": "Photo composition under the sea with a turtle, coral reef in the background. The original colors are between light blue and green, and seen with a darker blue, green with protanomaly. Colors are quite similar as the originals.",
    },
    {
      "name": "deuteranopia",
      "id": 4,
      "description": "Deutan color vision deficiencies are by far the most common forms of color blindness (see deuteranomaly). When you have a look at the color spectrum of a deuteranopic person you can see that a variety of colors look different than in a normal color spectrum. Whereas red and green are the main problem colors, there are also for example some gray, purple and a greenish blue-green which can’t be distinguished very well.",
      "red-vision": "",
      "green-vision": "Similarly to protanopia, deuteranopia makes you unable or very difficult to differentiate red and green.",
      "yellow-vision": "Yellow and bright green are easily confused with deuteranopia. It's also very difficult to read if used as a font color ;)",
      "purple-vision": "As shown on the picture, purple is slightly faded to a greyish purple, and the orange elements seen in the apricot, fig are green-yellowish.",
      "blue-vision": "Blue is attenuated and the green elements seen on the turtle shell, the corals are seen as grey. Light blues tend to be confused with lilac.",
      "redfigcaption": "Red caption",
      "red-description": "Photo composition of tomatoes, paprika, jalapenos, grenada, strawberries that originally are red, but seen as light green with deuteranopia",
      "greenfigcaption": "Green caption",
      "green-description": "Photo composition of avocados, kiwis, salad, broccoli, grapes, apples that originally are green/dark green, but seen as greyish green and grey with deuteranopia",
      "yellowfigcaption": "Yellow caption",
      "yellow-description": "Photo composition of bananas, paprikas, lemons, mais that originally are yellow, but seen as bright yellow, neon yellow, with deuteranopia",
      "purplefigcaption": "Purple caption",
      "purple-description": "Photo composition of aubergines, figs, blueberries, grapes that originally are purple, but seen as greyish purple with deuteranopia",
      "bluefigcaption": "Blue caption",
      "blue-description": "Photo composition under the sea with a turtle, coral reef in the background. The original colors are between light blue and green, and seen with a darker blue with deuteranopia.",
    },
    {
      "name": "deuteranomaly",
      "id": 5,
      "description": "Deutan color vision deficiencies are by far the most common forms of color blindness. This subtype of red-green color blindness is found in about 6% of the male population, mostly in its mild form deuteranomaly.",
      "author": "Colblindor",
      "red-vision": "Deuteranomaly vision can be everything between almost normal color vision and deuteranopia. Greens are not altered in this case, but the peak of sensitivity is moved towards the red sensitivity.",
      "green-vision": "As shared above, greens have no alteration in shade, saturation or color, or very little.",
      "yellow-vision": "With yellows, there are also a lessened color saturation. It's still a pretty bad color contrast to use for a font color :D",
      "purple-vision": "Similarly to yellow, green and blue, purples have little to no alteration in their shade, saturation or color.",
      "blue-vision": "Blues and green are easily confused. The green front side of the corals are less saturated, as well as the blues which are less intense.",
      "redfigcaption": "Red caption",
      "red-description": "Photo composition of tomatoes, paprika, jalapenos, grenada, strawberries that originally are red, but seen as orange with deuteranomaly",
      "greenfigcaption": "Green caption",
      "green-description": "Photo composition of avocados, kiwis, salad, broccoli, grapes, apples that originally are green/dark green, and seen with the same tones with deuteranomaly",
      "yellowfigcaption": "Yellow caption",
      "yellow-description": "Photo composition of bananas, paprikas, lemons, mais that originally are yellow, and seen with a slightly brighter tone with deuteranomaly",
      "purplefigcaption": "Purple caption",
      "purple-description": "Photo composition of aubergines, figs, blueberries, grapes that originally are purple, and seen as the same tones with deuteranomaly",
      "bluefigcaption": "Blue caption",
      "blue-description": "Photo composition under the sea with a turtle, coral reef in the background. The original colors are between light blue and green, and seen with a darker blue, green with deuteranomaly. Colors are quite similar as the originals.",
    },
    {
      "name": "tritanopia",
      "id": 6,
      "description": "People affected by tritan color blindness (tritanopes) confuse blue with green and yellow with red. It also makes colors look less bright.",
      "red-vision": "In the red caption picture, red is more intense, but you can see in the below photos that the green, yellow, purple and blue captions are less saturated.",
      "green-vision": "Greens are less saturated and confused with blue colors. Some greens also appear as grey.",
      "yellow-vision": "Yellow is confused with red or pink. Here it's also difficult to differentiate the yellow bell peppers from its background.",
      "purple-vision": "Purple is confused with blue, orange is also confused with pink-red. The caption is also less saturated.",
      "blue-vision": "Blue is attenuated and the green elements are confused with blue, whereas light blue is confused with a more turquoise tone.",
      "redfigcaption": "Red caption",
      "red-description": "Photo composition of tomatoes, paprika, jalapenos, grenada, strawberries that originally are red, and seen as the same tones with tritanopia",
      "greenfigcaption": "Green caption",
      "green-description": "Photo composition of avocados, kiwis, salad, broccoli, grapes, apples that originally are green/dark green, but seen as greyish and grey colors with tritanopia",
      "yellowfigcaption": "Yellow caption",
      "yellow-description": "Photo composition of bananas, paprikas, lemons, mais that originally are yellow, but seen as bright pink, red with tritanopia",
      "purplefigcaption": "Purple caption",
      "purple-description": "Photo composition of aubergines, figs, blueberries, grapes that originally are purple, but seen as greyish blue, warm brown with tritanopia",
      "bluefigcaption": "Blue caption",
      "blue-description": "Photo composition under the sea with a turtle, coral reef in the background. The original colors are between light blue and green, and seen only as blue with tritanopia.",
    },
    {
      "name": "tritanomaly",
      "id": 7,
      "description": "Tritanomaly is an alleviated form of blue-yellow color blindness. It affects blue–green and yellow–red/pink color discrimination.",
      "red-vision": "Reds are easily distinguished and not altered by tritanomaly.",
      "green-vision": "Greens are slightly less saturated.",
      "yellow-vision": "Yellow tones are seen as more orange, with a slight pink tone.",
      "purple-vision": "Purples are not color altered, however they are less saturated, similarly to greens.",
      "blue-vision": "The light green front side of the corals is confused with light blue and slightly less saturated.",
      "redfigcaption": "Red caption",
      "red-description": "Photo composition of tomatoes, paprika, jalapenos, grenada, strawberries that originally are red, and seen as the same tones with tritanomaly",
      "greenfigcaption": "Green caption",
      "green-description": "Photo composition of avocados, kiwis, salad, broccoli, grapes, apples that originally are green/dark green, but seen as greyish and grey colors with tritanomaly",
      "yellowfigcaption": "Yellow caption",
      "yellow-description": "Photo composition of bananas, paprikas, lemons, mais that originally are yellow, but seen as darker yellow, light orange with tritanomaly",
      "purplefigcaption": "Purple caption",
      "purple-description": "Photo composition of aubergines, figs, blueberries, grapes that originally are purple, and see with a slightly darker tone with tritanomaly",
      "bluefigcaption": "Blue caption",
      "blue-description": "Photo composition under the sea with a turtle, coral reef in the background. The original colors are between light blue and green, and seen with similar tones with tritanomaly.",
    },
    {
      "name": "achromatopsia",
      "id": 8,
      "description": "Achromatopsia means without color. Most achromats are rod monochromats. Complete rod monochromats have no color vision. While incomplete rod monochromats may have small traces of specific colors when the light and glare are 'just right.'",
      "author": "Low Vision Centers of Indiana",
      "red-vision": "While we often describe the vision of complete achromats as seeing black and white or gray, the range of tones of gray when light is controlled can be quite stunning, like a fine black and white photograph.",
      "green-vision": "Achromatopsia gives a large range of tones, therefore no issue to distinguish elements if the shade and contrast is present.",
      "yellow-vision": "However with lighter shades such as yellow, the color contrast becomes a problem for reading and distinguish what is on a picture. Are you able to read this without underlining the text? :)",
      "purple-vision": "Similarly to the green and blue captions, if the shade and contrast is sufficient, reading and identifying elements on pictures is easy.",
      "blue-vision": "Similarly to the green and purple captions, if the shade and contrast is sufficient, reading and identifying elements on pictures is easy.",
      "redfigcaption": "Red caption",
      "red-description": "Photo composition of tomatoes, paprika, jalapenos, grenada, strawberries that originally are red, seen with grey tones with achromatopsia",
      "greenfigcaption": "Green caption",
      "green-description": "Photo composition of avocados, kiwis, salad, broccoli, grapes, apples that originally are green/dark green, but seen as grey tones with achromatopsia",
      "yellowfigcaption": "Yellow caption",
      "yellow-description": "Photo composition of bananas, paprikas, lemons, mais that originally are yellow, but seen as grey tones with achromatopsia",
      "purplefigcaption": "Purple caption",
      "purple-description": "Photo composition of aubergines, figs, blueberries, grapes that originally are purple, but seen as grey tones with achromatopsia",
      "bluefigcaption": "Blue caption",
      "blue-description": "Photo composition under the sea with a turtle, coral reef in the background. The original colors are between light blue and green, but seen as grey tones with achromatopsia.",
    },
    {
      "name": "achromatomaly",
      "id": 9,
      "description": "Achromatomaly is a less severe form of Achromatopsia. They may have small traces of specific colors when the light and glare are 'just right.'",
      "author": "Low Vision Centers of Indiana",
      "red-vision": "Achromatomaly makes every colour look dull, faded.",
      "green-vision": "As for reds, greens look also less saturated, but the colors are not altered.",
      "yellow-vision": "Yellows' saturation is lessened too. It also makes it more difficult to identify elements on photos, or read yellow fonts, isn't it? ;)",
      "purple-vision": "Purples here are not altered, except from the saturation. Thanks to the darker tones, it's still easy to distinguish colors, elements on picture, and reading.",
      "blue-vision": "Due to the lower saturation, light greens and blue are confused, but the image is still readable and darker blues are readable.",
      "redfigcaption": "Red caption",
      "red-description": "Photo composition of tomatoes, paprika, jalapenos, grenada, strawberries that originally are red, seen with more fadded tones of red with achromatomaly",
      "greenfigcaption": "Green caption",
      "green-description": "Photo composition of avocados, kiwis, salad, broccoli, grapes, apples that originally are green/dark green, seen with more fadded tones of green with achromatomaly",
      "yellowfigcaption": "Yellow caption",
      "yellow-description": "Photo composition of bananas, paprikas, lemons, mais that originally are yellow, seen with fadded tones of yellow with achromatomaly",
      "purplefigcaption": "Purple caption",
      "purple-description": "Photo composition of aubergines, figs, blueberries, grapes that originally are purple, seen with more fadded tones of purple with achromatomaly",
      "bluefigcaption": "Blue caption",
      "blue-description": "Photo composition under the sea with a turtle, coral reef in the background. The original colors are between light blue and green, seen with more fadded tones of blue and green with achromatomaly.",
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
