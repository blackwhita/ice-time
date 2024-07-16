/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:minecraft/stonecutting/';

    const recipes = [
        {
            output: '2x create:industrial_iron_block',
            input: 'immersiveengineering:sheetmetal_colored_black',
            id: `${id_prefix}industrial_iron_block`
        }
    ];

    recipes.forEach((recipe) => {
        event.stonecutting(recipe.output, recipe.input).id(recipe.id);
    });
});
*/