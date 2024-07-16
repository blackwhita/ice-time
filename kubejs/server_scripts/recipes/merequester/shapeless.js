/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:merequester/shapeless/';

    const recipes = [
        {
            output: 'merequester:requester_terminal',
            inputs: ['#ae2:illuminated_panel', 'pneumaticcraft:logistics_core', 'merequester:requester'],
            id: `merequester:requester_terminal`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
*/