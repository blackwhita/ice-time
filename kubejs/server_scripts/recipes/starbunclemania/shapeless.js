/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:starbunclemania/shapeless/';

    const recipes = [
        {
            output: 'starbunclemania:star_bucket',
            inputs: ['hexerei:small_satchel', 'starbunclemania:fluid_jar'],
            id: `${id_prefix}star_bucket`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
*/