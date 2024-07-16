//You can use this code to remove recipes from the guide
/*ServerEvents.recipes((event) => {
    const patchouli_safe_removals = {
        shaped: [
            { id: 'ars_nouveau:imbuement_chamber', output: 'ars_nouveau:imbuement_chamber' },
            
        ],
        enchanting_apparatus: [
            { id: 'ars_nouveau:wixie_charm', output: 'ars_nouveau:wixie_charm' },
            
        ],
        imbuement: [
            { id: 'ars_nouveau:imbuement_lapis', output: 'emendatusenigmatica:source_gem' },
        ]
    };

    patchouli_safe_removals.shaped.forEach((recipe) => {
        event.shaped(recipe.output, ['A'], { A: 'ico:ico' }).id(recipe.id);
    });

    patchouli_safe_removals.enchanting_apparatus.forEach((recipe) => {
        event
            .custom({
                type: 'ars_nouveau:enchanting_apparatus',
                output: { item: recipe.output },
                pedestalItems: [{ item: 'ico:ico' }],
                reagent: [{ item: 'ico:ico' }],
                sourceCost: 0
            })
            .id(recipe.id);
    });

    patchouli_safe_removals.imbuement.forEach((recipe) => {
        event
            .custom({
                type: 'ars_nouveau:imbuement',
                input: { item: 'ico:ico' },
                output: recipe.output,
                count: 1,
                pedestalItems: [],
                source: 500
            })
            .id(recipe.id);
    });
});*/
