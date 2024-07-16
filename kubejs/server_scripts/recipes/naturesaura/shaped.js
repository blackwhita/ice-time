ServerEvents.recipes((event) => {
    const id_prefix = 'ico:naturesaura/shaped/';

    const recipes = [
        {
            output: 'naturesaura:gold_fiber',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#minecraft:leaves',
                B: 'minecraft:gold_nugget',
                C: 'alexscaves:fern_thatch'
            },
            id: 'naturesaura:gold_fiber'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
