/*ServerEvents.recipes((event) => {
    const id_prefix = 'ico:ars_nouveau/book_upgrade/';
    const recipes = [
        {
            result: { item: 'ars_nouveau:apprentice_spell_book' },
            ingredients: [
                { item: 'ars_nouveau:novice_spell_book' },
                { item: 'naturesaura:calling_spirit' },
                { tag: 'forge:gems/spirit_attuned' }
            ],
            id: 'ars_nouveau:apprentice_spell_book_upgrade'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:book_upgrade';
        event.custom(recipe).id(recipe.id);
    });
});
*/