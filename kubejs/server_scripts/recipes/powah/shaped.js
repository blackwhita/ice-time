/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:powah/shaped/';
    const recipes = [
        {
            output: Item.of('powah:capacitor_basic_large', 2),
            pattern: [' AB', 'ACA', 'BA '],
            key: {
                A: '#forge:dusts/fluix',
                B: 'powah:dielectric_paste',
                C: '#forge:gems/subzero'
            },
            id: `powah:crafting/capacitor_basic_large`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
*/