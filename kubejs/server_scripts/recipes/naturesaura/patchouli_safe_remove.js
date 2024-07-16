//You can use this code to remove recipes from the guide[Item.of('patchouli:guide_book', '{"patchouli:book":"naturesaura:book"}')]

/*ServerEvents.recipes((event) => {
    const patchouli_safe_removals = {
        shaped: [
            { id: 'naturesaura:gold_fiber', output: 'naturesaura:gold_fiber' }
        ],
        altar: [
            { id: 'naturesaura:altar/infused_stone', output: 'naturesaura:infused_stone' }
        ],
        tree_ritual: [
            { id: 'naturesaura:tree_ritual/crushing_catalyst', output: 'naturesaura:crushing_catalyst' }
        ],
        offering: [
            { id: 'naturesaura:offering/token_grief', output: 'naturesaura:token_grief' },
        ],
        animal_spawner: [
            { id: 'naturesaura:animal_spawner/endermite', output: 'minecraft:endermite' },
        ]
    };

    patchouli_safe_removals.shaped.forEach((recipe) => {
        event.shaped(recipe.output, ['A'], { A: 'ico:ico' }).id(recipe.id);
    });

    patchouli_safe_removals.altar.forEach((recipe) => {
        event
            .custom({
                type: 'naturesaura:altar',
                input: { item: 'ico:ico' },
                output: Item.of(recipe.output).toJson(),
                aura_type: 'naturesaura:overworld',
                aura: 1,
                time: 1
            })
            .id(recipe.id);
    });

    patchouli_safe_removals.tree_ritual.forEach((recipe) => {
        event
            .custom({
                type: 'naturesaura:tree_ritual',
                ingredients: [{ item: 'ico:ico' }],
                sapling: { item: 'minecraft:oak_sapling' },
                output: Item.of(recipe.output).toJson(),
                time: 1
            })
            .id(recipe.id);
    });

    patchouli_safe_removals.offering.forEach((recipe) => {
        event
            .custom({
                type: 'naturesaura:offering',
                input: { item: 'ico:ico' },
                start_item: { item: 'ico:ico' },
                output: Item.of(recipe.output).toJson()
            })
            .id(recipe.id);
    });

    patchouli_safe_removals.animal_spawner.forEach((recipe) => {
        event
            .custom({
                type: 'naturesaura:animal_spawner',
                ingredients: [{ item: 'ico:ico' }],
                entity: recipe.output,
                aura: 1,
                time: 1
            })
            .id(recipe.id);
    });
});
*/