/*ServerEvents.lowPriorityData((event) => {


    const recipes = [
        {
            id: 'dimensionsal_storage_trades',
            wants: [{ id: 'kubejs:dimensional_storage_crystal', required: true }],
            possible_rewards: [
                {
                    id: 'minecraft:reinforced_deepslate',
                    count: 16,
                    xp_reward: 2,
                    weight: 100,
                    required: true
                }
            ]
        },
    ];
    recipes.forEach((recipe) => {
        event.addJson(`the_bumblezone:bz_bee_queen_trades/${recipe.id}.json`, recipe);
    });
});
*/