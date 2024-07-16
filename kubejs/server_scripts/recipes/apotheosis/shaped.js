/*ServerEvents.recipes((event) => {
    const id_prefix = 'ico:apotheosis/shaped/';

    const recipes = [
        {
            output: 'apotheosis:inert_trident',
            pattern: [' AA', 'CBA', 'B  '],
            key: {
                A: '#forge:rods/osmium',
                B: '#forge:rods/bronze',
                C: 'minecraft:conduit'
            },
            id: `apotheosis:inert_trident`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});*/
