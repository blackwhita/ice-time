/*ServerEvents.recipes((event) => {
    const id_prefix = 'ico:naturesaura/animal_spawner/';
    const recipes = [
        {
            entity: 'minecraft:phantom',
            inputs: ['naturesaura:birth_spirit', 'ars_elemental:anima_essence', 'minecraft:feather'],
            aura: aura_cost.huge,
            time: 200,
            id: `${id_prefix}sky_dust`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:animal_spawner';

        recipe.ingredients = recipe.inputs.map((input) =>
            input.startsWith('#') ? { tag: input.slice(1) } : { item: input }
        );

        event.custom(recipe).id(recipe.id);
    });
});
*/