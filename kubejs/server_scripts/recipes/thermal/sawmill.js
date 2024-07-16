/*ServerEvents.recipes((event) => {


    const id_prefix = 'ico:thermal/sawmill/';

    const recipes = [
        {
            ingredient: { item: 'occultism:dimensional_matrix' },
            result: [
                { item: 'kubejs:dimensional_storage_crystal', count: 27 },
                { item: 'ae2:certus_quartz_dust', chance: 1.0 }
            ],
            energy: 5000,
            id: `${id_prefix}dimensional_storage_crystal`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:sawmill';
        event.custom(recipe).id(recipe.id);
    });
});
*/