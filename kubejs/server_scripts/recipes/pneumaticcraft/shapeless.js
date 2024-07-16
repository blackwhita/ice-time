/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:pneumaticcraft/shapeless/';

    const recipes = [
        {
            output: 'pneumaticcraft:unassembled_netherite_drill_bit',
            inputs: ['pneumaticcraft:drill_bit_diamond', '#forge:ingots/depths'],
            id: `pneumaticcraft:unassembled_netherite_drill_bit`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
*/