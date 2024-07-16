/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:supplementaries/shapeless/';

    const recipes = [
        {
            output: 'supplementaries:jar',
            inputs: ['thermal:jar'],
            id: `${id_prefix}jar`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
*/