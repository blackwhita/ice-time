/*ServerEvents.recipes((event) => {
    const id_prefix = 'ico:ae2/shapeless/';

    const recipes = [
        {
            output: 'ae2:pattern_access_terminal',
            inputs: ['#ae2:illuminated_panel', 'pneumaticcraft:logistics_core', '#ae2:pattern_provider'],
            id: `ae2:network/parts/terminals_pattern_access`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
*/