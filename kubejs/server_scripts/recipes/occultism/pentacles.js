/*ServerEvents.highPriorityData((event) => {
    // Match blocks by Blockstate: https://klikli-dev.github.io/modonomicon/docs/multiblocks/state-matchers/blockstate-matcher/
    // A: {
    //     type: 'modonomicon:blockstate',
    //     display: 'minecraft:chest[facing=east]',
    //     block: 'minecraft:chest[facing=west]'
    // }
    // Match blocks by Tag: https://klikli-dev.github.io/modonomicon/docs/multiblocks/state-matchers/tag-matcher/
    // A: {
    //     type: 'modonomicon:tag',
    //     tag: 'minecraft:planks'
    // }

    let pentacles = [
        {
            name: 'summon_familiar',
            x_placement: -9,
            y_placement: 7,
            mapping: {
                0: { type: 'modonomicon:block', block: 'occultism:golden_sacrificial_bowl' },
                P: { type: 'modonomicon:block', block: 'naturesaura:gold_powder' },
                W: { type: 'modonomicon:block', block: 'occultism:chalk_glyph_white' },
                F: { type: 'modonomicon:block', block: 'twilightforest:firefly_jar' },
                H: { type: 'modonomicon:block', block: 'twilightforest:naga_trophy' }
            },
            pattern: [
                [
                    'F___P_P___F',
                    '_PP_____PP_',
                    '_PWP_H_PWP_',
                    '__PP___PP__',
                    'P_________P',
                    '_____0_____',
                    'P_________P',
                    '__PP___PP__',
                    '_PWP___PWP_',
                    '_PP_____PP_',
                    'F___P_P___F'
                ]
            ],
            parents: [
                {
                    entry: 'occultism:pentacles/pentacles_overview',
                    draw_arrow: true,
                    line_enabled: true,
                    line_reversed: false
                }
            ]
        }
        
    ];

    pentacles.forEach((pentacle) => {
        pentacle.type = 'modonomicon:dense';

        // Set background display. Same size as pentacle, blocks alternate between otherstone and andesite.
        // * and + are used as the keys following Occultism's convention.
        let ground = [];
        let pattern = pentacle.pattern[0];

        for (let i = 0; i < pattern.length; i++) {
            let row = '';
            for (let j = 0; j < pattern[i].length; j++) {
                row += (i + j) % 2 == 0 ? '*' : '+';
            }
            ground.push(row);
        }

        pentacle.pattern.push(ground);
        pentacle.mapping['*'] = { type: 'modonomicon:display', display: 'occultism:otherstone' };
        pentacle.mapping['+'] = { type: 'modonomicon:display', display: 'minecraft:stone' };

        event.addJson(`occultism:modonomicon/multiblocks/${pentacle.name}.json`, pentacle);

        // Remember to set lang entries for all new pentacles in en_us.json
        // x and y placement refer to the entry location within the modonomicon
        event.addJson(
            `occultism:modonomicon/books/dictionary_of_spirits/entries/pentacles/${pentacle.name}.json`,
            generatePentacleEntry(pentacle.name, pentacle.x_placement, pentacle.y_placement, pentacle.parents)
        );
    });
});
*/