JEIEvents.hideItems((event) => {
	all_materials_type_ore.forEach((all_materials_type_ore) => {
	all_materials_type.forEach((materials_type) => {
		all_materials.forEach((material) => {
			itemsToHide.push(
				"enderio:" + material + "_" + materials_type,

				"create:" + material + "_" + materials_type,

				"immersiveengineering:" + materials_type + "_" + material,
				"immersiveengineering:" + "raw_block_" + material,
				"immersiveengineering:" + "deepslate_ore_" + material,

				"mekanism:" + materials_type + "_" + material,
				"mekanism:" + material + "_ore",
				"mekanism:" + "deepslate_" + material + "_ore",
				"mekanism:" + "block_raw_" + material,

				"thermal:" + material + "_" + materials_type,
				"thermal:" + all_materials_type_ore + "_" + material + "_ore",
				"thermal:" + "raw_" + material,
				"thermal:" + "raw_" + material + "_block",

				"chemlib:" + material + "_" + materials_type,

				"occultism:" + material + "_" + materials_type
			);
		});
	});
	});
	itemsToHide.forEach((disabledItem) => {
		if (!Item.of(disabledItem).isEmpty()) {
			event.hide(disabledItem);
		}
	});
});
