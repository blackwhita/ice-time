//priority: 900
StartupEvents.registry('item', (event) => {
    const wire_material = [
        'nickel',
        'osmium',
        'platinum',
        'silver',
        'tin',
        'uranium',
        'zinc',
        'iridium',
        'invar',
        'bronze',
        'enderium',
        'lumium',
        'signalum',
        'constantan',
        'brass',
        'iron',
        'copper',
        'gold',
        'netherite',
    ]
    const all_materials_type = [
        'gear',
        'plate',
        'rod'
    ]
    const items = [
    ];

    const ritualDummies = [
    ];

    const reusableItemTextures = [
    ];

    wire_material.forEach((item) => {
        event.create(`immersiveengineering:wire_${item}`).texture(`ico:item/material_wire_${item}`);
    });

    all_materials_type.forEach((type) => {
        event.create(`alltheores:netherite_${type}`).texture(`ico:item/netherite_${type}`);
    });

    reusableItemTextures.forEach((item) => {
        event.create(item.name).group('KubeJS').texture(`kubejs:item/${item.texture}`);
    });

    ritualDummies.forEach((item) => {
        event.create(item, 'occultism:ritual_dummy').group('KubeJS').texture('kubejs:item/ritual_dummy');
    });
    event.create('ico:ico').texture(`ico:item/ico`)
});'alltheores:aluminum_gear'
