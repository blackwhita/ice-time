/*ServerEvents.recipes((event) => {
    const id_prefix = 'ico:create/shapeless/';

    const recipes = [
        {
            output: 'create:ornate_iron_window',
            inputs: ['quark:framed_glass'],
            id: 'create:ornate_iron_window'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
*/