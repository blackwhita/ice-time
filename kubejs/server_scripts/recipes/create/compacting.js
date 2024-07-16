/*ServerEvents.recipes((event) => {
    const id_prefix = 'ico:create/compacting/';
    const recipes = [
        {
            ingredients: [
                [{ tag: 'forge:foods/meat/raw' }, { item: 'minecraft:rotten_flesh' }],
                [{ tag: 'forge:foods/meat/raw' }, { item: 'minecraft:rotten_flesh' }],
                [{ tag: 'forge:foods/meat/raw' }, { item: 'minecraft:rotten_flesh' }],
                [{ tag: 'forge:foods/meat/raw' }, { item: 'minecraft:rotten_flesh' }]
            ],
            results: [
                { fluid: 'hexerei:blood_fluid', amount: 250 },
                { item: 'kubejs:mystery_mash', count: 2 }
            ],
            id: `${id_prefix}mystery_mash`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:compacting';
        event.custom(recipe).id(recipe.id);
    });
});
*/