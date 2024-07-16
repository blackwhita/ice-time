/*ServerEvents.recipes((event) => {
    const id_prefix = 'ico:ae2/shaped/';

    const recipes = [
        {
            output: 'ae2:matter_cannon',
            pattern: ['AAB', 'CD ', 'E  '],
            key: {
                A: 'pneumaticcraft:cannon_barrel',
                B: 'ae2:formation_core',
                C: 'ae2:cell_component_4k',
                D: 'ae2:energy_cell',
                E: '#forge:wooden_grip'
            },
            id: 'ae2:tools/matter_cannon'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
*/