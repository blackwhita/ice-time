/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:powah/shapeless/';

    const recipes = [
        {
            output: '6x powah:dielectric_rod',
            inputs: [
                'ae2:fluix_glass_cable',
                'ae2:fluix_glass_cable',
                'ae2:fluix_glass_cable',
                'ae2:fluix_glass_cable',
                'ae2:fluix_glass_cable',
                'ae2:fluix_glass_cable',
                'powah:dielectric_paste'
            ],
            id: `powah:crafting/dielectric_rod`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
*/