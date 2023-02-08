import { GET_RECIPES, GET_DIETS, FILTER_BY_DIETS, SORTED_RECIPES, GET_RECIPE_BY_NAME, GET_RECIPE_DETAIL, SORT_SCORE} from './actions'
// ? ESTADO GLOBAL 
const initialState = {   

    // recipes:[{
	// 	"id": 782585,
	// 	"image": "https://spoonacular.com/recipeImages/782585-312x231.jpg",
	// 	"name": "Cannellini Bean and Asparagus Salad with Mushrooms",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free",
	// 		"lacto ovo vegetarian",
	// 		"vegan"
	// 	],
	// 	"dishTypes": [
	// 		"side dish",
	// 		"lunch",
	// 		"main course",
	// 		"salad",
	// 		"main dish",
	// 		"dinner"
	// 	],
	// 	"summary": "Cannellini Bean and Asparagus Salad with Mushrooms requires approximately <b>45 minutes</b> from start to finish. This main course has <b>482 calories</b>, <b>31g of protein</b>, and <b>6g of fat</b> per serving. This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe serves 6 and costs <b>$1.35 per serving</b>. 309 people were impressed by this recipe. Head to the store and pick up grain mustard, sea salt, lemon zest, and a few other things to make it today. It is brought to you by foodandspice.blogspot.com. Taking all factors into account, this recipe <b>earns a spoonacular score of 70%</b>, which is pretty good. Similar recipes are <a href=\"https://spoonacular.com/recipes/cannellini-bean-salad-422994\">Cannellini Bean Salad</a>, <a href=\"https://spoonacular.com/recipes/refreshing-cannellini-bean-salad-113127\">Refreshing Cannellini Bean Salad</a>, and <a href=\"https://spoonacular.com/recipes/cannellini-and-green-bean-salad-33177\">Cannellini-and-Green Bean Salad</a>.",
	// 	"healthScore": 100,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "Rinse the cannellini beans and soak for 8 hours or overnight in several inches of water."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Drain and rinse, then transfer to a medium saucepan and cover with fresh water."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Add the curry leaves or bay leaf and bring to a boil. Reduce heat to medium-low, cover, and simmer for 1 hour or until the beans are tender but not falling apart."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Drain and transfer to a large salad bowl.Meanwhile, snap the woody ends off of the asparagus spears and steam the spears for 6 minutes or until just tender but still retaining their crunch."
	// 		},
	// 		{
	// 			"number": 5,
	// 			"step": "Transfer to the salad bowl.Now cook the mushrooms."
	// 		},
	// 		{
	// 			"number": 6,
	// 			"step": "Heat the oil in a large skillet over high heat. As soon as the oil is hot, drop in the mushrooms and cook, stirring constantly, for 5 minutes or until the mushrooms begin to brown and lose some of their liquid."
	// 		},
	// 		{
	// 			"number": 7,
	// 			"step": "Transfer to the bowl with the asparagus.To make the dressing, combine the tarragon, lemon zest, garlic, lemon juice, olive oil and mustard in a small food processor or blender. Process until smooth."
	// 		},
	// 		{
	// 			"number": 8,
	// 			"step": "Pour the dressing over the salad, season with salt and pepper, and toss."
	// 		},
	// 		{
	// 			"number": 9,
	// 			"step": "Serve at room temperature or chilled."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 716426,
	// 	"image": "https://spoonacular.com/recipeImages/716426-312x231.jpg",
	// 	"name": "Cauliflower, Brown Rice, and Vegetable Fried Rice",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free",
	// 		"lacto ovo vegetarian",
	// 		"vegan"
	// 	],
	// 	"dishTypes": [
	// 		"side dish",
	// 		"antipasti",
	// 		"starter",
	// 		"snack",
	// 		"appetizer",
	// 		"antipasto",
	// 		"hor d'oeuvre"
	// 	],
	// 	"summary": "You can never have too many Chinese recipes, so give Cauliflower, Brown Rice, and Vegetable Fried Rice a try. This recipe serves 8 and costs $1.12 per serving. This hor d'oeuvre has <b>192 calories</b>, <b>7g of protein</b>, and <b>6g of fat</b> per serving. Head to the store and pick up broccoli, sesame seeds, soy sauce, and a few other things to make it today. 3689 people were impressed by this recipe. It is brought to you by fullbellysisters.blogspot.com. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. From preparation to the plate, this recipe takes roughly <b>30 minutes</b>. Overall, this recipe earns a <b>spectacular spoonacular score of 100%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1584601\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>, <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1238897\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>, and <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1230097\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>.",
	// 	"healthScore": 75,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "Remove the cauliflower's tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of \"cauliflower rice.\""
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Heat 1T butter and 1T oil in a large skillet over medium heat."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Add garlic and the white and light green pieces of scallion. Sauté about a minute."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Add the cauliflower to the pan. Stir to coat with oil, then spread out in pan and let sit; you want it cook a bit and to caramelize (get a bit brown), which will bring out the sweetness. After a couple of minutes, stir and spread out again."
	// 		},
	// 		{
	// 			"number": 5,
	// 			"step": "Add cold rice (it separates easily, so it won't clump up during cooking), plus the additional grapeseed and coconut oil or butter. Raise heat to medium-high. Toss everything together and, again, spread the mixture out over the whole pan and press a bit into the bottom."
	// 		},
	// 		{
	// 			"number": 6,
	// 			"step": "Let it sit for about two minutes—so the rice can get toasted and a little crispy."
	// 		},
	// 		{
	// 			"number": 7,
	// 			"step": "Add the peas and broccoli and stir again."
	// 		},
	// 		{
	// 			"number": 8,
	// 			"step": "Drizzle soy sauce and toasted sesame oil over rice.Cook for another minute or so and turn off heat."
	// 		},
	// 		{
	// 			"number": 9,
	// 			"step": "Add chopped scallion tops and toss.I like to toast some sesame seeds in a dry pan; I sprinkle these and some more raw, chopped scallion over the top of the rice for added flavor and crunch.Season to taste with salt and, if you'd like, more soy sauce. Keep in mind that if you're serving this with something salty and saucy (ie. teriyaki chicken) you may want to hold off on adding too much salt to the fried rice."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 715497,
	// 	"image": "https://spoonacular.com/recipeImages/715497-312x231.jpg",
	// 	"name": "Berry Banana Breakfast Smoothie",
	// 	"diets": [
	// 		"lacto ovo vegetarian"
	// 	],
	// 	"dishTypes": [
	// 		"morning meal",
	// 		"brunch",
	// 		"beverage",
	// 		"breakfast",
	// 		"drink"
	// 	],
	// 	"summary": "If you want to add more <b>lacto ovo vegetarian</b> recipes to your recipe box, Berry Banana Breakfast Smoothie might be a recipe you should try. One portion of this dish contains about <b>21g of protein</b>, <b>10g of fat</b>, and a total of <b>457 calories</b>. This recipe serves 1 and costs $2.07 per serving. 689 people have tried and liked this recipe. It works well as a rather inexpensive breakfast. A mixture of banana, graham cracker crumbs, vanilla yogurt, and a handful of other ingredients are all it takes to make this recipe so yummy. From preparation to the plate, this recipe takes roughly <b>5 minutes</b>. It is brought to you by Pink When. Overall, this recipe earns a <b>super spoonacular score of 99%</b>. Similar recipes include <a href=\"https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-1364145\">Berry Banana Breakfast Smoothie</a>, <a href=\"https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-1405583\">Berry Banana Breakfast Smoothie</a>, and <a href=\"https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-1601311\">Berry Banana Breakfast Smoothie</a>.",
	// 	"healthScore": 64,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "Take some yogurt in your favorite flavor and add 1 container to your blender."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Add in the berries, banana, and soy milk and blend. Top your glass with a few graham cracker crumbs and serve."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 715415,
	// 	"image": "https://spoonacular.com/recipeImages/715415-312x231.jpg",
	// 	"name": "Red Lentil Soup with Chicken and Turnips",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free"
	// 	],
	// 	"dishTypes": [
	// 		"lunch",
	// 		"soup",
	// 		"main course",
	// 		"main dish",
	// 		"dinner"
	// 	],
	// 	"summary": "Red Lentil Soup with Chicken and Turnips might be a good recipe to expand your main course repertoire. This recipe serves 8 and costs $3.0 per serving. One serving contains <b>477 calories</b>, <b>27g of protein</b>, and <b>20g of fat</b>. It is brought to you by Pink When. 1866 people have tried and liked this recipe. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. From preparation to the plate, this recipe takes approximately <b>55 minutes</b>. It is a good option if you're following a <b>gluten free and dairy free</b> diet. Head to the store and pick up salt and pepper, canned tomatoes, flat leaf parsley, and a few other things to make it today. Overall, this recipe earns a <b>spectacular spoonacular score of 99%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/red-lentil-and-chicken-soup-682185\">Red Lentil and Chicken Soup</a>, <a href=\"https://spoonacular.com/recipes/red-lentil-and-chicken-soup-1058971\">Red Lentil and Chicken Soup</a>, and <a href=\"https://spoonacular.com/recipes/red-lentil-soup-34121\">Red-Lentil Soup</a>.",
	// 	"healthScore": 100,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "To a large dutch oven or soup pot, heat the olive oil over medium heat."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Add the onion, carrots and celery and cook for 8-10 minutes or until tender, stirring occasionally."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Add the garlic and cook for an additional 2 minutes, or until fragrant. Season conservatively with a pinch of salt and black pepper.To the pot, add the tomatoes, turnip and red lentils. Stir to combine. Stir in the vegetable stock and increase the heat on the stove to high. Bring the soup to a boil and then reduce to a simmer. Simmer for 20 minutes or until the turnips are tender and the lentils are cooked through."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Add the chicken breast and parsley. Cook for an additional 5 minutes. Adjust seasoning to taste."
	// 		},
	// 		{
	// 			"number": 5,
	// 			"step": "Serve the soup immediately garnished with fresh parsley and any additional toppings. Enjoy!"
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 716406,
	// 	"image": "https://spoonacular.com/recipeImages/716406-312x231.jpg",
	// 	"name": "Asparagus and Pea Soup: Real Convenience Food",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free",
	// 		"paleolithic",
	// 		"lacto ovo vegetarian",
	// 		"primal",
	// 		"vegan"
	// 	],
	// 	"dishTypes": [
	// 		"antipasti",
	// 		"soup",
	// 		"starter",
	// 		"snack",
	// 		"appetizer",
	// 		"antipasto",
	// 		"hor d'oeuvre"
	// 	],
	// 	"summary": "Asparagus and Pea Soup: Real Convenience Food requires approximately <b>20 minutes</b> from start to finish. Watching your figure? This gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe has <b>217 calories</b>, <b>11g of protein</b>, and <b>8g of fat</b> per serving. This recipe serves 2. For <b>$1.78 per serving</b>, this recipe <b>covers 25%</b> of your daily requirements of vitamins and minerals. <b>Autumn</b> will be even more special with this recipe. It works well as a hor d'oeuvre. 207 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. A mixture of vegetable broth, evoo, garlic, and a handful of other ingredients are all it takes to make this recipe so yummy. All things considered, we decided this recipe <b>deserves a spoonacular score of 96%</b>. This score is outstanding. Try <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1393979\">Asparagus and Pea Soup: Real Convenience Food</a>, <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1376201\">Asparagus and Pea Soup: Real Convenience Food</a>, and <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1362341\">Asparagus and Pea Soup: Real Convenience Food</a> for similar recipes.",
	// 	"healthScore": 100,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "Chop the garlic and onions."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Saute the onions in the EVOO, adding the garlic after a couple of minutes; cook until the onions are translucent."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Add the whole bag of asparagus and cover everything with the broth. Season with salt and pepper and a pinch of red pepper flakes, if using.Simmer until the asparagus is bright green and tender (if you've thawed the asparagus it will only take a couple of minutes). Turn off the heat and puree using an immersion blender."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Add peas (the heat of the soup will quickly thaw them) and puree until smooth; add more until it reaches the thickness you like.Top with chives and a small dollop of creme fraiche or sour cream or greek yogurt."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 644387,
	// 	"image": "https://spoonacular.com/recipeImages/644387-312x231.jpg",
	// 	"name": "Garlicky Kale",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free",
	// 		"paleolithic",
	// 		"lacto ovo vegetarian",
	// 		"primal",
	// 		"whole 30",
	// 		"vegan"
	// 	],
	// 	"dishTypes": [
	// 		"side dish"
	// 	],
	// 	"summary": "Garlicky Kale requires approximately <b>45 minutes</b> from start to finish. This side dish has <b>170 calories</b>, <b>2g of protein</b>, and <b>15g of fat</b> per serving. This recipe serves 2. For <b>69 cents per serving</b>, this recipe <b>covers 17%</b> of your daily requirements of vitamins and minerals. 19 people have made this recipe and would make it again. This recipe from Foodista requires balsamic vinegar, garlic, curly kale, and olive oil. It is a good option if you're following a <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> diet. With a spoonacular <b>score of 99%</b>, this dish is outstanding. Try <a href=\"https://spoonacular.com/recipes/garlicky-kale-248759\">Garlicky Kale</a>, <a href=\"https://spoonacular.com/recipes/garlicky-kale-1267347\">Garlicky Kale</a>, and <a href=\"https://spoonacular.com/recipes/garlicky-kale-1584523\">Garlicky Kale</a> for similar recipes.",
	// 	"healthScore": 83,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "Heat the olive oil in a large pot over medium heat."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Add the kale and cover.Stir occasionally until the volume of the kale is reduced by half. Uncover."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Add garlic and basalmic.Allow to cook for about another 30 seconds or so, mixing well so that the garlic and vinegar are well distributed."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Serve hot."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 715446,
	// 	"image": "https://spoonacular.com/recipeImages/715446-312x231.jpg",
	// 	"name": "Slow Cooker Beef Stew",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free"
	// 	],
	// 	"dishTypes": [
	// 		"lunch",
	// 		"soup",
	// 		"main course",
	// 		"main dish",
	// 		"dinner"
	// 	],
	// 	"summary": "If you want to add more <b>gluten free and dairy free</b> recipes to your recipe box, Slow Cooker Beef Stew might be a recipe you should try. One serving contains <b>434 calories</b>, <b>44g of protein</b>, and <b>12g of fat</b>. This recipe serves 6. For <b>$2.7 per serving</b>, this recipe <b>covers 45%</b> of your daily requirements of vitamins and minerals. It works best as a main course, and is done in approximately <b>8 hours and 10 minutes</b>. If you have green onions, carrots, celery, and a few other ingredients on hand, you can make it. This recipe is liked by 57 foodies and cooks. <b>Autumn</b> will be even more special with this recipe. It is brought to you by Pink When. Taking all factors into account, this recipe <b>earns a spoonacular score of 99%</b>, which is awesome. Similar recipes include <a href=\"https://spoonacular.com/recipes/slow-cooker-beef-stew-1578321\">Slow Cooker Beef Stew</a>, <a href=\"https://spoonacular.com/recipes/slow-cooker-beef-stew-1241707\">Slow Cooker Beef Stew</a>, and <a href=\"https://spoonacular.com/recipes/slow-cooker-beef-stew-1281171\">Slow Cooker Beef Stew</a>.",
	// 	"healthScore": 100,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "To get started, heat your slow cooker to low."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Pour in the cream of mushroom soup, Dale's seasoning, water, and beef broth and stir until mixed well."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Add in your stew meat, potatoes, onions, carrots, celery, and green onions. Stir well until covered and cook on low for 8 hours. You can add salt and pepper as desired, but the flavors and the Dale's marry together so well that you probably won’t need them."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 782601,
	// 	"image": "https://spoonacular.com/recipeImages/782601-312x231.jpg",
	// 	"name": "Red Kidney Bean Jambalaya",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free",
	// 		"lacto ovo vegetarian",
	// 		"vegan"
	// 	],
	// 	"dishTypes": [
	// 		"lunch",
	// 		"main course",
	// 		"main dish",
	// 		"dinner"
	// 	],
	// 	"summary": "Red Kidney Bean Jambalayan is a main course that serves 6. One portion of this dish contains approximately <b>18g of protein</b>, <b>6g of fat</b>, and a total of <b>393 calories</b>. For <b>$1.68 per serving</b>, this recipe <b>covers 33%</b> of your daily requirements of vitamins and minerals. 53 people were glad they tried this recipe. A mixture of vegetable stock, tomatoes, onion, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. This recipe is typical of Cajun cuisine. It is brought to you by foodandspice.blogspot.com. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. Overall, this recipe earns a <b>tremendous spoonacular score of 99%</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/red-kidney-bean-jambalaya-1407231\">Red Kidney Bean Jambalaya</a>, <a href=\"https://spoonacular.com/recipes/red-kidney-bean-salad-94525\">Red Kidney Bean Salad</a>, and <a href=\"https://spoonacular.com/recipes/red-kidney-bean-curry-80686\">Red Kidney Bean Curry</a>.",
	// 	"healthScore": 96,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "Rinse the kidney beans and brown rice separately. Cover the kidney beans with water and soak for 8 hours or overnight. In a separate bowl, cover the brown rice with water and soak for 8 hours or overnight."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Drain and rinse the kidney beans, then transfer to a medium saucepan and cover with fresh water. Bring to a boil, reduce heat to medium-low, cover, and simmer for 1 hour or until just tender but not falling apart."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Drain and set aside."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Heat the oil in a large saucepan over medium heat. When hot, add the onion and saut for 5 minutes. Now add the garlic, carrots, celery and green beans, and stir for another 5 minutes. Next add the tomatoes, red pepper, eggplant, sage, thyme, marjoram and celery seed, and continue to stir for another few minutes."
	// 		},
	// 		{
	// 			"number": 5,
	// 			"step": "Pour in the vegetable stock, liquid smoke, rice and the cooked kidney beans. Bring to a boil, reduce heat to medium low, cover, and cook, stirring occasionally, for 45 minutes or until the rice is tender."
	// 		},
	// 		{
	// 			"number": 6,
	// 			"step": "Add water as necessary if the stew becomes too dry.Season with sriracha, salt and pepper, and taste for seasoning  add more liquid smoke, sriracha, salt, pepper or herbs as desired."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 795751,
	// 	"image": "https://spoonacular.com/recipeImages/795751-312x231.jpg",
	// 	"name": "Chicken Fajita Stuffed Bell Pepper",
	// 	"diets": [
	// 		"gluten free"
	// 	],
	// 	"dishTypes": [
	// 		"lunch",
	// 		"main course",
	// 		"main dish",
	// 		"dinner"
	// 	],
	// 	"summary": "Chicken Fajita Stuffed Bell Pepper takes approximately <b>45 minutes</b> from beginning to end. Watching your figure? This gluten free recipe has <b>526 calories</b>, <b>50g of protein</b>, and <b>24g of fat</b> per serving. For <b>$4.35 per serving</b>, you get a main course that serves 3. 159 people have made this recipe and would make it again. This recipe is typical of Mexican cuisine. This recipe from Pink When requires cumin, cilantro, salsa, and chili powder. All things considered, we decided this recipe <b>deserves a spoonacular score of 98%</b>. This score is amazing. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/stuffed-bell-peppers-551310\">Stuffed Bell Peppers</a>, <a href=\"https://spoonacular.com/recipes/stuffed-bell-pepper-1348405\">Stuffed Bell Pepper</a>, and <a href=\"https://spoonacular.com/recipes/stuffed-bell-pepper-526845\">Stuffed Bell Pepper</a>.",
	// 	"healthScore": 85,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "To get started heat oven to 35"
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Mix salt, pepper, cilantro, cumin, chili powder, and quinoa together and place to the side."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Cut the bell pepper in half (if you havent already) and clean out the seeds."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Layer quinoa and then grilled chicken into the pepper, and then top each with cheese."
	// 		},
	// 		{
	// 			"number": 5,
	// 			"step": "Place in the oven for about 10 minutes until the bell pepper has softened.Chicken Fajita Stuffed Bell Pepper"
	// 		},
	// 		{
	// 			"number": 6,
	// 			"step": "Top with avocado and serve with shredded lettuce and salsa for a complete meal.This is SO GOOD! I love bell peppers, and I love all of these flavors that are married together that make this chicken fajita stuffed bell pepper so amazing. I could seriously just eat the flavored quinoa all by itself.If you are looking for even more delicious and healthy recipes, make sure you head over to the Simple Fit Forty tab under the cooking section of this blog. We have all of our favorite healthy recipes listed for you right there in one spot. You can also drool over out latest on the Simple Fit Forty Instagram page.If you are looking to get healthy and fit, come and join the super secret and awesome Simple Fit Forty Lifestyle community over on Facebook. We would love to have you join!"
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 766453,
	// 	"image": "https://spoonacular.com/recipeImages/766453-312x231.jpg",
	// 	"name": "Hummus and Za'atar",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free",
	// 		"lacto ovo vegetarian",
	// 		"vegan"
	// 	],
	// 	"dishTypes": [
	// 		"seasoning",
	// 		"marinade"
	// 	],
	// 	"summary": "You can never have too many middl eastern recipes, so give Hummus and Za'atar a try. This recipe serves 4. One portion of this dish contains about <b>34g of protein</b>, <b>31g of fat</b>, and a total of <b>778 calories</b>. For <b>$1.61 per serving</b>, this recipe <b>covers 44%</b> of your daily requirements of vitamins and minerals. If you have chickpeas, olive oil, sea salt, and a few other ingredients on hand, you can make it. It works best as a marinade, and is done in about <b>45 minutes</b>. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. 35 people have made this recipe and would make it again. It is brought to you by foodandspice.blogspot.com. Overall, this recipe earns a <b>great spoonacular score of 98%</b>. <a href=\"https://spoonacular.com/recipes/chopped-hummus-dip-with-zaatar-180958\">Chopped Hummus Dip with Za'atar</a>, <a href=\"https://spoonacular.com/recipes/mediterranean-hummus-toast-with-zaatar-1067472\">Mediterranean Hummus Toast with Za’atar</a>, and <a href=\"https://spoonacular.com/recipes/hummus-deviled-eggs-with-zaatar-exercise-challenge-1195539\">Hummus Deviled Eggs with Za’atar {Exercise Challenge}</a> are very similar to this recipe.",
	// 	"healthScore": 100,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "Rinse the chickpeas and soak for 8 hours or overnight in several inches of water."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Drain and rinse, then transfer to a medium saucepan and cover with fresh water. Bring to a boil, reduce heat to medium-low, cover, and simmer for 1 to 1 1/2 hours or until soft."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Drain, reserving the cooking liquid. (If using canned chickpeas, rinse thoroughly.)Meanwhile, toast the pine nuts in a dry unoiled skillet or saucepan over medium-low heat, tossing or stirring frequently, for 10 minutes or until lightly browned."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Transfer the chickpeas to a food processor and add the pine nuts, 2 tablespoons of olive oil, 1/4 cup of the reserved chickpea cooking liquid (or water if using canned chicpeas), the tahini, garlic, lemon juice and salt. Process until smooth, adding more of the reserved chickpea cooking liquid or water as necessary to reach a light creamy consistency. Taste for seasoning and add more salt or lemon juice as desired."
	// 		},
	// 		{
	// 			"number": 5,
	// 			"step": "Transfer the hummus to a shallow bowl and drizzle with olive oil."
	// 		},
	// 		{
	// 			"number": 6,
	// 			"step": "Sprinkle with za'atar and paprika, and serve with chopped fresh vegetables or toasted pita triangles.Refrigerate leftover hummus for a few days or freeze for up to a month."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 716627,
	// 	"image": "https://spoonacular.com/recipeImages/716627-312x231.jpg",
	// 	"name": "Easy Homemade Rice and Beans",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free",
	// 		"lacto ovo vegetarian",
	// 		"vegan"
	// 	],
	// 	"dishTypes": [
	// 		"side dish",
	// 		"lunch",
	// 		"main course",
	// 		"main dish",
	// 		"dinner"
	// 	],
	// 	"summary": "Easy Homemade Rice and Beans is a main course that serves 2. One serving contains <b>446 calories</b>, <b>19g of protein</b>, and <b>4g of fat</b>. For <b>$1.06 per serving</b>, this recipe <b>covers 26%</b> of your daily requirements of vitamins and minerals. A mixture of optional: of hot sauce, canned tomatoes, water, and a handful of other ingredients are all it takes to make this recipe so yummy. This recipe from cooking2perfection.blogspot.com has 471 fans. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. From preparation to the plate, this recipe takes around <b>35 minutes</b>. Overall, this recipe earns a <b>tremendous spoonacular score of 98%</b>. <a href=\"https://spoonacular.com/recipes/easy-homemade-rice-and-beans-1311839\">Easy Homemade Rice and Beans</a>, <a href=\"https://spoonacular.com/recipes/easy-homemade-rice-and-beans-1303021\">Easy Homemade Rice and Beans</a>, and <a href=\"https://spoonacular.com/recipes/easy-homemade-rice-and-beans-1230117\">Easy Homemade Rice and Beans</a> are very similar to this recipe.",
	// 	"healthScore": 60,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "Heat the olive oil in a large pot over medium heat."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Add onions and saute until soft, or for about 5 minutes."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Add all other remaining ingredients and stir together. Increase the heat to medium high and bring to a boil. Cover and reduce heat to medium low so that the mixture simmers. Cook for 15-20 minutes, or until rice is fluffy and liquid is absorbed.*"
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Serve with salsa, cheese, and sour cream."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 664147,
	// 	"image": "https://spoonacular.com/recipeImages/664147-312x231.jpg",
	// 	"name": "Tuscan White Bean Soup with Olive Oil and Rosemary",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free",
	// 		"lacto ovo vegetarian",
	// 		"vegan"
	// 	],
	// 	"dishTypes": [
	// 		"lunch",
	// 		"soup",
	// 		"main course",
	// 		"main dish",
	// 		"dinner"
	// 	],
	// 	"summary": "Tuscan White Bean Soup with Olive Oil and Rosemary is a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> recipe with 6 servings. This main course has <b>242 calories</b>, <b>16g of protein</b>, and <b>1g of fat</b> per serving. For <b>50 cents per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. It will be a hit at your <b>Autumn</b> event. 22 people found this recipe to be tasty and satisfying. Head to the store and pick up olive oil, rosemary, garlic, and a few other things to make it today. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. With a spoonacular <b>score of 79%</b>, this dish is good. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/white-bean-soup-with-pasta-and-rosemary-oil-drizzle-855454\">White Bean Soup with Pastan and Rosemary Oil Drizzle</a>, <a href=\"https://spoonacular.com/recipes/tuscan-white-bean-and-fennel-stew-with-orange-and-rosemary-105383\">Tuscan White Bean and Fennel Stew With Orange and Rosemary</a>, and <a href=\"https://spoonacular.com/recipes/tuscan-white-bean-soup-1054940\">Tuscan White Bean Soup</a>.",
	// 	"healthScore": 94,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "Rinse the beans thoroughly and place them in a 7-quart slow cooker along with the water, onion, garlic, and bay leaf. Cover and cook on LOW for about 8 hours, or until the beans are nice and tender."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Remove the bay leaf. Using a handheld immersion blender, puree the remaining ingredients to the desired texture."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Add the salt to taste.Ladle the soup into bowls."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Drizzle with the olive oil, sprinkle with rosemary, and serve."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 640941,
	// 	"image": "https://spoonacular.com/recipeImages/640941-312x231.jpg",
	// 	"name": "Crunchy Brussels Sprouts Side Dish",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free",
	// 		"paleolithic",
	// 		"lacto ovo vegetarian",
	// 		"primal"
	// 	],
	// 	"dishTypes": [
	// 		"side dish"
	// 	],
	// 	"summary": "The recipe Crunchy Brussels Sprouts Side Dish can be made <b>in about 30 minutes</b>. For <b>$1.69 per serving</b>, you get a side dish that serves 4. One serving contains <b>232 calories</b>, <b>8g of protein</b>, and <b>16g of fat</b>. This recipe is liked by 26 foodies and cooks. It is brought to you by Foodista. A mixture of red wine vinegar, walnuts, dijon mustard, and a handful of other ingredients are all it takes to make this recipe so yummy. It is a good option if you're following a <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 98%</b>. This score is spectacular. Similar recipes include <a href=\"https://spoonacular.com/recipes/side-dish-sundays-cacio-e-pepe-brussels-sprouts-1146819\">Side Dish Sundays: Cacio e Pepe Brussels Sprouts</a>, <a href=\"https://spoonacular.com/recipes/easy-side-dish-roasted-brussels-sprouts-and-grapes-474168\">Easy Side Dish – Roasted Brussels Sprouts and Grapes</a>, and <a href=\"https://spoonacular.com/recipes/side-dish-sundays-cacio-e-pepe-brussels-sprouts-1385177\">Side Dish Sundays: Cacio e Pepe Brussels Sprouts</a>.",
	// 	"healthScore": 100,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "Blanch the Brussels sprouts in boiling water for 6-8 minutes or in a microwave oven in a little water for about 4 minutes."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Drain."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Saute the Brussels sprouts, stirring constantly, until they become golden-brown in color.Meanwhile mix the vinegar, mustard, honey and olive oil."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Add walnuts to the sprouts, stir and combine."
	// 		},
	// 		{
	// 			"number": 5,
	// 			"step": "Pour the vinegar dressing over the sprouts, season with pepper."
	// 		},
	// 		{
	// 			"number": 6,
	// 			"step": "Mix and combine so that each sprout is covered with the dressing."
	// 		},
	// 		{
	// 			"number": 7,
	// 			"step": "Serve warm or cold as a side dish."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 715495,
	// 	"image": "https://spoonacular.com/recipeImages/715495-312x231.jpg",
	// 	"name": "Turkey Tomato Cheese Pizza",
	// 	"diets": [],
	// 	"dishTypes": [
	// 		"antipasti",
	// 		"starter",
	// 		"snack",
	// 		"appetizer",
	// 		"antipasto",
	// 		"hor d'oeuvre"
	// 	],
	// 	"summary": "Turkey Tomato Cheese Pizza might be just the <b>Mediterranean</b> recipe you are searching for. For <b>$1.84 per serving</b>, this recipe <b>covers 23%</b> of your daily requirements of vitamins and minerals. This hor d'oeuvre has <b>221 calories</b>, <b>10g of protein</b>, and <b>8g of fat</b> per serving. This recipe serves 6. Head to the store and pick up bell pepper, parsley, onion, and a few other things to make it today. This recipe from Pink When has 910 fans. From preparation to the plate, this recipe takes around <b>15 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 97%</b>. This score is outstanding. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/turkey-tomato-pizza-430522\">Turkey Tomato Pizza</a>, <a href=\"https://spoonacular.com/recipes/tomato-cheese-pizza-430570\">Tomato Cheese Pizza</a>, and <a href=\"https://spoonacular.com/recipes/cheese-tomato-pizza-696636\">Cheese & Tomato Pizza</a>.",
	// 	"healthScore": 39,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "Heat up your grill to 450 degrees.Start off with your whole wheat crust and spread the tomato sauce evenly over the top."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Add a little cheese, bell pepper, onion, turkey and create a layer.Top with another layer of cheese, turkey, tomato, bell pepper, onion."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Add another layer of cheese, and then sprinkle with pepper."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Place the pizza on a ceramic grill plate and place into the grill.Grill for 6-10 minutes, or until cooked as desired.Slice, and serve immediately."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 794349,
	// 	"image": "https://spoonacular.com/recipeImages/794349-312x231.jpg",
	// 	"name": "Broccoli and Chickpea Rice Salad",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free",
	// 		"lacto ovo vegetarian",
	// 		"vegan"
	// 	],
	// 	"dishTypes": [
	// 		"side dish",
	// 		"lunch",
	// 		"main course",
	// 		"salad",
	// 		"main dish",
	// 		"dinner"
	// 	],
	// 	"summary": "Broccoli and Chickpea Rice Salad takes roughly <b>45 minutes</b> from beginning to end. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>355 calories</b>, <b>15g of protein</b>, and <b>10g of fat</b> per serving. This recipe serves 6. For <b>$1.13 per serving</b>, this recipe <b>covers 30%</b> of your daily requirements of vitamins and minerals. It works well as a main course. 44 people were glad they tried this recipe. It is brought to you by foodandspice.blogspot.com. A mixture of ground pepper, broccoli florets, olive oil, and a handful of other ingredients are all it takes to make this recipe so tasty. With a spoonacular <b>score of 99%</b>, this dish is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/broccoli-and-chickpea-rice-salad-1380823\">Broccoli and Chickpea Rice Salad</a>, <a href=\"https://spoonacular.com/recipes/broccoli-and-chickpea-rice-salad-1401089\">Broccoli and Chickpea Rice Salad</a>, and <a href=\"https://spoonacular.com/recipes/broccoli-and-chickpea-rice-salad-1287405\">Broccoli and Chickpea Rice Salad</a>.",
	// 	"healthScore": 83,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "In a large skillet, heat the oil over medium heat."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Add the broccoli, stir well, and cover. Cook, stirring often, until the broccoli is tender."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Add the broccoli to a large bowl, along with the remaining salad ingredients.To make the dressing, whisk together all of the dressing ingredients in a small bowl."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Pour the dressing over the salad and toss well to coat evenly. Taste for seasoning and serve."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 716381,
	// 	"image": "https://spoonacular.com/recipeImages/716381-312x231.jpg",
	// 	"name": "Nigerian Snail Stew",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free",
	// 		"whole 30"
	// 	],
	// 	"dishTypes": [
	// 		"lunch",
	// 		"soup",
	// 		"main course",
	// 		"main dish",
	// 		"dinner"
	// 	],
	// 	"summary": "Need a <b>gluten free, dairy free, and whole 30 main course</b>? Nigerian Snail Stew could be a tremendous recipe to try. This recipe serves 1 and costs $9.1 per serving. One serving contains <b>358 calories</b>, <b>24g of protein</b>, and <b>5g of fat</b>. 361 person have made this recipe and would make it again. It will be a hit at your <b>Autumn</b> event. A mixture of scotch bonnet peppers, bell pepper, tomatoes, and a handful of other ingredients are all it takes to make this recipe so tasty. It is brought to you by Afrolems. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is super. <a href=\"https://spoonacular.com/recipes/nigerian-kidney-bean-stew-with-a-peanut-sauce-112643\">Nigerian Kidney Bean Stew With a Peanut Sauce</a>, <a href=\"https://spoonacular.com/recipes/little-snail-rolls-369096\">Little Snail Rolls</a>, and <a href=\"https://spoonacular.com/recipes/maple-snail-cookies-76877\">Maple Snail Cookies</a> are very similar to this recipe.",
	// 	"healthScore": 66,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "In a bowl, wash the snails with lime and salt till all the slime is gone."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Place the snail in a pot with the chili powder, seasoning cubes, chopped garlic, 1/2 of the onion(chopped) and a pinch of salt and bring to boil for about 15-18 minutes.In a separate pot, place the tomatoes, bell pepper, scotch bonnet peppers, crush with a wooden spoon till some of the juices come out and bring to boil till they are all soft on low heat. (This helps to dry up some of the extra water from the tomatoes)In a pot, pour in your oil, cut your onions in rings and fry in the hot oil on medium heat."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Pour in your tomato-pepper mix and allow to fry for about 8-10 minutes on low heat."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Pour in the left-over stock from the snail and allow to cook for 5 more minutes on medium heat."
	// 		},
	// 		{
	// 			"number": 5,
	// 			"step": "Add your seasoning cubes and taste for salt."
	// 		},
	// 		{
	// 			"number": 6,
	// 			"step": "Add your snails and stir in and allow to stew for 2-4 minutes more on medium heat."
	// 		},
	// 		{
	// 			"number": 7,
	// 			"step": "Serve with Rice, Pasta, Plantain, Yams or Potatoes."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 660306,
	// 	"image": "https://spoonacular.com/recipeImages/660306-312x231.jpg",
	// 	"name": "Slow Cooker: Pork and Garbanzo Beans",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free"
	// 	],
	// 	"dishTypes": [
	// 		"lunch",
	// 		"main course",
	// 		"main dish",
	// 		"dinner"
	// 	],
	// 	"summary": "Slow Cooker: Pork and Garbanzo Beans takes approximately <b>45 minutes</b> from beginning to end. This recipe serves 6. This main course has <b>587 calories</b>, <b>66g of protein</b>, and <b>14g of fat</b> per serving. For <b>$2.99 per serving</b>, this recipe <b>covers 45%</b> of your daily requirements of vitamins and minerals. Head to the store and pick up water *2, cumin, pork should roast, and a few other things to make it today. This recipe is liked by 22 foodies and cooks. It is brought to you by Foodista. It is a good option if you're following a <b>gluten free and dairy free</b> diet. With a spoonacular <b>score of 96%</b>, this dish is outstanding. Similar recipes include <a href=\"https://spoonacular.com/recipes/slow-cooker-pork-and-beans-619424\">Slow Cooker Pork and Beans</a>, <a href=\"https://spoonacular.com/recipes/slow-cooker-pork-and-beans-1242889\">Slow Cooker Pork and Beans</a>, and <a href=\"https://spoonacular.com/recipes/slow-cooker-pork-and-beans-244959\">Slow Cooker Pork and Beans</a>.",
	// 	"healthScore": 100,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "In slow cooker layer in this order: pork, then garbanzo beans, onion, pour water over all."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Mix spices together and sprinkle over pork and beans. Cover. Set on low and cook for approximately 6 hours. The beans should be tender and creamy. The pork should fall very easily from the bone. The pork can be either shredded for cubed for your preference. *3Serving Suggestion: Scoop about 1 cup of beans with broth into a soup bowl. Top with shredded pork."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Add 1/4 of an avocado sliced, top with chopped fresh cilantro.NOTES:*1 The beans do not need to be soaked before adding to the slow cooker. They will be perfectly soft and creamy without pre-soaking.*2 Substitute the water for: 2 cups water and 1 bottle of good quality dark beer like Negra Modelo. You can also substitute the water for chicken stock or pork stock. Each of these substitutions will add an extra dimension of flavor.*3 If you want to shred the pork, it is easiest to do when the pork is hot. Use two forks to pull the pork apart and shred. If you want to slice the pork (like for sandwiches) it is best to do when the pork is cold."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Let the pork rest in the refrigerator for several hours or over night. Slice with a serrated knife or a very sharp chef knife."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 756814,
	// 	"image": "https://spoonacular.com/recipeImages/756814-312x231.jpg",
	// 	"name": "Powerhouse Almond Matcha Superfood Smoothie",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free"
	// 	],
	// 	"dishTypes": [
	// 		"morning meal",
	// 		"brunch",
	// 		"beverage",
	// 		"breakfast",
	// 		"drink"
	// 	],
	// 	"summary": "Powerhouse Almond Matcha Superfood Smoothie is a breakfast that serves 2. One serving contains <b>289 calories</b>, <b>11g of protein</b>, and <b>13g of fat</b>. For <b>$2.59 per serving</b>, this recipe <b>covers 27%</b> of your daily requirements of vitamins and minerals. If you have chia seeds, matcha tea powder, banana, and a few other ingredients on hand, you can make it. It is a good option if you're following a <b>gluten free, dairy free, and whole 30</b> diet. This recipe from Foodista has 80 fans. From preparation to the plate, this recipe takes around <b>10 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 98%</b>. This score is awesome. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/powerhouse-almond-matcha-superfood-smoothie-1244781\">Powerhouse Almond Matcha Superfood Smoothie</a>, <a href=\"https://spoonacular.com/recipes/chocolate-almond-superfood-smoothie-1600269\">Chocolate Almond Superfood Smoothie</a>, and <a href=\"https://spoonacular.com/recipes/powerhouse-golden-turmeric-smoothie-882363\">Powerhouse Golden Turmeric Smoothie</a>.",
	// 	"healthScore": 52,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "Combine all of the ingredients in a blender. Blend on high until smooth."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Serve immediately."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 715769,
	// 	"image": "https://spoonacular.com/recipeImages/715769-312x231.jpg",
	// 	"name": "Broccolini Quinoa Pilaf",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free",
	// 		"lacto ovo vegetarian",
	// 		"vegan"
	// 	],
	// 	"dishTypes": [
	// 		"side dish",
	// 		"lunch",
	// 		"main course",
	// 		"main dish",
	// 		"dinner"
	// 	],
	// 	"summary": "Broccolini Quinoa Pilaf requires approximately <b>30 minutes</b> from start to finish. For <b>$4.14 per serving</b>, you get a main course that serves 2. One portion of this dish contains around <b>20g of protein</b>, <b>31g of fat</b>, and a total of <b>625 calories</b>. Head to the store and pick up vegetable broth, onion, olive oil, and a few other things to make it today. A few people made this recipe, and 94 would say it hit the spot. It is a <b>rather expensive</b> recipe for fans of Mediterranean food. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. It is brought to you by Pick Fresh Foods. With a spoonacular <b>score of 98%</b>, this dish is excellent. Similar recipes are <a href=\"https://spoonacular.com/recipes/spring-broccolini-kale-quinoa-bowls-734866\">Spring Broccolini & Kale Quinoa Bowls</a>, <a href=\"https://spoonacular.com/recipes/orange-sesame-salmon-with-quinoa-broccolini-839832\">Orange-Sesame Salmon with Quinoa & Broccolini</a>, and <a href=\"https://spoonacular.com/recipes/black-pepper-goat-cheese-and-chard-quinoa-with-roasted-broccolini-625829\">Black Pepper Goat Cheese and Chard Quinoa with Roasted Broccolini</a>.",
	// 	"healthScore": 74,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "In a large pan with lid heat olive oil over medium high heat."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Add onions and cook for 1 minute."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Add garlic and cook until onions are translucent and garlic is fragrant."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Add quinoa to pan, stir to combine. Slowly add in broth and bring to a boil.Cover and reduce heat to low, cook for 15 minutes.In the last 2-3 minutes of cooking add in broccolini on top of the quinoa (do not stir) and cover.Uncover and toss broccolini and quinoa together.Season to taste with salt and pepper."
	// 		},
	// 		{
	// 			"number": 5,
	// 			"step": "Add walnuts and serve hot."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 642129,
	// 	"image": "https://spoonacular.com/recipeImages/642129-312x231.jpg",
	// 	"name": "Easy To Make Spring Rolls",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free",
	// 		"pescatarian"
	// 	],
	// 	"dishTypes": [
	// 		"fingerfood",
	// 		"antipasti",
	// 		"starter",
	// 		"snack",
	// 		"appetizer",
	// 		"antipasto",
	// 		"hor d'oeuvre"
	// 	],
	// 	"summary": "If you want to add more <b>gluten free, dairy free, and pescatarian</b> recipes to your collection, Easy To Make Spring Rolls might be a recipe you should try. For <b>$3.78 per serving</b>, you get a hor d'oeuvre that serves 4. One serving contains <b>162 calories</b>, <b>13g of protein</b>, and <b>2g of fat</b>. 22 people found this recipe to be flavorful and satisfying. From preparation to the plate, this recipe takes about <b>45 minutes</b>. It can be enjoyed any time, but it is especially good for <b>Spring</b>. This recipe from Foodista requires mint leaves, garlic, chili pepper, and rice vinegar. This recipe is typical of Vietnamese cuisine. Overall, this recipe earns a <b>tremendous spoonacular score of 88%</b>. <a href=\"https://spoonacular.com/recipes/easy-to-make-spring-rolls-1262689\">Easy To Make Spring Rolls</a>, <a href=\"https://spoonacular.com/recipes/easy-to-make-spring-rolls-1218889\">Easy To Make Spring Rolls</a>, and <a href=\"https://spoonacular.com/recipes/easy-to-make-spring-rolls-1531113\">Easy To Make Spring Rolls</a> are very similar to this recipe.",
	// 	"healthScore": 100,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "Have all the ingredients ready for assembly. In a large bowl filled with water, dip a wrapper in the water. The rice wrapper will begin to soften and this is your cue to remove it from the water and lay it flat."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Place 2 shrimp halves in a row across the center and top with basil, mint, cilantro and lettuce. Leave about 1 to 2 inches uncovered on each side.  Fold uncovered sides inward, then tightly roll the wrapper, beginning at the end with the lettuce.  Repeat with remaining wrappers and ingredients."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Cut and serve at room temperature with dipping sauce.The Culinary Chases Note: The rice wrapper can be fussy to handle if you let it soak too long. I usually give it a couple of swishes in the water and then remove. It may feel slightly stiff but by the time you are ready to roll up, the wrapper will become very pliable.  A typical spring roll contains cooked rice vermicelli, slivers of cooked pork and julienned carrots but you can use whatever suits your fancy.  Enjoy!"
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 642605,
	// 	"image": "https://spoonacular.com/recipeImages/642605-312x231.jpg",
	// 	"name": "Farro With Mushrooms and Asparagus",
	// 	"diets": [
	// 		"dairy free",
	// 		"lacto ovo vegetarian"
	// 	],
	// 	"dishTypes": [
	// 		"side dish"
	// 	],
	// 	"summary": "Farro With Mushrooms and Asparagus is a <b>dairy free and lacto ovo vegetarian</b> recipe with 4 servings. One serving contains <b>365 calories</b>, <b>12g of protein</b>, and <b>9g of fat</b>. For <b>$3.94 per serving</b>, this recipe <b>covers 23%</b> of your daily requirements of vitamins and minerals. This recipe is liked by 47 foodies and cooks. From preparation to the plate, this recipe takes around <b>1 hour and 15 minutes</b>. It works well as a side dish. If you have asparagus, garlic, porcini mushrooms, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. With a spoonacular <b>score of 98%</b>, this dish is awesome. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/farro-risotto-with-wild-mushrooms-and-asparagus-495316\">Farro Risotto with Wild Mushrooms and Asparagus</a>, <a href=\"https://spoonacular.com/recipes/farro-with-asparagus-hazelnuts-and-kale-topped-with-roasted-mushrooms-298005\">Farro with Asparagus, Hazelnuts and Kale Topped with Roasted Mushrooms</a>, and <a href=\"https://spoonacular.com/recipes/farro-and-porcini-mushrooms-farro-con-funghi-40485\">Farro And Porcini Mushrooms (farro Con Funghi)</a>.",
	// 	"healthScore": 80,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "In a small bowl, cover dried mushrooms with warm water.  Soak for 25 minutes, or until softened."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Drain the mushrooms, and discard the soaking water.  Chop finely.Bring a large pot of water to a boil."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Add farro, and cook for 10 minutes, stirring occasionally."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Drain and reserve.In a large skillet, over medium heat, heat the olive oil, and add onion, garlic, thyme, and mushrooms.Cook, stirring occasionally, for 5 minutes or until onions are tender.Stir in 2 tablespoons of sherry vinegar, and continue cooking for 1 minute."
	// 		},
	// 		{
	// 			"number": 5,
	// 			"step": "Add chicken stock, and bring it to a boil.Stir in farro, and return to a boil.Lower the heat to a simmer, and cover with a tight fitting lid.  Cook for 10 minutes."
	// 		},
	// 		{
	// 			"number": 6,
	// 			"step": "Add asparagus, and cook, covered, for an additional 10 minutes.Season with 1 tablespoon sherry vinegar, salt and pepper."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 636589,
	// 	"image": "https://spoonacular.com/recipeImages/636589-312x231.jpg",
	// 	"name": "Butternut Squash Frittata",
	// 	"diets": [
	// 		"gluten free"
	// 	],
	// 	"dishTypes": [
	// 		"lunch",
	// 		"main course",
	// 		"morning meal",
	// 		"brunch",
	// 		"main dish",
	// 		"breakfast",
	// 		"dinner"
	// 	],
	// 	"summary": "The recipe Butternut Squash Frittata can be made <b>in approximately 45 minutes</b>. This recipe serves 1. Watching your figure? This gluten free recipe has <b>465 calories</b>, <b>24g of protein</b>, and <b>4g of fat</b> per serving. For <b>$3.4 per serving</b>, this recipe <b>covers 53%</b> of your daily requirements of vitamins and minerals. A few people really liked this main course. This recipe from Foodista requires butternut squash, bell pepper, liquid egg substitute, and non-fat milk. 18 people have tried and liked this recipe. Overall, this recipe earns an <b>awesome spoonacular score of 98%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/butternut-squash-frittata-750335\">Butternut Squash Frittata</a>, <a href=\"https://spoonacular.com/recipes/butternut-squash-frittata-1225935\">Butternut Squash Frittata</a>, and <a href=\"https://spoonacular.com/recipes/butternut-squash-and-quinoa-frittata-1313179\">Butternut Squash and Quinoa Frittata</a>.",
	// 	"healthScore": 100,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "Preheat oven to 350Spray a 10 oz oven safe dish with cooking spray"
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Add your butternut squash"
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "In a measuring cup add your eggs and milk."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Mix until combined."
	// 		},
	// 		{
	// 			"number": 5,
	// 			"step": "Pour over butternut squash."
	// 		},
	// 		{
	// 			"number": 6,
	// 			"step": "Sprinkle with pepper and top with cheese."
	// 		},
	// 		{
	// 			"number": 7,
	// 			"step": "Bake in oven for 30-35 minutes, until middle is slightly firm"
	// 		},
	// 		{
	// 			"number": 8,
	// 			"step": "Let it cool for a few minutes"
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 646738,
	// 	"image": "https://spoonacular.com/recipeImages/646738-312x231.jpg",
	// 	"name": "Herbivoracious' White Bean and Kale Soup",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free",
	// 		"lacto ovo vegetarian",
	// 		"vegan"
	// 	],
	// 	"dishTypes": [
	// 		"lunch",
	// 		"soup",
	// 		"main course",
	// 		"main dish",
	// 		"dinner"
	// 	],
	// 	"summary": "Herbivoracious' White Bean and Kale Soup might be a good recipe to expand your main course recipe box. One serving contains <b>332 calories</b>, <b>17g of protein</b>, and <b>10g of fat</b>. This recipe serves 6 and costs 78 cents per serving. 10 people were impressed by this recipe. It will be a hit at your <b>Autumn</b> event. Head to the store and pick up juice of lemon, carrot, dinosaur kale, and a few other things to make it today. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 94%</b>. This score is tremendous. <a href=\"https://spoonacular.com/recipes/kale-and-white-bean-soup-1214347\">Kale And White Bean Soup</a>, <a href=\"https://spoonacular.com/recipes/white-bean-and-kale-soup-15247\">White Bean And Kale Soup</a>, and <a href=\"https://spoonacular.com/recipes/white-bean-kale-soup-1571259\">White Bean Kale Soup</a> are very similar to this recipe.",
	// 	"healthScore": 100,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "PRESSURE COOKER METHOD"
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "In the pressure cooker base, but without pressure, heat the olive oil over medium-high heat. Saut the onion, garlic, carrot, and 1 teaspoon salt until the onion is translucent, about 4 minutes."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Add the bay leaves, rosemary, and your choice(s) of the Parmesan rind, dried porcini, or broth powder."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Add the dry beans and water. Bring up to high pressure and cook for 40 minutes, then allow the pressure to release naturally. Open the lid."
	// 		},
	// 		{
	// 			"number": 5,
	// 			"step": "Remove the bay leaves and Parmesan rind, if using."
	// 		},
	// 		{
	// 			"number": 6,
	// 			"step": "Add the kale and lemon juice and simmer for 10 minutes, until the kale is tender. Taste and adjust the seasoning, then serve, garnished with a generous drizzle of extra-virgin olive oil."
	// 		},
	// 		{
	// 			"number": 7,
	// 			"step": "STOVETOP METHOD"
	// 		},
	// 		{
	// 			"number": 8,
	// 			"step": "Cover the beans with several inches of water and soak overnight."
	// 		},
	// 		{
	// 			"number": 9,
	// 			"step": "Drain the beans and place in a large saucepan. Cover with water by at least 2 inches and bring to a boil. Reduce the heat and simmer the beans until tender, about 1 1/2 to 2 hours."
	// 		},
	// 		{
	// 			"number": 10,
	// 			"step": "Drain the beans, reserving the bean broth."
	// 		},
	// 		{
	// 			"number": 11,
	// 			"step": "In a large saucepan, heat the olive oil over medium-high heat. Saut the onion, garlic, carrot, and 1 teaspoon salt until the onion is translucent, about 4 minutes."
	// 		},
	// 		{
	// 			"number": 12,
	// 			"step": "Add 4 cups of the bean broth, the bay leaves, rosemary, and your choice of the Parmesan rind, dried porcini, or broth powder. Bring to a simmer and cook for 30 minutes."
	// 		},
	// 		{
	// 			"number": 13,
	// 			"step": "Remove the bay leaves and Parmesan rind, if using."
	// 		},
	// 		{
	// 			"number": 14,
	// 			"step": "Add the beans, kale, and lemon juice and simmer for 10 minutes, until the kale is tender. Taste and adjust the seasoning, then serve, garnished with a generous drizzle of extra-virgin olive oil."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 715540,
	// 	"image": "https://spoonacular.com/recipeImages/715540-312x231.jpg",
	// 	"name": "Summer Berry Salad",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free",
	// 		"paleolithic",
	// 		"lacto ovo vegetarian",
	// 		"primal",
	// 		"vegan"
	// 	],
	// 	"dishTypes": [
	// 		"side dish",
	// 		"antipasti",
	// 		"salad",
	// 		"starter",
	// 		"snack",
	// 		"appetizer",
	// 		"antipasto",
	// 		"hor d'oeuvre"
	// 	],
	// 	"summary": "Summer Berry Salad might be a good recipe to expand your hor d'oeuvre recipe box. This recipe serves 1. One portion of this dish contains around <b>2g of protein</b>, <b>1g of fat</b>, and a total of <b>98 calories</b>. For <b>$1.75 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. A mixture of strawberries, blackberries, basalmic vinaigrette, and a handful of other ingredients are all it takes to make this recipe so yummy. It is a good option if you're following a <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> diet. 17 people have tried and liked this recipe. It is perfect for <b>The Fourth Of July</b>. From preparation to the plate, this recipe takes about <b>45 minutes</b>. It is brought to you by Pink When. All things considered, we decided this recipe <b>deserves a spoonacular score of 98%</b>. This score is amazing. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/berry-summer-salad-50848\">Berry Summer Salad</a>, <a href=\"https://spoonacular.com/recipes/summer-berry-salad-485592\">Summer Berry Salad</a>, and <a href=\"https://spoonacular.com/recipes/chicken-berry-summer-salad-769303\">Chicken & Berry Summer Salad</a>.",
	// 	"healthScore": 95,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "Cut up a Granny Smith green apple, strawberries, and add blackberries"
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Mix in with Romaine lettuce"
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Toss in some basalmic vinaigrette"
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 663559,
	// 	"image": "https://spoonacular.com/recipeImages/663559-312x231.jpg",
	// 	"name": "Tomato and lentil soup",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free",
	// 		"lacto ovo vegetarian",
	// 		"vegan"
	// 	],
	// 	"dishTypes": [
	// 		"lunch",
	// 		"soup",
	// 		"main course",
	// 		"main dish",
	// 		"dinner"
	// 	],
	// 	"summary": "Tomato and lentil soup might be a good recipe to expand your main course recipe box. This recipe makes 4 servings with <b>340 calories</b>, <b>18g of protein</b>, and <b>8g of fat</b> each. For <b>$1.16 per serving</b>, this recipe <b>covers 34%</b> of your daily requirements of vitamins and minerals. It is perfect for <b>Autumn</b>. This recipe from Foodista requires bay leaf, onion, garlic, and carrots. 11 person were glad they tried this recipe. From preparation to the plate, this recipe takes about <b>45 minutes</b>. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. With a spoonacular <b>score of 96%</b>, this dish is great. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/tomato-and-lentil-soup-482854\">Tomato and Lentil Soup</a>, <a href=\"https://spoonacular.com/recipes/lentil-tomato-soup-398380\">Lentil-Tomato Soup</a>, and <a href=\"https://spoonacular.com/recipes/lentil-tomato-soup-108370\">Lentil & Tomato Soup</a>.",
	// 	"healthScore": 100,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "Saut onion and garlic in olive oil for 5 minutes."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Add the carrot, saut for another 2 minutes."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Add tomatoes, bay leaf and water, stir and bring to the boil."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Stir in lentils, season with salt and cook for 5 minutes."
	// 		},
	// 		{
	// 			"number": 5,
	// 			"step": "Before serving sprinkle with chopped parsley."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 662670,
	// 	"image": "https://spoonacular.com/recipeImages/662670-312x231.jpg",
	// 	"name": "Swiss Chard Wraps",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free",
	// 		"paleolithic",
	// 		"lacto ovo vegetarian",
	// 		"primal",
	// 		"vegan"
	// 	],
	// 	"dishTypes": [
	// 		"side dish"
	// 	],
	// 	"summary": "Swiss Chard Wraps is a <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> recipe with 6 servings. One serving contains <b>137 calories</b>, <b>4g of protein</b>, and <b>11g of fat</b>. For <b>82 cents per serving</b>, this recipe <b>covers 18%</b> of your daily requirements of vitamins and minerals. It works best as a side dish, and is done in about <b>45 minutes</b>. 14 people were impressed by this recipe. If you have swiss chard leaves, orange cauliflower, olive oil, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. Overall, this recipe earns an <b>excellent spoonacular score of 96%</b>. <a href=\"https://spoonacular.com/recipes/swiss-chard-wraps-1367505\">Swiss Chard Wraps</a>, <a href=\"https://spoonacular.com/recipes/sweet-thai-chile-chicken-swiss-chard-wraps-with-peanut-ginger-sauce-703915\">Sweet Thai Chile Chicken Swiss Chard Wraps with Peanut Ginger Sauce</a>, and <a href=\"https://spoonacular.com/recipes/swiss-chard-353815\">Swiss Chard</a> are very similar to this recipe.",
	// 	"healthScore": 90,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "Chop off the stems of the swiss chard at the point where it meets the leaf. You could stem the swiss chard entirely. I like leaving a bit of stem with the leaves to give better structure to the wraps."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Chop the cauliflower into small pieces and pulse them in a food processor until it looks like rice. I usually pulse the cauliflower florets and the stalk together."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Place the olive oil in a saut pan over medium-high heat. Once the pan is hot, add the garlic and let it fry for about a minute or two, or until the garlic starts to brown."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Add the pulsed cauliflower rice and cook it for about 2-3 minutes. The cauliflower should turn into a vibrant yellow-orange color when it is cooked."
	// 		},
	// 		{
	// 			"number": 5,
	// 			"step": "Add a pinch of salt and chopped basil to the cauliflower and stir."
	// 		},
	// 		{
	// 			"number": 6,
	// 			"step": "Spiralize the zucchini with Blade B to create zucchini noodles. If you do not have a spiralizer, just create zucchini ribbons with a vegetable peeler."
	// 		},
	// 		{
	// 			"number": 7,
	// 			"step": "To assemble the wraps, place a large leaf flat down."
	// 		},
	// 		{
	// 			"number": 8,
	// 			"step": "Add a bit of sauted cauliflower, zucchini noodles, red pepper, and avocado along the swiss chard stalk."
	// 		},
	// 		{
	// 			"number": 9,
	// 			"step": "Drizzle a bit of vinaigrette on top of the vegetables and wrap everything up."
	// 		},
	// 		{
	// 			"number": 10,
	// 			"step": "Enjoy these wraps as a side to your favorite protein! Feel free to dip these wraps in more sauce."
	// 		},
	// 		{
	// 			"number": 11,
	// 			"step": "These wraps are best consumed when they are freshly made. Refrigerate any leftovers in an airtight container."
	// 		}
	// 	],
	// 	"created": false
	// },],
	// allRecipes:[{
	// 	"id": 782585,
	// 	"image": "https://spoonacular.com/recipeImages/782585-312x231.jpg",
	// 	"name": "Cannellini Bean and Asparagus Salad with Mushrooms",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free",
	// 		"lacto ovo vegetarian",
	// 		"vegan"
	// 	],
	// 	"dishTypes": [
	// 		"side dish",
	// 		"lunch",
	// 		"main course",
	// 		"salad",
	// 		"main dish",
	// 		"dinner"
	// 	],
	// 	"summary": "Cannellini Bean and Asparagus Salad with Mushrooms requires approximately <b>45 minutes</b> from start to finish. This main course has <b>482 calories</b>, <b>31g of protein</b>, and <b>6g of fat</b> per serving. This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe serves 6 and costs <b>$1.35 per serving</b>. 309 people were impressed by this recipe. Head to the store and pick up grain mustard, sea salt, lemon zest, and a few other things to make it today. It is brought to you by foodandspice.blogspot.com. Taking all factors into account, this recipe <b>earns a spoonacular score of 70%</b>, which is pretty good. Similar recipes are <a href=\"https://spoonacular.com/recipes/cannellini-bean-salad-422994\">Cannellini Bean Salad</a>, <a href=\"https://spoonacular.com/recipes/refreshing-cannellini-bean-salad-113127\">Refreshing Cannellini Bean Salad</a>, and <a href=\"https://spoonacular.com/recipes/cannellini-and-green-bean-salad-33177\">Cannellini-and-Green Bean Salad</a>.",
	// 	"healthScore": 100,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "Rinse the cannellini beans and soak for 8 hours or overnight in several inches of water."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Drain and rinse, then transfer to a medium saucepan and cover with fresh water."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Add the curry leaves or bay leaf and bring to a boil. Reduce heat to medium-low, cover, and simmer for 1 hour or until the beans are tender but not falling apart."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Drain and transfer to a large salad bowl.Meanwhile, snap the woody ends off of the asparagus spears and steam the spears for 6 minutes or until just tender but still retaining their crunch."
	// 		},
	// 		{
	// 			"number": 5,
	// 			"step": "Transfer to the salad bowl.Now cook the mushrooms."
	// 		},
	// 		{
	// 			"number": 6,
	// 			"step": "Heat the oil in a large skillet over high heat. As soon as the oil is hot, drop in the mushrooms and cook, stirring constantly, for 5 minutes or until the mushrooms begin to brown and lose some of their liquid."
	// 		},
	// 		{
	// 			"number": 7,
	// 			"step": "Transfer to the bowl with the asparagus.To make the dressing, combine the tarragon, lemon zest, garlic, lemon juice, olive oil and mustard in a small food processor or blender. Process until smooth."
	// 		},
	// 		{
	// 			"number": 8,
	// 			"step": "Pour the dressing over the salad, season with salt and pepper, and toss."
	// 		},
	// 		{
	// 			"number": 9,
	// 			"step": "Serve at room temperature or chilled."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 716426,
	// 	"image": "https://spoonacular.com/recipeImages/716426-312x231.jpg",
	// 	"name": "Cauliflower, Brown Rice, and Vegetable Fried Rice",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free",
	// 		"lacto ovo vegetarian",
	// 		"vegan"
	// 	],
	// 	"dishTypes": [
	// 		"side dish",
	// 		"antipasti",
	// 		"starter",
	// 		"snack",
	// 		"appetizer",
	// 		"antipasto",
	// 		"hor d'oeuvre"
	// 	],
	// 	"summary": "You can never have too many Chinese recipes, so give Cauliflower, Brown Rice, and Vegetable Fried Rice a try. This recipe serves 8 and costs $1.12 per serving. This hor d'oeuvre has <b>192 calories</b>, <b>7g of protein</b>, and <b>6g of fat</b> per serving. Head to the store and pick up broccoli, sesame seeds, soy sauce, and a few other things to make it today. 3689 people were impressed by this recipe. It is brought to you by fullbellysisters.blogspot.com. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. From preparation to the plate, this recipe takes roughly <b>30 minutes</b>. Overall, this recipe earns a <b>spectacular spoonacular score of 100%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1584601\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>, <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1238897\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>, and <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1230097\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>.",
	// 	"healthScore": 75,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "Remove the cauliflower's tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of \"cauliflower rice.\""
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Heat 1T butter and 1T oil in a large skillet over medium heat."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Add garlic and the white and light green pieces of scallion. Sauté about a minute."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Add the cauliflower to the pan. Stir to coat with oil, then spread out in pan and let sit; you want it cook a bit and to caramelize (get a bit brown), which will bring out the sweetness. After a couple of minutes, stir and spread out again."
	// 		},
	// 		{
	// 			"number": 5,
	// 			"step": "Add cold rice (it separates easily, so it won't clump up during cooking), plus the additional grapeseed and coconut oil or butter. Raise heat to medium-high. Toss everything together and, again, spread the mixture out over the whole pan and press a bit into the bottom."
	// 		},
	// 		{
	// 			"number": 6,
	// 			"step": "Let it sit for about two minutes—so the rice can get toasted and a little crispy."
	// 		},
	// 		{
	// 			"number": 7,
	// 			"step": "Add the peas and broccoli and stir again."
	// 		},
	// 		{
	// 			"number": 8,
	// 			"step": "Drizzle soy sauce and toasted sesame oil over rice.Cook for another minute or so and turn off heat."
	// 		},
	// 		{
	// 			"number": 9,
	// 			"step": "Add chopped scallion tops and toss.I like to toast some sesame seeds in a dry pan; I sprinkle these and some more raw, chopped scallion over the top of the rice for added flavor and crunch.Season to taste with salt and, if you'd like, more soy sauce. Keep in mind that if you're serving this with something salty and saucy (ie. teriyaki chicken) you may want to hold off on adding too much salt to the fried rice."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 715497,
	// 	"image": "https://spoonacular.com/recipeImages/715497-312x231.jpg",
	// 	"name": "Berry Banana Breakfast Smoothie",
	// 	"diets": [
	// 		"lacto ovo vegetarian"
	// 	],
	// 	"dishTypes": [
	// 		"morning meal",
	// 		"brunch",
	// 		"beverage",
	// 		"breakfast",
	// 		"drink"
	// 	],
	// 	"summary": "If you want to add more <b>lacto ovo vegetarian</b> recipes to your recipe box, Berry Banana Breakfast Smoothie might be a recipe you should try. One portion of this dish contains about <b>21g of protein</b>, <b>10g of fat</b>, and a total of <b>457 calories</b>. This recipe serves 1 and costs $2.07 per serving. 689 people have tried and liked this recipe. It works well as a rather inexpensive breakfast. A mixture of banana, graham cracker crumbs, vanilla yogurt, and a handful of other ingredients are all it takes to make this recipe so yummy. From preparation to the plate, this recipe takes roughly <b>5 minutes</b>. It is brought to you by Pink When. Overall, this recipe earns a <b>super spoonacular score of 99%</b>. Similar recipes include <a href=\"https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-1364145\">Berry Banana Breakfast Smoothie</a>, <a href=\"https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-1405583\">Berry Banana Breakfast Smoothie</a>, and <a href=\"https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-1601311\">Berry Banana Breakfast Smoothie</a>.",
	// 	"healthScore": 64,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "Take some yogurt in your favorite flavor and add 1 container to your blender."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Add in the berries, banana, and soy milk and blend. Top your glass with a few graham cracker crumbs and serve."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 715415,
	// 	"image": "https://spoonacular.com/recipeImages/715415-312x231.jpg",
	// 	"name": "Red Lentil Soup with Chicken and Turnips",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free"
	// 	],
	// 	"dishTypes": [
	// 		"lunch",
	// 		"soup",
	// 		"main course",
	// 		"main dish",
	// 		"dinner"
	// 	],
	// 	"summary": "Red Lentil Soup with Chicken and Turnips might be a good recipe to expand your main course repertoire. This recipe serves 8 and costs $3.0 per serving. One serving contains <b>477 calories</b>, <b>27g of protein</b>, and <b>20g of fat</b>. It is brought to you by Pink When. 1866 people have tried and liked this recipe. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. From preparation to the plate, this recipe takes approximately <b>55 minutes</b>. It is a good option if you're following a <b>gluten free and dairy free</b> diet. Head to the store and pick up salt and pepper, canned tomatoes, flat leaf parsley, and a few other things to make it today. Overall, this recipe earns a <b>spectacular spoonacular score of 99%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/red-lentil-and-chicken-soup-682185\">Red Lentil and Chicken Soup</a>, <a href=\"https://spoonacular.com/recipes/red-lentil-and-chicken-soup-1058971\">Red Lentil and Chicken Soup</a>, and <a href=\"https://spoonacular.com/recipes/red-lentil-soup-34121\">Red-Lentil Soup</a>.",
	// 	"healthScore": 100,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "To a large dutch oven or soup pot, heat the olive oil over medium heat."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Add the onion, carrots and celery and cook for 8-10 minutes or until tender, stirring occasionally."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Add the garlic and cook for an additional 2 minutes, or until fragrant. Season conservatively with a pinch of salt and black pepper.To the pot, add the tomatoes, turnip and red lentils. Stir to combine. Stir in the vegetable stock and increase the heat on the stove to high. Bring the soup to a boil and then reduce to a simmer. Simmer for 20 minutes or until the turnips are tender and the lentils are cooked through."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Add the chicken breast and parsley. Cook for an additional 5 minutes. Adjust seasoning to taste."
	// 		},
	// 		{
	// 			"number": 5,
	// 			"step": "Serve the soup immediately garnished with fresh parsley and any additional toppings. Enjoy!"
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 716406,
	// 	"image": "https://spoonacular.com/recipeImages/716406-312x231.jpg",
	// 	"name": "Asparagus and Pea Soup: Real Convenience Food",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free",
	// 		"paleolithic",
	// 		"lacto ovo vegetarian",
	// 		"primal",
	// 		"vegan"
	// 	],
	// 	"dishTypes": [
	// 		"antipasti",
	// 		"soup",
	// 		"starter",
	// 		"snack",
	// 		"appetizer",
	// 		"antipasto",
	// 		"hor d'oeuvre"
	// 	],
	// 	"summary": "Asparagus and Pea Soup: Real Convenience Food requires approximately <b>20 minutes</b> from start to finish. Watching your figure? This gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe has <b>217 calories</b>, <b>11g of protein</b>, and <b>8g of fat</b> per serving. This recipe serves 2. For <b>$1.78 per serving</b>, this recipe <b>covers 25%</b> of your daily requirements of vitamins and minerals. <b>Autumn</b> will be even more special with this recipe. It works well as a hor d'oeuvre. 207 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. A mixture of vegetable broth, evoo, garlic, and a handful of other ingredients are all it takes to make this recipe so yummy. All things considered, we decided this recipe <b>deserves a spoonacular score of 96%</b>. This score is outstanding. Try <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1393979\">Asparagus and Pea Soup: Real Convenience Food</a>, <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1376201\">Asparagus and Pea Soup: Real Convenience Food</a>, and <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1362341\">Asparagus and Pea Soup: Real Convenience Food</a> for similar recipes.",
	// 	"healthScore": 100,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "Chop the garlic and onions."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Saute the onions in the EVOO, adding the garlic after a couple of minutes; cook until the onions are translucent."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Add the whole bag of asparagus and cover everything with the broth. Season with salt and pepper and a pinch of red pepper flakes, if using.Simmer until the asparagus is bright green and tender (if you've thawed the asparagus it will only take a couple of minutes). Turn off the heat and puree using an immersion blender."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Add peas (the heat of the soup will quickly thaw them) and puree until smooth; add more until it reaches the thickness you like.Top with chives and a small dollop of creme fraiche or sour cream or greek yogurt."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 644387,
	// 	"image": "https://spoonacular.com/recipeImages/644387-312x231.jpg",
	// 	"name": "Garlicky Kale",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free",
	// 		"paleolithic",
	// 		"lacto ovo vegetarian",
	// 		"primal",
	// 		"whole 30",
	// 		"vegan"
	// 	],
	// 	"dishTypes": [
	// 		"side dish"
	// 	],
	// 	"summary": "Garlicky Kale requires approximately <b>45 minutes</b> from start to finish. This side dish has <b>170 calories</b>, <b>2g of protein</b>, and <b>15g of fat</b> per serving. This recipe serves 2. For <b>69 cents per serving</b>, this recipe <b>covers 17%</b> of your daily requirements of vitamins and minerals. 19 people have made this recipe and would make it again. This recipe from Foodista requires balsamic vinegar, garlic, curly kale, and olive oil. It is a good option if you're following a <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> diet. With a spoonacular <b>score of 99%</b>, this dish is outstanding. Try <a href=\"https://spoonacular.com/recipes/garlicky-kale-248759\">Garlicky Kale</a>, <a href=\"https://spoonacular.com/recipes/garlicky-kale-1267347\">Garlicky Kale</a>, and <a href=\"https://spoonacular.com/recipes/garlicky-kale-1584523\">Garlicky Kale</a> for similar recipes.",
	// 	"healthScore": 83,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "Heat the olive oil in a large pot over medium heat."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Add the kale and cover.Stir occasionally until the volume of the kale is reduced by half. Uncover."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Add garlic and basalmic.Allow to cook for about another 30 seconds or so, mixing well so that the garlic and vinegar are well distributed."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Serve hot."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 715446,
	// 	"image": "https://spoonacular.com/recipeImages/715446-312x231.jpg",
	// 	"name": "Slow Cooker Beef Stew",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free"
	// 	],
	// 	"dishTypes": [
	// 		"lunch",
	// 		"soup",
	// 		"main course",
	// 		"main dish",
	// 		"dinner"
	// 	],
	// 	"summary": "If you want to add more <b>gluten free and dairy free</b> recipes to your recipe box, Slow Cooker Beef Stew might be a recipe you should try. One serving contains <b>434 calories</b>, <b>44g of protein</b>, and <b>12g of fat</b>. This recipe serves 6. For <b>$2.7 per serving</b>, this recipe <b>covers 45%</b> of your daily requirements of vitamins and minerals. It works best as a main course, and is done in approximately <b>8 hours and 10 minutes</b>. If you have green onions, carrots, celery, and a few other ingredients on hand, you can make it. This recipe is liked by 57 foodies and cooks. <b>Autumn</b> will be even more special with this recipe. It is brought to you by Pink When. Taking all factors into account, this recipe <b>earns a spoonacular score of 99%</b>, which is awesome. Similar recipes include <a href=\"https://spoonacular.com/recipes/slow-cooker-beef-stew-1578321\">Slow Cooker Beef Stew</a>, <a href=\"https://spoonacular.com/recipes/slow-cooker-beef-stew-1241707\">Slow Cooker Beef Stew</a>, and <a href=\"https://spoonacular.com/recipes/slow-cooker-beef-stew-1281171\">Slow Cooker Beef Stew</a>.",
	// 	"healthScore": 100,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "To get started, heat your slow cooker to low."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Pour in the cream of mushroom soup, Dale's seasoning, water, and beef broth and stir until mixed well."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Add in your stew meat, potatoes, onions, carrots, celery, and green onions. Stir well until covered and cook on low for 8 hours. You can add salt and pepper as desired, but the flavors and the Dale's marry together so well that you probably won’t need them."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 782601,
	// 	"image": "https://spoonacular.com/recipeImages/782601-312x231.jpg",
	// 	"name": "Red Kidney Bean Jambalaya",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free",
	// 		"lacto ovo vegetarian",
	// 		"vegan"
	// 	],
	// 	"dishTypes": [
	// 		"lunch",
	// 		"main course",
	// 		"main dish",
	// 		"dinner"
	// 	],
	// 	"summary": "Red Kidney Bean Jambalayan is a main course that serves 6. One portion of this dish contains approximately <b>18g of protein</b>, <b>6g of fat</b>, and a total of <b>393 calories</b>. For <b>$1.68 per serving</b>, this recipe <b>covers 33%</b> of your daily requirements of vitamins and minerals. 53 people were glad they tried this recipe. A mixture of vegetable stock, tomatoes, onion, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. This recipe is typical of Cajun cuisine. It is brought to you by foodandspice.blogspot.com. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. Overall, this recipe earns a <b>tremendous spoonacular score of 99%</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/red-kidney-bean-jambalaya-1407231\">Red Kidney Bean Jambalaya</a>, <a href=\"https://spoonacular.com/recipes/red-kidney-bean-salad-94525\">Red Kidney Bean Salad</a>, and <a href=\"https://spoonacular.com/recipes/red-kidney-bean-curry-80686\">Red Kidney Bean Curry</a>.",
	// 	"healthScore": 96,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "Rinse the kidney beans and brown rice separately. Cover the kidney beans with water and soak for 8 hours or overnight. In a separate bowl, cover the brown rice with water and soak for 8 hours or overnight."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Drain and rinse the kidney beans, then transfer to a medium saucepan and cover with fresh water. Bring to a boil, reduce heat to medium-low, cover, and simmer for 1 hour or until just tender but not falling apart."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Drain and set aside."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Heat the oil in a large saucepan over medium heat. When hot, add the onion and saut for 5 minutes. Now add the garlic, carrots, celery and green beans, and stir for another 5 minutes. Next add the tomatoes, red pepper, eggplant, sage, thyme, marjoram and celery seed, and continue to stir for another few minutes."
	// 		},
	// 		{
	// 			"number": 5,
	// 			"step": "Pour in the vegetable stock, liquid smoke, rice and the cooked kidney beans. Bring to a boil, reduce heat to medium low, cover, and cook, stirring occasionally, for 45 minutes or until the rice is tender."
	// 		},
	// 		{
	// 			"number": 6,
	// 			"step": "Add water as necessary if the stew becomes too dry.Season with sriracha, salt and pepper, and taste for seasoning  add more liquid smoke, sriracha, salt, pepper or herbs as desired."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 795751,
	// 	"image": "https://spoonacular.com/recipeImages/795751-312x231.jpg",
	// 	"name": "Chicken Fajita Stuffed Bell Pepper",
	// 	"diets": [
	// 		"gluten free"
	// 	],
	// 	"dishTypes": [
	// 		"lunch",
	// 		"main course",
	// 		"main dish",
	// 		"dinner"
	// 	],
	// 	"summary": "Chicken Fajita Stuffed Bell Pepper takes approximately <b>45 minutes</b> from beginning to end. Watching your figure? This gluten free recipe has <b>526 calories</b>, <b>50g of protein</b>, and <b>24g of fat</b> per serving. For <b>$4.35 per serving</b>, you get a main course that serves 3. 159 people have made this recipe and would make it again. This recipe is typical of Mexican cuisine. This recipe from Pink When requires cumin, cilantro, salsa, and chili powder. All things considered, we decided this recipe <b>deserves a spoonacular score of 98%</b>. This score is amazing. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/stuffed-bell-peppers-551310\">Stuffed Bell Peppers</a>, <a href=\"https://spoonacular.com/recipes/stuffed-bell-pepper-1348405\">Stuffed Bell Pepper</a>, and <a href=\"https://spoonacular.com/recipes/stuffed-bell-pepper-526845\">Stuffed Bell Pepper</a>.",
	// 	"healthScore": 85,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "To get started heat oven to 35"
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Mix salt, pepper, cilantro, cumin, chili powder, and quinoa together and place to the side."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Cut the bell pepper in half (if you havent already) and clean out the seeds."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Layer quinoa and then grilled chicken into the pepper, and then top each with cheese."
	// 		},
	// 		{
	// 			"number": 5,
	// 			"step": "Place in the oven for about 10 minutes until the bell pepper has softened.Chicken Fajita Stuffed Bell Pepper"
	// 		},
	// 		{
	// 			"number": 6,
	// 			"step": "Top with avocado and serve with shredded lettuce and salsa for a complete meal.This is SO GOOD! I love bell peppers, and I love all of these flavors that are married together that make this chicken fajita stuffed bell pepper so amazing. I could seriously just eat the flavored quinoa all by itself.If you are looking for even more delicious and healthy recipes, make sure you head over to the Simple Fit Forty tab under the cooking section of this blog. We have all of our favorite healthy recipes listed for you right there in one spot. You can also drool over out latest on the Simple Fit Forty Instagram page.If you are looking to get healthy and fit, come and join the super secret and awesome Simple Fit Forty Lifestyle community over on Facebook. We would love to have you join!"
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 766453,
	// 	"image": "https://spoonacular.com/recipeImages/766453-312x231.jpg",
	// 	"name": "Hummus and Za'atar",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free",
	// 		"lacto ovo vegetarian",
	// 		"vegan"
	// 	],
	// 	"dishTypes": [
	// 		"seasoning",
	// 		"marinade"
	// 	],
	// 	"summary": "You can never have too many middl eastern recipes, so give Hummus and Za'atar a try. This recipe serves 4. One portion of this dish contains about <b>34g of protein</b>, <b>31g of fat</b>, and a total of <b>778 calories</b>. For <b>$1.61 per serving</b>, this recipe <b>covers 44%</b> of your daily requirements of vitamins and minerals. If you have chickpeas, olive oil, sea salt, and a few other ingredients on hand, you can make it. It works best as a marinade, and is done in about <b>45 minutes</b>. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. 35 people have made this recipe and would make it again. It is brought to you by foodandspice.blogspot.com. Overall, this recipe earns a <b>great spoonacular score of 98%</b>. <a href=\"https://spoonacular.com/recipes/chopped-hummus-dip-with-zaatar-180958\">Chopped Hummus Dip with Za'atar</a>, <a href=\"https://spoonacular.com/recipes/mediterranean-hummus-toast-with-zaatar-1067472\">Mediterranean Hummus Toast with Za’atar</a>, and <a href=\"https://spoonacular.com/recipes/hummus-deviled-eggs-with-zaatar-exercise-challenge-1195539\">Hummus Deviled Eggs with Za’atar {Exercise Challenge}</a> are very similar to this recipe.",
	// 	"healthScore": 100,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "Rinse the chickpeas and soak for 8 hours or overnight in several inches of water."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Drain and rinse, then transfer to a medium saucepan and cover with fresh water. Bring to a boil, reduce heat to medium-low, cover, and simmer for 1 to 1 1/2 hours or until soft."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Drain, reserving the cooking liquid. (If using canned chickpeas, rinse thoroughly.)Meanwhile, toast the pine nuts in a dry unoiled skillet or saucepan over medium-low heat, tossing or stirring frequently, for 10 minutes or until lightly browned."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Transfer the chickpeas to a food processor and add the pine nuts, 2 tablespoons of olive oil, 1/4 cup of the reserved chickpea cooking liquid (or water if using canned chicpeas), the tahini, garlic, lemon juice and salt. Process until smooth, adding more of the reserved chickpea cooking liquid or water as necessary to reach a light creamy consistency. Taste for seasoning and add more salt or lemon juice as desired."
	// 		},
	// 		{
	// 			"number": 5,
	// 			"step": "Transfer the hummus to a shallow bowl and drizzle with olive oil."
	// 		},
	// 		{
	// 			"number": 6,
	// 			"step": "Sprinkle with za'atar and paprika, and serve with chopped fresh vegetables or toasted pita triangles.Refrigerate leftover hummus for a few days or freeze for up to a month."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 716627,
	// 	"image": "https://spoonacular.com/recipeImages/716627-312x231.jpg",
	// 	"name": "Easy Homemade Rice and Beans",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free",
	// 		"lacto ovo vegetarian",
	// 		"vegan"
	// 	],
	// 	"dishTypes": [
	// 		"side dish",
	// 		"lunch",
	// 		"main course",
	// 		"main dish",
	// 		"dinner"
	// 	],
	// 	"summary": "Easy Homemade Rice and Beans is a main course that serves 2. One serving contains <b>446 calories</b>, <b>19g of protein</b>, and <b>4g of fat</b>. For <b>$1.06 per serving</b>, this recipe <b>covers 26%</b> of your daily requirements of vitamins and minerals. A mixture of optional: of hot sauce, canned tomatoes, water, and a handful of other ingredients are all it takes to make this recipe so yummy. This recipe from cooking2perfection.blogspot.com has 471 fans. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. From preparation to the plate, this recipe takes around <b>35 minutes</b>. Overall, this recipe earns a <b>tremendous spoonacular score of 98%</b>. <a href=\"https://spoonacular.com/recipes/easy-homemade-rice-and-beans-1311839\">Easy Homemade Rice and Beans</a>, <a href=\"https://spoonacular.com/recipes/easy-homemade-rice-and-beans-1303021\">Easy Homemade Rice and Beans</a>, and <a href=\"https://spoonacular.com/recipes/easy-homemade-rice-and-beans-1230117\">Easy Homemade Rice and Beans</a> are very similar to this recipe.",
	// 	"healthScore": 60,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "Heat the olive oil in a large pot over medium heat."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Add onions and saute until soft, or for about 5 minutes."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Add all other remaining ingredients and stir together. Increase the heat to medium high and bring to a boil. Cover and reduce heat to medium low so that the mixture simmers. Cook for 15-20 minutes, or until rice is fluffy and liquid is absorbed.*"
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Serve with salsa, cheese, and sour cream."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 664147,
	// 	"image": "https://spoonacular.com/recipeImages/664147-312x231.jpg",
	// 	"name": "Tuscan White Bean Soup with Olive Oil and Rosemary",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free",
	// 		"lacto ovo vegetarian",
	// 		"vegan"
	// 	],
	// 	"dishTypes": [
	// 		"lunch",
	// 		"soup",
	// 		"main course",
	// 		"main dish",
	// 		"dinner"
	// 	],
	// 	"summary": "Tuscan White Bean Soup with Olive Oil and Rosemary is a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> recipe with 6 servings. This main course has <b>242 calories</b>, <b>16g of protein</b>, and <b>1g of fat</b> per serving. For <b>50 cents per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. It will be a hit at your <b>Autumn</b> event. 22 people found this recipe to be tasty and satisfying. Head to the store and pick up olive oil, rosemary, garlic, and a few other things to make it today. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. With a spoonacular <b>score of 79%</b>, this dish is good. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/white-bean-soup-with-pasta-and-rosemary-oil-drizzle-855454\">White Bean Soup with Pastan and Rosemary Oil Drizzle</a>, <a href=\"https://spoonacular.com/recipes/tuscan-white-bean-and-fennel-stew-with-orange-and-rosemary-105383\">Tuscan White Bean and Fennel Stew With Orange and Rosemary</a>, and <a href=\"https://spoonacular.com/recipes/tuscan-white-bean-soup-1054940\">Tuscan White Bean Soup</a>.",
	// 	"healthScore": 94,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "Rinse the beans thoroughly and place them in a 7-quart slow cooker along with the water, onion, garlic, and bay leaf. Cover and cook on LOW for about 8 hours, or until the beans are nice and tender."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Remove the bay leaf. Using a handheld immersion blender, puree the remaining ingredients to the desired texture."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Add the salt to taste.Ladle the soup into bowls."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Drizzle with the olive oil, sprinkle with rosemary, and serve."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 640941,
	// 	"image": "https://spoonacular.com/recipeImages/640941-312x231.jpg",
	// 	"name": "Crunchy Brussels Sprouts Side Dish",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free",
	// 		"paleolithic",
	// 		"lacto ovo vegetarian",
	// 		"primal"
	// 	],
	// 	"dishTypes": [
	// 		"side dish"
	// 	],
	// 	"summary": "The recipe Crunchy Brussels Sprouts Side Dish can be made <b>in about 30 minutes</b>. For <b>$1.69 per serving</b>, you get a side dish that serves 4. One serving contains <b>232 calories</b>, <b>8g of protein</b>, and <b>16g of fat</b>. This recipe is liked by 26 foodies and cooks. It is brought to you by Foodista. A mixture of red wine vinegar, walnuts, dijon mustard, and a handful of other ingredients are all it takes to make this recipe so yummy. It is a good option if you're following a <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 98%</b>. This score is spectacular. Similar recipes include <a href=\"https://spoonacular.com/recipes/side-dish-sundays-cacio-e-pepe-brussels-sprouts-1146819\">Side Dish Sundays: Cacio e Pepe Brussels Sprouts</a>, <a href=\"https://spoonacular.com/recipes/easy-side-dish-roasted-brussels-sprouts-and-grapes-474168\">Easy Side Dish – Roasted Brussels Sprouts and Grapes</a>, and <a href=\"https://spoonacular.com/recipes/side-dish-sundays-cacio-e-pepe-brussels-sprouts-1385177\">Side Dish Sundays: Cacio e Pepe Brussels Sprouts</a>.",
	// 	"healthScore": 100,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "Blanch the Brussels sprouts in boiling water for 6-8 minutes or in a microwave oven in a little water for about 4 minutes."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Drain."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Saute the Brussels sprouts, stirring constantly, until they become golden-brown in color.Meanwhile mix the vinegar, mustard, honey and olive oil."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Add walnuts to the sprouts, stir and combine."
	// 		},
	// 		{
	// 			"number": 5,
	// 			"step": "Pour the vinegar dressing over the sprouts, season with pepper."
	// 		},
	// 		{
	// 			"number": 6,
	// 			"step": "Mix and combine so that each sprout is covered with the dressing."
	// 		},
	// 		{
	// 			"number": 7,
	// 			"step": "Serve warm or cold as a side dish."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 715495,
	// 	"image": "https://spoonacular.com/recipeImages/715495-312x231.jpg",
	// 	"name": "Turkey Tomato Cheese Pizza",
	// 	"diets": [],
	// 	"dishTypes": [
	// 		"antipasti",
	// 		"starter",
	// 		"snack",
	// 		"appetizer",
	// 		"antipasto",
	// 		"hor d'oeuvre"
	// 	],
	// 	"summary": "Turkey Tomato Cheese Pizza might be just the <b>Mediterranean</b> recipe you are searching for. For <b>$1.84 per serving</b>, this recipe <b>covers 23%</b> of your daily requirements of vitamins and minerals. This hor d'oeuvre has <b>221 calories</b>, <b>10g of protein</b>, and <b>8g of fat</b> per serving. This recipe serves 6. Head to the store and pick up bell pepper, parsley, onion, and a few other things to make it today. This recipe from Pink When has 910 fans. From preparation to the plate, this recipe takes around <b>15 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 97%</b>. This score is outstanding. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/turkey-tomato-pizza-430522\">Turkey Tomato Pizza</a>, <a href=\"https://spoonacular.com/recipes/tomato-cheese-pizza-430570\">Tomato Cheese Pizza</a>, and <a href=\"https://spoonacular.com/recipes/cheese-tomato-pizza-696636\">Cheese & Tomato Pizza</a>.",
	// 	"healthScore": 39,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "Heat up your grill to 450 degrees.Start off with your whole wheat crust and spread the tomato sauce evenly over the top."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Add a little cheese, bell pepper, onion, turkey and create a layer.Top with another layer of cheese, turkey, tomato, bell pepper, onion."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Add another layer of cheese, and then sprinkle with pepper."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Place the pizza on a ceramic grill plate and place into the grill.Grill for 6-10 minutes, or until cooked as desired.Slice, and serve immediately."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 794349,
	// 	"image": "https://spoonacular.com/recipeImages/794349-312x231.jpg",
	// 	"name": "Broccoli and Chickpea Rice Salad",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free",
	// 		"lacto ovo vegetarian",
	// 		"vegan"
	// 	],
	// 	"dishTypes": [
	// 		"side dish",
	// 		"lunch",
	// 		"main course",
	// 		"salad",
	// 		"main dish",
	// 		"dinner"
	// 	],
	// 	"summary": "Broccoli and Chickpea Rice Salad takes roughly <b>45 minutes</b> from beginning to end. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>355 calories</b>, <b>15g of protein</b>, and <b>10g of fat</b> per serving. This recipe serves 6. For <b>$1.13 per serving</b>, this recipe <b>covers 30%</b> of your daily requirements of vitamins and minerals. It works well as a main course. 44 people were glad they tried this recipe. It is brought to you by foodandspice.blogspot.com. A mixture of ground pepper, broccoli florets, olive oil, and a handful of other ingredients are all it takes to make this recipe so tasty. With a spoonacular <b>score of 99%</b>, this dish is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/broccoli-and-chickpea-rice-salad-1380823\">Broccoli and Chickpea Rice Salad</a>, <a href=\"https://spoonacular.com/recipes/broccoli-and-chickpea-rice-salad-1401089\">Broccoli and Chickpea Rice Salad</a>, and <a href=\"https://spoonacular.com/recipes/broccoli-and-chickpea-rice-salad-1287405\">Broccoli and Chickpea Rice Salad</a>.",
	// 	"healthScore": 83,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "In a large skillet, heat the oil over medium heat."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Add the broccoli, stir well, and cover. Cook, stirring often, until the broccoli is tender."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Add the broccoli to a large bowl, along with the remaining salad ingredients.To make the dressing, whisk together all of the dressing ingredients in a small bowl."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Pour the dressing over the salad and toss well to coat evenly. Taste for seasoning and serve."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 716381,
	// 	"image": "https://spoonacular.com/recipeImages/716381-312x231.jpg",
	// 	"name": "Nigerian Snail Stew",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free",
	// 		"whole 30"
	// 	],
	// 	"dishTypes": [
	// 		"lunch",
	// 		"soup",
	// 		"main course",
	// 		"main dish",
	// 		"dinner"
	// 	],
	// 	"summary": "Need a <b>gluten free, dairy free, and whole 30 main course</b>? Nigerian Snail Stew could be a tremendous recipe to try. This recipe serves 1 and costs $9.1 per serving. One serving contains <b>358 calories</b>, <b>24g of protein</b>, and <b>5g of fat</b>. 361 person have made this recipe and would make it again. It will be a hit at your <b>Autumn</b> event. A mixture of scotch bonnet peppers, bell pepper, tomatoes, and a handful of other ingredients are all it takes to make this recipe so tasty. It is brought to you by Afrolems. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is super. <a href=\"https://spoonacular.com/recipes/nigerian-kidney-bean-stew-with-a-peanut-sauce-112643\">Nigerian Kidney Bean Stew With a Peanut Sauce</a>, <a href=\"https://spoonacular.com/recipes/little-snail-rolls-369096\">Little Snail Rolls</a>, and <a href=\"https://spoonacular.com/recipes/maple-snail-cookies-76877\">Maple Snail Cookies</a> are very similar to this recipe.",
	// 	"healthScore": 66,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "In a bowl, wash the snails with lime and salt till all the slime is gone."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Place the snail in a pot with the chili powder, seasoning cubes, chopped garlic, 1/2 of the onion(chopped) and a pinch of salt and bring to boil for about 15-18 minutes.In a separate pot, place the tomatoes, bell pepper, scotch bonnet peppers, crush with a wooden spoon till some of the juices come out and bring to boil till they are all soft on low heat. (This helps to dry up some of the extra water from the tomatoes)In a pot, pour in your oil, cut your onions in rings and fry in the hot oil on medium heat."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Pour in your tomato-pepper mix and allow to fry for about 8-10 minutes on low heat."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Pour in the left-over stock from the snail and allow to cook for 5 more minutes on medium heat."
	// 		},
	// 		{
	// 			"number": 5,
	// 			"step": "Add your seasoning cubes and taste for salt."
	// 		},
	// 		{
	// 			"number": 6,
	// 			"step": "Add your snails and stir in and allow to stew for 2-4 minutes more on medium heat."
	// 		},
	// 		{
	// 			"number": 7,
	// 			"step": "Serve with Rice, Pasta, Plantain, Yams or Potatoes."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 660306,
	// 	"image": "https://spoonacular.com/recipeImages/660306-312x231.jpg",
	// 	"name": "Slow Cooker: Pork and Garbanzo Beans",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free"
	// 	],
	// 	"dishTypes": [
	// 		"lunch",
	// 		"main course",
	// 		"main dish",
	// 		"dinner"
	// 	],
	// 	"summary": "Slow Cooker: Pork and Garbanzo Beans takes approximately <b>45 minutes</b> from beginning to end. This recipe serves 6. This main course has <b>587 calories</b>, <b>66g of protein</b>, and <b>14g of fat</b> per serving. For <b>$2.99 per serving</b>, this recipe <b>covers 45%</b> of your daily requirements of vitamins and minerals. Head to the store and pick up water *2, cumin, pork should roast, and a few other things to make it today. This recipe is liked by 22 foodies and cooks. It is brought to you by Foodista. It is a good option if you're following a <b>gluten free and dairy free</b> diet. With a spoonacular <b>score of 96%</b>, this dish is outstanding. Similar recipes include <a href=\"https://spoonacular.com/recipes/slow-cooker-pork-and-beans-619424\">Slow Cooker Pork and Beans</a>, <a href=\"https://spoonacular.com/recipes/slow-cooker-pork-and-beans-1242889\">Slow Cooker Pork and Beans</a>, and <a href=\"https://spoonacular.com/recipes/slow-cooker-pork-and-beans-244959\">Slow Cooker Pork and Beans</a>.",
	// 	"healthScore": 100,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "In slow cooker layer in this order: pork, then garbanzo beans, onion, pour water over all."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Mix spices together and sprinkle over pork and beans. Cover. Set on low and cook for approximately 6 hours. The beans should be tender and creamy. The pork should fall very easily from the bone. The pork can be either shredded for cubed for your preference. *3Serving Suggestion: Scoop about 1 cup of beans with broth into a soup bowl. Top with shredded pork."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Add 1/4 of an avocado sliced, top with chopped fresh cilantro.NOTES:*1 The beans do not need to be soaked before adding to the slow cooker. They will be perfectly soft and creamy without pre-soaking.*2 Substitute the water for: 2 cups water and 1 bottle of good quality dark beer like Negra Modelo. You can also substitute the water for chicken stock or pork stock. Each of these substitutions will add an extra dimension of flavor.*3 If you want to shred the pork, it is easiest to do when the pork is hot. Use two forks to pull the pork apart and shred. If you want to slice the pork (like for sandwiches) it is best to do when the pork is cold."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Let the pork rest in the refrigerator for several hours or over night. Slice with a serrated knife or a very sharp chef knife."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 756814,
	// 	"image": "https://spoonacular.com/recipeImages/756814-312x231.jpg",
	// 	"name": "Powerhouse Almond Matcha Superfood Smoothie",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free"
	// 	],
	// 	"dishTypes": [
	// 		"morning meal",
	// 		"brunch",
	// 		"beverage",
	// 		"breakfast",
	// 		"drink"
	// 	],
	// 	"summary": "Powerhouse Almond Matcha Superfood Smoothie is a breakfast that serves 2. One serving contains <b>289 calories</b>, <b>11g of protein</b>, and <b>13g of fat</b>. For <b>$2.59 per serving</b>, this recipe <b>covers 27%</b> of your daily requirements of vitamins and minerals. If you have chia seeds, matcha tea powder, banana, and a few other ingredients on hand, you can make it. It is a good option if you're following a <b>gluten free, dairy free, and whole 30</b> diet. This recipe from Foodista has 80 fans. From preparation to the plate, this recipe takes around <b>10 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 98%</b>. This score is awesome. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/powerhouse-almond-matcha-superfood-smoothie-1244781\">Powerhouse Almond Matcha Superfood Smoothie</a>, <a href=\"https://spoonacular.com/recipes/chocolate-almond-superfood-smoothie-1600269\">Chocolate Almond Superfood Smoothie</a>, and <a href=\"https://spoonacular.com/recipes/powerhouse-golden-turmeric-smoothie-882363\">Powerhouse Golden Turmeric Smoothie</a>.",
	// 	"healthScore": 52,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "Combine all of the ingredients in a blender. Blend on high until smooth."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Serve immediately."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 715769,
	// 	"image": "https://spoonacular.com/recipeImages/715769-312x231.jpg",
	// 	"name": "Broccolini Quinoa Pilaf",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free",
	// 		"lacto ovo vegetarian",
	// 		"vegan"
	// 	],
	// 	"dishTypes": [
	// 		"side dish",
	// 		"lunch",
	// 		"main course",
	// 		"main dish",
	// 		"dinner"
	// 	],
	// 	"summary": "Broccolini Quinoa Pilaf requires approximately <b>30 minutes</b> from start to finish. For <b>$4.14 per serving</b>, you get a main course that serves 2. One portion of this dish contains around <b>20g of protein</b>, <b>31g of fat</b>, and a total of <b>625 calories</b>. Head to the store and pick up vegetable broth, onion, olive oil, and a few other things to make it today. A few people made this recipe, and 94 would say it hit the spot. It is a <b>rather expensive</b> recipe for fans of Mediterranean food. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. It is brought to you by Pick Fresh Foods. With a spoonacular <b>score of 98%</b>, this dish is excellent. Similar recipes are <a href=\"https://spoonacular.com/recipes/spring-broccolini-kale-quinoa-bowls-734866\">Spring Broccolini & Kale Quinoa Bowls</a>, <a href=\"https://spoonacular.com/recipes/orange-sesame-salmon-with-quinoa-broccolini-839832\">Orange-Sesame Salmon with Quinoa & Broccolini</a>, and <a href=\"https://spoonacular.com/recipes/black-pepper-goat-cheese-and-chard-quinoa-with-roasted-broccolini-625829\">Black Pepper Goat Cheese and Chard Quinoa with Roasted Broccolini</a>.",
	// 	"healthScore": 74,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "In a large pan with lid heat olive oil over medium high heat."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Add onions and cook for 1 minute."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Add garlic and cook until onions are translucent and garlic is fragrant."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Add quinoa to pan, stir to combine. Slowly add in broth and bring to a boil.Cover and reduce heat to low, cook for 15 minutes.In the last 2-3 minutes of cooking add in broccolini on top of the quinoa (do not stir) and cover.Uncover and toss broccolini and quinoa together.Season to taste with salt and pepper."
	// 		},
	// 		{
	// 			"number": 5,
	// 			"step": "Add walnuts and serve hot."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 642129,
	// 	"image": "https://spoonacular.com/recipeImages/642129-312x231.jpg",
	// 	"name": "Easy To Make Spring Rolls",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free",
	// 		"pescatarian"
	// 	],
	// 	"dishTypes": [
	// 		"fingerfood",
	// 		"antipasti",
	// 		"starter",
	// 		"snack",
	// 		"appetizer",
	// 		"antipasto",
	// 		"hor d'oeuvre"
	// 	],
	// 	"summary": "If you want to add more <b>gluten free, dairy free, and pescatarian</b> recipes to your collection, Easy To Make Spring Rolls might be a recipe you should try. For <b>$3.78 per serving</b>, you get a hor d'oeuvre that serves 4. One serving contains <b>162 calories</b>, <b>13g of protein</b>, and <b>2g of fat</b>. 22 people found this recipe to be flavorful and satisfying. From preparation to the plate, this recipe takes about <b>45 minutes</b>. It can be enjoyed any time, but it is especially good for <b>Spring</b>. This recipe from Foodista requires mint leaves, garlic, chili pepper, and rice vinegar. This recipe is typical of Vietnamese cuisine. Overall, this recipe earns a <b>tremendous spoonacular score of 88%</b>. <a href=\"https://spoonacular.com/recipes/easy-to-make-spring-rolls-1262689\">Easy To Make Spring Rolls</a>, <a href=\"https://spoonacular.com/recipes/easy-to-make-spring-rolls-1218889\">Easy To Make Spring Rolls</a>, and <a href=\"https://spoonacular.com/recipes/easy-to-make-spring-rolls-1531113\">Easy To Make Spring Rolls</a> are very similar to this recipe.",
	// 	"healthScore": 100,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "Have all the ingredients ready for assembly. In a large bowl filled with water, dip a wrapper in the water. The rice wrapper will begin to soften and this is your cue to remove it from the water and lay it flat."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Place 2 shrimp halves in a row across the center and top with basil, mint, cilantro and lettuce. Leave about 1 to 2 inches uncovered on each side.  Fold uncovered sides inward, then tightly roll the wrapper, beginning at the end with the lettuce.  Repeat with remaining wrappers and ingredients."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Cut and serve at room temperature with dipping sauce.The Culinary Chases Note: The rice wrapper can be fussy to handle if you let it soak too long. I usually give it a couple of swishes in the water and then remove. It may feel slightly stiff but by the time you are ready to roll up, the wrapper will become very pliable.  A typical spring roll contains cooked rice vermicelli, slivers of cooked pork and julienned carrots but you can use whatever suits your fancy.  Enjoy!"
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 642605,
	// 	"image": "https://spoonacular.com/recipeImages/642605-312x231.jpg",
	// 	"name": "Farro With Mushrooms and Asparagus",
	// 	"diets": [
	// 		"dairy free",
	// 		"lacto ovo vegetarian"
	// 	],
	// 	"dishTypes": [
	// 		"side dish"
	// 	],
	// 	"summary": "Farro With Mushrooms and Asparagus is a <b>dairy free and lacto ovo vegetarian</b> recipe with 4 servings. One serving contains <b>365 calories</b>, <b>12g of protein</b>, and <b>9g of fat</b>. For <b>$3.94 per serving</b>, this recipe <b>covers 23%</b> of your daily requirements of vitamins and minerals. This recipe is liked by 47 foodies and cooks. From preparation to the plate, this recipe takes around <b>1 hour and 15 minutes</b>. It works well as a side dish. If you have asparagus, garlic, porcini mushrooms, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. With a spoonacular <b>score of 98%</b>, this dish is awesome. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/farro-risotto-with-wild-mushrooms-and-asparagus-495316\">Farro Risotto with Wild Mushrooms and Asparagus</a>, <a href=\"https://spoonacular.com/recipes/farro-with-asparagus-hazelnuts-and-kale-topped-with-roasted-mushrooms-298005\">Farro with Asparagus, Hazelnuts and Kale Topped with Roasted Mushrooms</a>, and <a href=\"https://spoonacular.com/recipes/farro-and-porcini-mushrooms-farro-con-funghi-40485\">Farro And Porcini Mushrooms (farro Con Funghi)</a>.",
	// 	"healthScore": 80,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "In a small bowl, cover dried mushrooms with warm water.  Soak for 25 minutes, or until softened."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Drain the mushrooms, and discard the soaking water.  Chop finely.Bring a large pot of water to a boil."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Add farro, and cook for 10 minutes, stirring occasionally."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Drain and reserve.In a large skillet, over medium heat, heat the olive oil, and add onion, garlic, thyme, and mushrooms.Cook, stirring occasionally, for 5 minutes or until onions are tender.Stir in 2 tablespoons of sherry vinegar, and continue cooking for 1 minute."
	// 		},
	// 		{
	// 			"number": 5,
	// 			"step": "Add chicken stock, and bring it to a boil.Stir in farro, and return to a boil.Lower the heat to a simmer, and cover with a tight fitting lid.  Cook for 10 minutes."
	// 		},
	// 		{
	// 			"number": 6,
	// 			"step": "Add asparagus, and cook, covered, for an additional 10 minutes.Season with 1 tablespoon sherry vinegar, salt and pepper."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 636589,
	// 	"image": "https://spoonacular.com/recipeImages/636589-312x231.jpg",
	// 	"name": "Butternut Squash Frittata",
	// 	"diets": [
	// 		"gluten free"
	// 	],
	// 	"dishTypes": [
	// 		"lunch",
	// 		"main course",
	// 		"morning meal",
	// 		"brunch",
	// 		"main dish",
	// 		"breakfast",
	// 		"dinner"
	// 	],
	// 	"summary": "The recipe Butternut Squash Frittata can be made <b>in approximately 45 minutes</b>. This recipe serves 1. Watching your figure? This gluten free recipe has <b>465 calories</b>, <b>24g of protein</b>, and <b>4g of fat</b> per serving. For <b>$3.4 per serving</b>, this recipe <b>covers 53%</b> of your daily requirements of vitamins and minerals. A few people really liked this main course. This recipe from Foodista requires butternut squash, bell pepper, liquid egg substitute, and non-fat milk. 18 people have tried and liked this recipe. Overall, this recipe earns an <b>awesome spoonacular score of 98%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/butternut-squash-frittata-750335\">Butternut Squash Frittata</a>, <a href=\"https://spoonacular.com/recipes/butternut-squash-frittata-1225935\">Butternut Squash Frittata</a>, and <a href=\"https://spoonacular.com/recipes/butternut-squash-and-quinoa-frittata-1313179\">Butternut Squash and Quinoa Frittata</a>.",
	// 	"healthScore": 100,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "Preheat oven to 350Spray a 10 oz oven safe dish with cooking spray"
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Add your butternut squash"
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "In a measuring cup add your eggs and milk."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Mix until combined."
	// 		},
	// 		{
	// 			"number": 5,
	// 			"step": "Pour over butternut squash."
	// 		},
	// 		{
	// 			"number": 6,
	// 			"step": "Sprinkle with pepper and top with cheese."
	// 		},
	// 		{
	// 			"number": 7,
	// 			"step": "Bake in oven for 30-35 minutes, until middle is slightly firm"
	// 		},
	// 		{
	// 			"number": 8,
	// 			"step": "Let it cool for a few minutes"
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 646738,
	// 	"image": "https://spoonacular.com/recipeImages/646738-312x231.jpg",
	// 	"name": "Herbivoracious' White Bean and Kale Soup",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free",
	// 		"lacto ovo vegetarian",
	// 		"vegan"
	// 	],
	// 	"dishTypes": [
	// 		"lunch",
	// 		"soup",
	// 		"main course",
	// 		"main dish",
	// 		"dinner"
	// 	],
	// 	"summary": "Herbivoracious' White Bean and Kale Soup might be a good recipe to expand your main course recipe box. One serving contains <b>332 calories</b>, <b>17g of protein</b>, and <b>10g of fat</b>. This recipe serves 6 and costs 78 cents per serving. 10 people were impressed by this recipe. It will be a hit at your <b>Autumn</b> event. Head to the store and pick up juice of lemon, carrot, dinosaur kale, and a few other things to make it today. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 94%</b>. This score is tremendous. <a href=\"https://spoonacular.com/recipes/kale-and-white-bean-soup-1214347\">Kale And White Bean Soup</a>, <a href=\"https://spoonacular.com/recipes/white-bean-and-kale-soup-15247\">White Bean And Kale Soup</a>, and <a href=\"https://spoonacular.com/recipes/white-bean-kale-soup-1571259\">White Bean Kale Soup</a> are very similar to this recipe.",
	// 	"healthScore": 100,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "PRESSURE COOKER METHOD"
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "In the pressure cooker base, but without pressure, heat the olive oil over medium-high heat. Saut the onion, garlic, carrot, and 1 teaspoon salt until the onion is translucent, about 4 minutes."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Add the bay leaves, rosemary, and your choice(s) of the Parmesan rind, dried porcini, or broth powder."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Add the dry beans and water. Bring up to high pressure and cook for 40 minutes, then allow the pressure to release naturally. Open the lid."
	// 		},
	// 		{
	// 			"number": 5,
	// 			"step": "Remove the bay leaves and Parmesan rind, if using."
	// 		},
	// 		{
	// 			"number": 6,
	// 			"step": "Add the kale and lemon juice and simmer for 10 minutes, until the kale is tender. Taste and adjust the seasoning, then serve, garnished with a generous drizzle of extra-virgin olive oil."
	// 		},
	// 		{
	// 			"number": 7,
	// 			"step": "STOVETOP METHOD"
	// 		},
	// 		{
	// 			"number": 8,
	// 			"step": "Cover the beans with several inches of water and soak overnight."
	// 		},
	// 		{
	// 			"number": 9,
	// 			"step": "Drain the beans and place in a large saucepan. Cover with water by at least 2 inches and bring to a boil. Reduce the heat and simmer the beans until tender, about 1 1/2 to 2 hours."
	// 		},
	// 		{
	// 			"number": 10,
	// 			"step": "Drain the beans, reserving the bean broth."
	// 		},
	// 		{
	// 			"number": 11,
	// 			"step": "In a large saucepan, heat the olive oil over medium-high heat. Saut the onion, garlic, carrot, and 1 teaspoon salt until the onion is translucent, about 4 minutes."
	// 		},
	// 		{
	// 			"number": 12,
	// 			"step": "Add 4 cups of the bean broth, the bay leaves, rosemary, and your choice of the Parmesan rind, dried porcini, or broth powder. Bring to a simmer and cook for 30 minutes."
	// 		},
	// 		{
	// 			"number": 13,
	// 			"step": "Remove the bay leaves and Parmesan rind, if using."
	// 		},
	// 		{
	// 			"number": 14,
	// 			"step": "Add the beans, kale, and lemon juice and simmer for 10 minutes, until the kale is tender. Taste and adjust the seasoning, then serve, garnished with a generous drizzle of extra-virgin olive oil."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 715540,
	// 	"image": "https://spoonacular.com/recipeImages/715540-312x231.jpg",
	// 	"name": "Summer Berry Salad",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free",
	// 		"paleolithic",
	// 		"lacto ovo vegetarian",
	// 		"primal",
	// 		"vegan"
	// 	],
	// 	"dishTypes": [
	// 		"side dish",
	// 		"antipasti",
	// 		"salad",
	// 		"starter",
	// 		"snack",
	// 		"appetizer",
	// 		"antipasto",
	// 		"hor d'oeuvre"
	// 	],
	// 	"summary": "Summer Berry Salad might be a good recipe to expand your hor d'oeuvre recipe box. This recipe serves 1. One portion of this dish contains around <b>2g of protein</b>, <b>1g of fat</b>, and a total of <b>98 calories</b>. For <b>$1.75 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. A mixture of strawberries, blackberries, basalmic vinaigrette, and a handful of other ingredients are all it takes to make this recipe so yummy. It is a good option if you're following a <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> diet. 17 people have tried and liked this recipe. It is perfect for <b>The Fourth Of July</b>. From preparation to the plate, this recipe takes about <b>45 minutes</b>. It is brought to you by Pink When. All things considered, we decided this recipe <b>deserves a spoonacular score of 98%</b>. This score is amazing. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/berry-summer-salad-50848\">Berry Summer Salad</a>, <a href=\"https://spoonacular.com/recipes/summer-berry-salad-485592\">Summer Berry Salad</a>, and <a href=\"https://spoonacular.com/recipes/chicken-berry-summer-salad-769303\">Chicken & Berry Summer Salad</a>.",
	// 	"healthScore": 95,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "Cut up a Granny Smith green apple, strawberries, and add blackberries"
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Mix in with Romaine lettuce"
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Toss in some basalmic vinaigrette"
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 663559,
	// 	"image": "https://spoonacular.com/recipeImages/663559-312x231.jpg",
	// 	"name": "Tomato and lentil soup",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free",
	// 		"lacto ovo vegetarian",
	// 		"vegan"
	// 	],
	// 	"dishTypes": [
	// 		"lunch",
	// 		"soup",
	// 		"main course",
	// 		"main dish",
	// 		"dinner"
	// 	],
	// 	"summary": "Tomato and lentil soup might be a good recipe to expand your main course recipe box. This recipe makes 4 servings with <b>340 calories</b>, <b>18g of protein</b>, and <b>8g of fat</b> each. For <b>$1.16 per serving</b>, this recipe <b>covers 34%</b> of your daily requirements of vitamins and minerals. It is perfect for <b>Autumn</b>. This recipe from Foodista requires bay leaf, onion, garlic, and carrots. 11 person were glad they tried this recipe. From preparation to the plate, this recipe takes about <b>45 minutes</b>. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. With a spoonacular <b>score of 96%</b>, this dish is great. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/tomato-and-lentil-soup-482854\">Tomato and Lentil Soup</a>, <a href=\"https://spoonacular.com/recipes/lentil-tomato-soup-398380\">Lentil-Tomato Soup</a>, and <a href=\"https://spoonacular.com/recipes/lentil-tomato-soup-108370\">Lentil & Tomato Soup</a>.",
	// 	"healthScore": 100,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "Saut onion and garlic in olive oil for 5 minutes."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Add the carrot, saut for another 2 minutes."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Add tomatoes, bay leaf and water, stir and bring to the boil."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Stir in lentils, season with salt and cook for 5 minutes."
	// 		},
	// 		{
	// 			"number": 5,
	// 			"step": "Before serving sprinkle with chopped parsley."
	// 		}
	// 	],
	// 	"created": false
	// },
	// {
	// 	"id": 662670,
	// 	"image": "https://spoonacular.com/recipeImages/662670-312x231.jpg",
	// 	"name": "Swiss Chard Wraps",
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free",
	// 		"paleolithic",
	// 		"lacto ovo vegetarian",
	// 		"primal",
	// 		"vegan"
	// 	],
	// 	"dishTypes": [
	// 		"side dish"
	// 	],
	// 	"summary": "Swiss Chard Wraps is a <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> recipe with 6 servings. One serving contains <b>137 calories</b>, <b>4g of protein</b>, and <b>11g of fat</b>. For <b>82 cents per serving</b>, this recipe <b>covers 18%</b> of your daily requirements of vitamins and minerals. It works best as a side dish, and is done in about <b>45 minutes</b>. 14 people were impressed by this recipe. If you have swiss chard leaves, orange cauliflower, olive oil, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. Overall, this recipe earns an <b>excellent spoonacular score of 96%</b>. <a href=\"https://spoonacular.com/recipes/swiss-chard-wraps-1367505\">Swiss Chard Wraps</a>, <a href=\"https://spoonacular.com/recipes/sweet-thai-chile-chicken-swiss-chard-wraps-with-peanut-ginger-sauce-703915\">Sweet Thai Chile Chicken Swiss Chard Wraps with Peanut Ginger Sauce</a>, and <a href=\"https://spoonacular.com/recipes/swiss-chard-353815\">Swiss Chard</a> are very similar to this recipe.",
	// 	"healthScore": 90,
	// 	"stepByStep": [
	// 		{
	// 			"number": 1,
	// 			"step": "Chop off the stems of the swiss chard at the point where it meets the leaf. You could stem the swiss chard entirely. I like leaving a bit of stem with the leaves to give better structure to the wraps."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Chop the cauliflower into small pieces and pulse them in a food processor until it looks like rice. I usually pulse the cauliflower florets and the stalk together."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Place the olive oil in a saut pan over medium-high heat. Once the pan is hot, add the garlic and let it fry for about a minute or two, or until the garlic starts to brown."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Add the pulsed cauliflower rice and cook it for about 2-3 minutes. The cauliflower should turn into a vibrant yellow-orange color when it is cooked."
	// 		},
	// 		{
	// 			"number": 5,
	// 			"step": "Add a pinch of salt and chopped basil to the cauliflower and stir."
	// 		},
	// 		{
	// 			"number": 6,
	// 			"step": "Spiralize the zucchini with Blade B to create zucchini noodles. If you do not have a spiralizer, just create zucchini ribbons with a vegetable peeler."
	// 		},
	// 		{
	// 			"number": 7,
	// 			"step": "To assemble the wraps, place a large leaf flat down."
	// 		},
	// 		{
	// 			"number": 8,
	// 			"step": "Add a bit of sauted cauliflower, zucchini noodles, red pepper, and avocado along the swiss chard stalk."
	// 		},
	// 		{
	// 			"number": 9,
	// 			"step": "Drizzle a bit of vinaigrette on top of the vegetables and wrap everything up."
	// 		},
	// 		{
	// 			"number": 10,
	// 			"step": "Enjoy these wraps as a side to your favorite protein! Feel free to dip these wraps in more sauce."
	// 		},
	// 		{
	// 			"number": 11,
	// 			"step": "These wraps are best consumed when they are freshly made. Refrigerate any leftovers in an airtight container."
	// 		}
	// 	],
	// 	"created": false
	// },],
    // diets: [	
    //     "lacto vegetarian",
    //     "ovo vegetarian",
    //     "gluten free",
    //     "lacto ovo vegetarian",
    //     "vegan",
    //     "pescetarian",
    //     "low fodmap",
    //     "whole 30",
    //     "dairy free",
    //     "vegetarian",
    //     "paleolithic",
    //     "ketogenic",
    //     "primal"
    // ],
	// recipeById: {
	// 	"vegetarian": true,
	// 	"vegan": true,
	// 	"glutenFree": true,
	// 	"dairyFree": true,
	// 	"veryHealthy": true,
	// 	"cheap": false,
	// 	"veryPopular": true,
	// 	"sustainable": false,
	// 	"lowFodmap": false,
	// 	"weightWatcherSmartPoints": 4,
	// 	"gaps": "no",
	// 	"preparationMinutes": -1,
	// 	"cookingMinutes": -1,
	// 	"aggregateLikes": 3689,
	// 	"healthScore": 75,
	// 	"creditsText": "Full Belly Sisters",
	// 	"license": "CC BY-SA 3.0",
	// 	"sourceName": "Full Belly Sisters",
	// 	"pricePerServing": 112.39,
	// 	"extendedIngredients": [
	// 		{
	// 			"id": 11090,
	// 			"aisle": "Produce",
	// 			"image": "broccoli.jpg",
	// 			"consistency": "SOLID",
	// 			"name": "broccoli",
	// 			"nameClean": "broccoli",
	// 			"original": "2 cups cooked broccoli, chopped small",
	// 			"originalName": "cooked broccoli, chopped small",
	// 			"amount": 2,
	// 			"unit": "cups",
	// 			"meta": [
	// 				"cooked",
	// 				"chopped"
	// 			],
	// 			"measures": {
	// 				"us": {
	// 					"amount": 2,
	// 					"unitShort": "cups",
	// 					"unitLong": "cups"
	// 				},
	// 				"metric": {
	// 					"amount": 473.176,
	// 					"unitShort": "ml",
	// 					"unitLong": "milliliters"
	// 				}
	// 			}
	// 		},
	// 		{
	// 			"id": 11135,
	// 			"aisle": "Produce",
	// 			"image": "cauliflower.jpg",
	// 			"consistency": "SOLID",
	// 			"name": "cauliflower",
	// 			"nameClean": "cauliflower",
	// 			"original": "1 head of cauliflower, raw",
	// 			"originalName": "cauliflower, raw",
	// 			"amount": 1,
	// 			"unit": "head",
	// 			"meta": [
	// 				"raw"
	// 			],
	// 			"measures": {
	// 				"us": {
	// 					"amount": 1,
	// 					"unitShort": "head",
	// 					"unitLong": "head"
	// 				},
	// 				"metric": {
	// 					"amount": 1,
	// 					"unitShort": "head",
	// 					"unitLong": "head"
	// 				}
	// 			}
	// 		},
	// 		{
	// 			"id": 4047,
	// 			"aisle": "Health Foods;Baking",
	// 			"image": "oil-coconut.jpg",
	// 			"consistency": "LIQUID",
	// 			"name": "t coconut oil",
	// 			"nameClean": "coconut oil",
	// 			"original": "1 + 1 T coconut oil or butter",
	// 			"originalName": "1 T coconut oil or butter",
	// 			"amount": 1,
	// 			"unit": "",
	// 			"meta": [],
	// 			"measures": {
	// 				"us": {
	// 					"amount": 1,
	// 					"unitShort": "",
	// 					"unitLong": ""
	// 				},
	// 				"metric": {
	// 					"amount": 1,
	// 					"unitShort": "",
	// 					"unitLong": ""
	// 				}
	// 			}
	// 		},
	// 		{
	// 			"id": 20041,
	// 			"aisle": "Pasta and Rice",
	// 			"image": "rice-brown-cooked.png",
	// 			"consistency": "SOLID",
	// 			"name": "brown rice",
	// 			"nameClean": "cooked brown rice",
	// 			"original": "3 cups of cooked brown rice, cold",
	// 			"originalName": "cooked brown rice, cold",
	// 			"amount": 3,
	// 			"unit": "cups",
	// 			"meta": [
	// 				"cold",
	// 				"cooked"
	// 			],
	// 			"measures": {
	// 				"us": {
	// 					"amount": 3,
	// 					"unitShort": "cups",
	// 					"unitLong": "cups"
	// 				},
	// 				"metric": {
	// 					"amount": 709.764,
	// 					"unitShort": "ml",
	// 					"unitLong": "milliliters"
	// 				}
	// 			}
	// 		},
	// 		{
	// 			"id": 11215,
	// 			"aisle": "Produce",
	// 			"image": "garlic.png",
	// 			"consistency": "SOLID",
	// 			"name": "garlic",
	// 			"nameClean": "garlic",
	// 			"original": "5 cloves of garlic, chopped",
	// 			"originalName": "garlic, chopped",
	// 			"amount": 5,
	// 			"unit": "cloves",
	// 			"meta": [
	// 				"chopped"
	// 			],
	// 			"measures": {
	// 				"us": {
	// 					"amount": 5,
	// 					"unitShort": "cloves",
	// 					"unitLong": "cloves"
	// 				},
	// 				"metric": {
	// 					"amount": 5,
	// 					"unitShort": "cloves",
	// 					"unitLong": "cloves"
	// 				}
	// 			}
	// 		},
	// 		{
	// 			"id": 4517,
	// 			"aisle": "Oil, Vinegar, Salad Dressing",
	// 			"image": "vegetable-oil.jpg",
	// 			"consistency": "LIQUID",
	// 			"name": "t grapeseed oil",
	// 			"nameClean": "grape seed oil",
	// 			"original": "1 + 1 T grapeseed oil",
	// 			"originalName": "1 T grapeseed oil",
	// 			"amount": 1,
	// 			"unit": "",
	// 			"meta": [],
	// 			"measures": {
	// 				"us": {
	// 					"amount": 1,
	// 					"unitShort": "",
	// 					"unitLong": ""
	// 				},
	// 				"metric": {
	// 					"amount": 1,
	// 					"unitShort": "",
	// 					"unitLong": ""
	// 				}
	// 			}
	// 		},
	// 		{
	// 			"id": 16424,
	// 			"aisle": "Ethnic Foods;Condiments",
	// 			"image": "soy-sauce.jpg",
	// 			"consistency": "LIQUID",
	// 			"name": "soy sauce",
	// 			"nameClean": "lower sodium soy sauce",
	// 			"original": "3T reduced-sodium soy sauce",
	// 			"originalName": "reduced-sodium soy sauce",
	// 			"amount": 3,
	// 			"unit": "T",
	// 			"meta": [
	// 				"reduced-sodium"
	// 			],
	// 			"measures": {
	// 				"us": {
	// 					"amount": 3,
	// 					"unitShort": "Tbsps",
	// 					"unitLong": "Tbsps"
	// 				},
	// 				"metric": {
	// 					"amount": 3,
	// 					"unitShort": "Tbsps",
	// 					"unitLong": "Tbsps"
	// 				}
	// 			}
	// 		},
	// 		{
	// 			"id": 11304,
	// 			"aisle": "Produce",
	// 			"image": "peas.jpg",
	// 			"consistency": "SOLID",
	// 			"name": "peas",
	// 			"nameClean": "petite peas",
	// 			"original": "1 cup frozen peas",
	// 			"originalName": "frozen peas",
	// 			"amount": 1,
	// 			"unit": "cup",
	// 			"meta": [
	// 				"frozen"
	// 			],
	// 			"measures": {
	// 				"us": {
	// 					"amount": 1,
	// 					"unitShort": "cup",
	// 					"unitLong": "cup"
	// 				},
	// 				"metric": {
	// 					"amount": 236.588,
	// 					"unitShort": "ml",
	// 					"unitLong": "milliliters"
	// 				}
	// 			}
	// 		},
	// 		{
	// 			"id": 2047,
	// 			"aisle": "Spices and Seasonings",
	// 			"image": "salt.jpg",
	// 			"consistency": "SOLID",
	// 			"name": "salt",
	// 			"nameClean": "table salt",
	// 			"original": "salt, to taste",
	// 			"originalName": "salt, to taste",
	// 			"amount": 8,
	// 			"unit": "servings",
	// 			"meta": [
	// 				"to taste"
	// 			],
	// 			"measures": {
	// 				"us": {
	// 					"amount": 8,
	// 					"unitShort": "servings",
	// 					"unitLong": "servings"
	// 				},
	// 				"metric": {
	// 					"amount": 8,
	// 					"unitShort": "servings",
	// 					"unitLong": "servings"
	// 				}
	// 			}
	// 		},
	// 		{
	// 			"id": 11291,
	// 			"aisle": "Produce",
	// 			"image": "spring-onions.jpg",
	// 			"consistency": "SOLID",
	// 			"name": "additional scallion tops",
	// 			"nameClean": "spring onions",
	// 			"original": "additional chopped scallion tops for garnish",
	// 			"originalName": "additional chopped scallion tops for garnish",
	// 			"amount": 8,
	// 			"unit": "servings",
	// 			"meta": [
	// 				"chopped",
	// 				"for garnish"
	// 			],
	// 			"measures": {
	// 				"us": {
	// 					"amount": 8,
	// 					"unitShort": "servings",
	// 					"unitLong": "servings"
	// 				},
	// 				"metric": {
	// 					"amount": 8,
	// 					"unitShort": "servings",
	// 					"unitLong": "servings"
	// 				}
	// 			}
	// 		},
	// 		{
	// 			"id": 11291,
	// 			"aisle": "Produce",
	// 			"image": "spring-onions.jpg",
	// 			"consistency": "SOLID",
	// 			"name": "scallions",
	// 			"nameClean": "spring onions",
	// 			"original": "7 scallions, chopped (keep white/light green ends separate from dark green tops)",
	// 			"originalName": "scallions, chopped (keep white/light green ends separate from dark green tops)",
	// 			"amount": 7,
	// 			"unit": "",
	// 			"meta": [
	// 				"dark",
	// 				"green",
	// 				"chopped",
	// 				"(keep white/light ends separate from tops)"
	// 			],
	// 			"measures": {
	// 				"us": {
	// 					"amount": 7,
	// 					"unitShort": "",
	// 					"unitLong": ""
	// 				},
	// 				"metric": {
	// 					"amount": 7,
	// 					"unitShort": "",
	// 					"unitLong": ""
	// 				}
	// 			}
	// 		},
	// 		{
	// 			"id": 4058,
	// 			"aisle": "Ethnic Foods",
	// 			"image": "sesame-oil.png",
	// 			"consistency": "LIQUID",
	// 			"name": "sesame oil",
	// 			"nameClean": "sesame oil",
	// 			"original": "2t toasted sesame oil",
	// 			"originalName": "toasted sesame oil",
	// 			"amount": 2,
	// 			"unit": "t",
	// 			"meta": [
	// 				"toasted"
	// 			],
	// 			"measures": {
	// 				"us": {
	// 					"amount": 2,
	// 					"unitShort": "tsps",
	// 					"unitLong": "teaspoons"
	// 				},
	// 				"metric": {
	// 					"amount": 2,
	// 					"unitShort": "tsps",
	// 					"unitLong": "teaspoons"
	// 				}
	// 			}
	// 		},
	// 		{
	// 			"id": 12023,
	// 			"aisle": "Ethnic Foods;Spices and Seasonings",
	// 			"image": "sesame-seeds.png",
	// 			"consistency": "SOLID",
	// 			"name": "sesame seeds",
	// 			"nameClean": "sesame seeds",
	// 			"original": "toasted sesame seeds, optional",
	// 			"originalName": "toasted sesame seeds, optional",
	// 			"amount": 8,
	// 			"unit": "servings",
	// 			"meta": [
	// 				"toasted"
	// 			],
	// 			"measures": {
	// 				"us": {
	// 					"amount": 8,
	// 					"unitShort": "servings",
	// 					"unitLong": "servings"
	// 				},
	// 				"metric": {
	// 					"amount": 8,
	// 					"unitShort": "servings",
	// 					"unitLong": "servings"
	// 				}
	// 			}
	// 		}
	// 	],
	// 	"id": 716426,
	// 	"title": "Cauliflower, Brown Rice, and Vegetable Fried Rice",
	// 	"readyInMinutes": 30,
	// 	"servings": 8,
	// 	"sourceUrl": "http://fullbellysisters.blogspot.com/2012/01/cauliflower-fried-rice-more-veggies.html",
	// 	"image": "https://spoonacular.com/recipeImages/716426-556x370.jpg",
	// 	"imageType": "jpg",
	// 	"summary": "You can never have too many Chinese recipes, so give Cauliflower, Brown Rice, and Vegetable Fried Rice a try. This recipe serves 8 and costs $1.12 per serving. This hor d'oeuvre has <b>192 calories</b>, <b>7g of protein</b>, and <b>6g of fat</b> per serving. Head to the store and pick up broccoli, sesame seeds, soy sauce, and a few other things to make it today. 3689 people were impressed by this recipe. It is brought to you by fullbellysisters.blogspot.com. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. From preparation to the plate, this recipe takes roughly <b>30 minutes</b>. Overall, this recipe earns a <b>spectacular spoonacular score of 100%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1584601\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>, <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1238897\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>, and <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1230097\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>.",
	// 	"cuisines": [
	// 		"Chinese",
	// 		"Asian"
	// 	],
	// 	"dishTypes": [
	// 		"side dish",
	// 		"antipasti",
	// 		"starter",
	// 		"snack",
	// 		"appetizer",
	// 		"antipasto",
	// 		"hor d'oeuvre"
	// 	],
	// 	"diets": [
	// 		"gluten free",
	// 		"dairy free",
	// 		"lacto ovo vegetarian",
	// 		"vegan"
	// 	],
	// 	"occasions": [],
	// 	"winePairing": {
	// 		"pairedWines": [
	// 			"wine",
	// 			"alcoholic drink",
	// 			"white wine",
	// 			"ingredient",
	// 			"food product category",
	// 			"riesling",
	// 			"drink",
	// 			"menu item type",
	// 			"gewurztraminer",
	// 			"chenin blanc"
	// 		],
	// 		"pairingText": "Vegetable Fried Rice works really well with Wine, Alcoholic Drink, and White Wine. The best wine for Asian food depends on the cuisine and dish - of course - but these acidic whites pair with a number of traditional meals, spicy or not. One wine you could try is Guillette-Brest, Brut Millesime. It has 5 out of 5 stars and a bottle costs about 44 dollars.",
	// 		"productMatches": [
	// 			{
	// 				"id": 428948,
	// 				"title": "Guillette-Brest, Brut Millesime",
	// 				"description": null,
	// 				"price": "$44.2",
	// 				"imageUrl": "https://spoonacular.com/productImages/428948-312x231.jpg",
	// 				"averageRating": 1,
	// 				"ratingCount": 2,
	// 				"score": 0.8571428571428572,
	// 				"link": "https://www.amazon.com/2007-Champagne-Guillette-Brest-Brut-Millesime/dp/B00TROZR62?tag=spoonacular-20"
	// 			}
	// 		]
	// 	},
	// 	"instructions": "<ol><li><span></span>Remove the cauliflower's tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of \"cauliflower rice.\"</li><li>Heat 1T butter and 1T oil in a large skillet over medium heat. Add garlic and the white and light green pieces of scallion. Sauté about a minute.</li><li>Add the cauliflower to the pan. Stir to coat with oil, then spread out in pan and let sit; you want it cook a bit and to caramelize (get a bit brown), which will bring out the sweetness. After a couple of minutes, stir and spread out again.</li><li>Add cold rice (it separates easily, so it won't clump up during cooking), plus the additional grapeseed and coconut oil or butter. Raise heat to medium-high. Toss everything together and, again, spread the mixture out over the whole pan and press a bit into the bottom. Let it sit for about two minutes—so the rice can get toasted and a little crispy. Add the peas and broccoli and stir again. Drizzle soy sauce and toasted sesame oil over rice.</li><li>Cook for another minute or so and turn off heat. Add chopped scallion tops and toss.</li><li>I like to toast some sesame seeds in a dry pan; I sprinkle these and some more raw, chopped scallion over the top of the rice for added flavor and crunch.</li><li>Season to taste with salt and, if you'd like, more soy sauce. Keep in mind that if you're serving this with something salty and saucy (ie. teriyaki chicken) you may want to hold off on adding too much salt to the fried rice.</li></ol>",
	// 	"analyzedInstructions": [
	// 		{
	// 			"name": "",
	// 			"steps": [
	// 				{
	// 					"number": 1,
	// 					"step": "Remove the cauliflower's tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of \"cauliflower rice.\"",
	// 					"ingredients": [
	// 						{
	// 							"id": 10011135,
	// 							"name": "cauliflower florets",
	// 							"localizedName": "cauliflower florets",
	// 							"image": "cauliflower.jpg"
	// 						},
	// 						{
	// 							"id": 10111135,
	// 							"name": "cauliflower rice",
	// 							"localizedName": "cauliflower rice",
	// 							"image": "cauliflower.jpg"
	// 						},
	// 						{
	// 							"id": 11135,
	// 							"name": "cauliflower",
	// 							"localizedName": "cauliflower",
	// 							"image": "cauliflower.jpg"
	// 						},
	// 						{
	// 							"id": 20028,
	// 							"name": "couscous",
	// 							"localizedName": "couscous",
	// 							"image": "couscous-cooked.jpg"
	// 						},
	// 						{
	// 							"id": 20444,
	// 							"name": "rice",
	// 							"localizedName": "rice",
	// 							"image": "uncooked-white-rice.png"
	// 						}
	// 					],
	// 					"equipment": [
	// 						{
	// 							"id": 404771,
	// 							"name": "food processor",
	// 							"localizedName": "food processor",
	// 							"image": "food-processor.png"
	// 						}
	// 					]
	// 				},
	// 				{
	// 					"number": 2,
	// 					"step": "Heat 1T butter and 1T oil in a large skillet over medium heat.",
	// 					"ingredients": [
	// 						{
	// 							"id": 1001,
	// 							"name": "butter",
	// 							"localizedName": "butter",
	// 							"image": "butter-sliced.jpg"
	// 						},
	// 						{
	// 							"id": 4582,
	// 							"name": "cooking oil",
	// 							"localizedName": "cooking oil",
	// 							"image": "vegetable-oil.jpg"
	// 						}
	// 					],
	// 					"equipment": [
	// 						{
	// 							"id": 404645,
	// 							"name": "frying pan",
	// 							"localizedName": "frying pan",
	// 							"image": "pan.png"
	// 						}
	// 					]
	// 				},
	// 				{
	// 					"number": 3,
	// 					"step": "Add garlic and the white and light green pieces of scallion. Sauté about a minute.",
	// 					"ingredients": [
	// 						{
	// 							"id": 11291,
	// 							"name": "green onions",
	// 							"localizedName": "green onions",
	// 							"image": "spring-onions.jpg"
	// 						},
	// 						{
	// 							"id": 11215,
	// 							"name": "garlic",
	// 							"localizedName": "garlic",
	// 							"image": "garlic.png"
	// 						}
	// 					],
	// 					"equipment": []
	// 				},
	// 				{
	// 					"number": 4,
	// 					"step": "Add the cauliflower to the pan. Stir to coat with oil, then spread out in pan and let sit; you want it cook a bit and to caramelize (get a bit brown), which will bring out the sweetness. After a couple of minutes, stir and spread out again.",
	// 					"ingredients": [
	// 						{
	// 							"id": 11135,
	// 							"name": "cauliflower",
	// 							"localizedName": "cauliflower",
	// 							"image": "cauliflower.jpg"
	// 						},
	// 						{
	// 							"id": 0,
	// 							"name": "spread",
	// 							"localizedName": "spread",
	// 							"image": ""
	// 						},
	// 						{
	// 							"id": 4582,
	// 							"name": "cooking oil",
	// 							"localizedName": "cooking oil",
	// 							"image": "vegetable-oil.jpg"
	// 						}
	// 					],
	// 					"equipment": [
	// 						{
	// 							"id": 404645,
	// 							"name": "frying pan",
	// 							"localizedName": "frying pan",
	// 							"image": "pan.png"
	// 						}
	// 					]
	// 				},
	// 				{
	// 					"number": 5,
	// 					"step": "Add cold rice (it separates easily, so it won't clump up during cooking), plus the additional grapeseed and coconut oil or butter. Raise heat to medium-high. Toss everything together and, again, spread the mixture out over the whole pan and press a bit into the bottom.",
	// 					"ingredients": [
	// 						{
	// 							"id": 4047,
	// 							"name": "coconut oil",
	// 							"localizedName": "coconut oil",
	// 							"image": "oil-coconut.jpg"
	// 						},
	// 						{
	// 							"id": 1001,
	// 							"name": "butter",
	// 							"localizedName": "butter",
	// 							"image": "butter-sliced.jpg"
	// 						},
	// 						{
	// 							"id": 0,
	// 							"name": "spread",
	// 							"localizedName": "spread",
	// 							"image": ""
	// 						},
	// 						{
	// 							"id": 20444,
	// 							"name": "rice",
	// 							"localizedName": "rice",
	// 							"image": "uncooked-white-rice.png"
	// 						}
	// 					],
	// 					"equipment": [
	// 						{
	// 							"id": 404645,
	// 							"name": "frying pan",
	// 							"localizedName": "frying pan",
	// 							"image": "pan.png"
	// 						}
	// 					]
	// 				},
	// 				{
	// 					"number": 6,
	// 					"step": "Let it sit for about two minutes—so the rice can get toasted and a little crispy.",
	// 					"ingredients": [
	// 						{
	// 							"id": 20444,
	// 							"name": "rice",
	// 							"localizedName": "rice",
	// 							"image": "uncooked-white-rice.png"
	// 						}
	// 					],
	// 					"equipment": [],
	// 					"length": {
	// 						"number": 2,
	// 						"unit": "minutes"
	// 					}
	// 				},
	// 				{
	// 					"number": 7,
	// 					"step": "Add the peas and broccoli and stir again.",
	// 					"ingredients": [
	// 						{
	// 							"id": 11090,
	// 							"name": "broccoli",
	// 							"localizedName": "broccoli",
	// 							"image": "broccoli.jpg"
	// 						},
	// 						{
	// 							"id": 11304,
	// 							"name": "peas",
	// 							"localizedName": "peas",
	// 							"image": "peas.jpg"
	// 						}
	// 					],
	// 					"equipment": []
	// 				},
	// 				{
	// 					"number": 8,
	// 					"step": "Drizzle soy sauce and toasted sesame oil over rice.Cook for another minute or so and turn off heat.",
	// 					"ingredients": [
	// 						{
	// 							"id": 4058,
	// 							"name": "sesame oil",
	// 							"localizedName": "sesame oil",
	// 							"image": "sesame-oil.png"
	// 						},
	// 						{
	// 							"id": 16124,
	// 							"name": "soy sauce",
	// 							"localizedName": "soy sauce",
	// 							"image": "soy-sauce.jpg"
	// 						},
	// 						{
	// 							"id": 20444,
	// 							"name": "rice",
	// 							"localizedName": "rice",
	// 							"image": "uncooked-white-rice.png"
	// 						}
	// 					],
	// 					"equipment": []
	// 				},
	// 				{
	// 					"number": 9,
	// 					"step": "Add chopped scallion tops and toss.I like to toast some sesame seeds in a dry pan; I sprinkle these and some more raw, chopped scallion over the top of the rice for added flavor and crunch.Season to taste with salt and, if you'd like, more soy sauce. Keep in mind that if you're serving this with something salty and saucy (ie. teriyaki chicken) you may want to hold off on adding too much salt to the fried rice.",
	// 					"ingredients": [
	// 						{
	// 							"id": 12023,
	// 							"name": "sesame seeds",
	// 							"localizedName": "sesame seeds",
	// 							"image": "sesame-seeds.png"
	// 						},
	// 						{
	// 							"id": 16124,
	// 							"name": "soy sauce",
	// 							"localizedName": "soy sauce",
	// 							"image": "soy-sauce.jpg"
	// 						},
	// 						{
	// 							"id": 11291,
	// 							"name": "green onions",
	// 							"localizedName": "green onions",
	// 							"image": "spring-onions.jpg"
	// 						},
	// 						{
	// 							"id": 5006,
	// 							"name": "whole chicken",
	// 							"localizedName": "whole chicken",
	// 							"image": "whole-chicken.jpg"
	// 						},
	// 						{
	// 							"id": 0,
	// 							"name": "sandwich bread",
	// 							"localizedName": "sandwich bread",
	// 							"image": "white-bread.jpg"
	// 						},
	// 						{
	// 							"id": 20444,
	// 							"name": "rice",
	// 							"localizedName": "rice",
	// 							"image": "uncooked-white-rice.png"
	// 						},
	// 						{
	// 							"id": 2047,
	// 							"name": "salt",
	// 							"localizedName": "salt",
	// 							"image": "salt.jpg"
	// 						}
	// 					],
	// 					"equipment": [
	// 						{
	// 							"id": 404645,
	// 							"name": "frying pan",
	// 							"localizedName": "frying pan",
	// 							"image": "pan.png"
	// 						}
	// 					]
	// 				}
	// 			]
	// 		}
	// 	],
	// 	"originalId": null,
	// 	"spoonacularSourceUrl": "https://spoonacular.com/cauliflower-brown-rice-and-vegetable-fried-rice-716426"
	// },
	// recibeByName:[],
        
    recipes: [],
	allRecipes:[],
	diets:[],
    stepByStep:[],
	recipeById: {},
    // stepByStep: [{
	// 			"number": 1,
	// 			"step": "To a large dutch oven or soup pot, heat the olive oil over medium heat."
	// 		},
	// 		{
	// 			"number": 2,
	// 			"step": "Add the onion, carrots and celery and cook for 8-10 minutes or until tender, stirring occasionally."
	// 		},
	// 		{
	// 			"number": 3,
	// 			"step": "Add the garlic and cook for an additional 2 minutes, or until fragrant. Season conservatively with a pinch of salt and black pepper.To the pot, add the tomatoes, turnip and red lentils. Stir to combine. Stir in the vegetable stock and increase the heat on the stove to high. Bring the soup to a boil and then reduce to a simmer. Simmer for 20 minutes or until the turnips are tender and the lentils are cooked through."
	// 		},
	// 		{
	// 			"number": 4,
	// 			"step": "Add the chicken breast and parsley. Cook for an additional 5 minutes. Adjust seasoning to taste."
	// 		},
	// 		{
	// 			"number": 5,
	// 			"step": "Serve the soup immediately garnished with fresh parsley and any additional toppings. Enjoy!"
	// 		}]

}

