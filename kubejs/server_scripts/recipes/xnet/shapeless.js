/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:xnet/shapeless/';

    const recipes = [
        {
            output: 'xnet:redstone_proxy',
            inputs: ['minecraft:observer', '#xnet:cables'],
            id: `${id_prefix}redstone_proxy`
        }
    ];
    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
*/