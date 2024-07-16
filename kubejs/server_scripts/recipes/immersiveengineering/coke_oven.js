ServerEvents.recipes((event) => {

    const id_prefix = 'ico:immersiveengineering/coke_oven/';
    const recipes = [
        {
            result: [{ item: 'thermal:coal_coke', count: 1 }],
            input: [{ item: 'alexscaves:guano', count: 1 }],
            time:1800,
            creosote:500,
            id: `${id_prefix}coal_coke`,
            
        },
        
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:coke_oven';
        event.custom(recipe).id(recipe.id);
    });
    
});