const rootReducer = (state = initialState, action) => {
    switch(action.type){

        case GET_RECIPES:
            return{
                ...state,
                recipes: action.payload,
                allRecipes: action.payload
            }
			
        case GET_DIETS:
            return{
                ...state,
                diets: action.payload
            }

		case GET_RECIPE_DETAIL:
			return{
				...state,
				recipeById: action.payload	
			}

        case FILTER_BY_DIETS:
			const allRecipes = state.allRecipes;
            const recipesFilterd = action.payload === 'All' ?
				allRecipes :
				allRecipes.filter(r => r.diets?.some(d => d.toLowerCase() === action.payload.toLowerCase()))
            return{
                ...state,
                recipes: recipesFilterd
            }

			
		case SORTED_RECIPES:
			let sortdRecipes = action.payload === 'asc' ?
				state.recipes.sort(function (a,b){
					if(a.name > b.name){
						return 1
					}
					if(b.name > a.name){
						return -1
					}
					return 0
				}) :
				state.recipes.sort(function (a,b){
					if(a.name > b.name){
						return -1
					}
					if(b.name > a.name){
						return 1
					}
					return 0
				})
				console.log(sortdRecipes);
				return{
					...state,
					recipes: sortdRecipes
				}
		
		case SORT_SCORE:
			let sortScore = action.payload === 'healthy' ? 
				state.recipes.sort(function(a,b){
					if(a.healthScore > b.healthScore) return 1;
					if(a.healthScore < b.healthScore) return -1;
					return 0
				}) :
				state.recipes.sort(function(a,b){
					if(a.healthScore < b.healthScore) return 1;
					if(a.healthScore > b.healthScore) return -1;
					return 0
				});
				return{
					...state,
					recipes: sortScore
				}

		case GET_RECIPE_BY_NAME:
			return{
				...state,
				recipes: action.payload
			}

		case "POST_RECIPE":
		  return{
			  ...state
			};
			
        default:
            return {...state}
    }
}

export default rootReducer;