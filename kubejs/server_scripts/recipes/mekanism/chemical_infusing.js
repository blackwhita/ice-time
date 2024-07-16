/*ServerEvents.recipes((event) => {


    const id_prefix = 'ico:mekanism/chemical_infusing/';
    const recipes = [
        {
            output: { amount: 30, gas: 'mekanism:sulfur_trioxide' },
            leftInput: { amount: 10, gas: 'mekanism:oxygen' },
            rightInput: { amount: 20, gas: 'mekanism:sulfur_dioxide' },
            id: `mekanism:chemical_infusing/sulfur_trioxide`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:chemical_infusing';
        event.custom(recipe).id(recipe.id);
    });
});
*/