/*ServerEvents.recipes((event) => {
    const id_prefix = 'ico:create/sequenced_assembly/';
    const recipes = [
        {
            results: [
                { item: `ae2:sky_dust`, chance: 4 },
                { item: `emendatusenigmatica:silver_clump`, chance: 1 },
                { item: `emendatusenigmatica:osmium_clump`, chance: 1 },
                { item: 'thermal:slag', chance: 3 }
            ],
            input: 'thermal:rich_slag',
            transitionalItem: 'thermal:rich_slag',
            loops: 4,
            sequence: [
                {
                    type: 'create:filling',
                    ingredients: [{ item: 'thermal:rich_slag' }, { fluidTag: 'forge:redstone_acid', amount: 25 }],
                    results: [{ item: 'thermal:rich_slag' }]
                }
            ],
            id: `${id_prefix}sky_dust_silver_osmium_clump`
        }
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'create:sequenced_assembly';
        recipe.ingredient = recipe.input.startsWith('#') ? { tag: recipe.input.slice(1) } : { item: recipe.input };
        recipe.transitionalItem = Item.of(recipe.transitionalItem).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
*/