/*ServerEvents.recipes((event) => {

    const id_prefix = 'ico:occultism/spirit_fire/';
    const recipes = [
        {
            result: { item: 'occultism:otherstone' },
            ingredient: { item: 'naturesaura:infused_stone' },
            id: 'occultism:spirit_fire/otherstone'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:spirit_fire';
        event.custom(recipe).id(recipe.id);
    });
});
*/