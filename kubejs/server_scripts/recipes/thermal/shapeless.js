/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:thermal/shapeless/';

    const recipes = [
        {
            output: 'thermal:jar',
            inputs: ['supplementaries:jar'],
            id: `${id_prefix}jar`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
*/