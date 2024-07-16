/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:pneumaticcraft/assembly_laser/';

    const recipes = [
        {
            result: { item: `pneumaticcraft:advanced_pressure_tube`, count: 16 },
            input: { tag: `forge:storage_blocks/compressed_iron` },
            program: 'laser',
            id: `${id_prefix}advanced_pressure_tube`
        }
    ];
    recipes.forEach((recipe) => {
        recipe.type = `pneumaticcraft:assembly_${recipe.program}`;
        event.custom(recipe).id(recipe.id);
    });
});
*/