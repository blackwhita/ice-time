/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:modularrouters/shapeless/';

    const recipes = [
        {
            output: '64x modularrouters:energy_upgrade',
            inputs: ['modularrouters:blank_upgrade', 'powah:capacitor_nitro'],
            id: `${id_prefix}energy_upgrade_nitro`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
*/