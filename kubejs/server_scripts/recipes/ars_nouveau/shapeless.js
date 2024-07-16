/*ServerEvents.recipes((event) => {
    const id_prefix = 'ico:ars_nouveau/shapeless/';
    const recipes = [
        {
            output: 'ars_nouveau:relay_splitter',
            inputs: ['ars_nouveau:relay', 'ae2:charged_certus_quartz_crystal', 'ae2:charged_certus_quartz_crystal'],
            id: `${id_prefix}relay_splitter`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
*/