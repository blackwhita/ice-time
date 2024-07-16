//To Do: Delete next breaking update
const all_materials = [
	"aluminum",
	"lead",
	"nickel",
	"osmium",
	"platinum",
	"silver",
	"tin",
	"uranium",
	"zinc",
	"iridium",
	"steel",
	"invar",
	"electrum",
	"bronze",
	"enderium",
	"lumium",
	"signalum",
	"constantan",
	"brass",
];
const all_materials_type = [
	"ore",
	//"dirty_?dust",
	//"raw_?block",
	"block",
	"ingot",
	"nugget",
	"dust",
	"raw",
	"rod",
	"gear",
	"plate",
	"shard",
	"crystal",
	"clump",
	"stick",
];
const all_materials_type_ore = ["other", "nether", "end", "deepslate"];
const interim_items = [
	"createaddition:electrum_ingot",
	"occultism:raw_silver",
	"occultism:raw_silver_block",
	"create:deepslate_zinc_ore",
	/*"thermal:ruby",
	"thermal:sapphire",
	"thermal:raw_nickel",
	"thermal:raw_silver",
	"thermal:raw_lead",
	"thermal:raw_tin",
	"thermal:raw_nickel_block",
	"thermal:raw_silver_block",
	"thermal:raw_lead_block",
	"thermal:raw_tin_block",
	"mekanism:block_raw_uranium",
	"mekanism:block_raw_lead",
	"mekanism:block_raw_tin",
	"mekanism:block_raw_osmium",
	"immersiveengineering:raw_block_uranium",
	"immersiveengineering:raw_block_nickel",
	"immersiveengineering:raw_block_silver",
	"immersiveengineering:raw_block_lead",*/
];
all_materials_type_ore.forEach((all_materials_type_ore) => {
	all_materials_type.forEach((materials_type) => {
		all_materials.forEach((material) => {
			interim_items.push(
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
const every_materials = {
	aluminum: {
        gear: true,
        plate: true,
        rod: true,
        wire: true,
    },
	lead: {
        gear: true,
        plate: true,
        rod: true,
        wire: true,
    },
    nickel: {
        gear: true,
        plate: true,
        rod: true,
        wire: true,
    },
	osmium: {
        gear: true,
        plate: true,
        rod: true,
        wire: true,
    },
	platinum: {
        gear: true,
        plate: true,
        rod: true,
        wire: true,
    },
	silver: {
        gear: true,
        plate: true,
        rod: true,
        wire: true,
    },
	tin: {
        gear: true,
        plate: true,
        rod: true,
        wire: true,
    },
	uranium: {
        gear: true,
        plate: true,
        rod: true,
        wire: true,
    },
	zinc: {
        gear: true,
        plate: true,
        rod: true,
        wire: true,
    },
	iridium: {
        gear: true,
        plate: true,
        rod: true,
        wire: true,
    },
	steel: {
        gear: true,
        plate: true,
        rod: true,
        wire: true,
    },
	invar: {
        gear: true,
        plate: true,
        rod: true,
        wire: true,
    },
	electrum: {
        gear: true,
        plate: true,
        rod: true,
        wire: true,
    },
    bronze: {
        gear: true,
        plate: true,
        rod: true,
        wire: true,
    },
	enderium: {
        gear: true,
        plate: true,
        rod: true,
        wire: true,
    },
	lumium: {
        gear: true,
        plate: true,
        rod: true,
        wire: true,
    },
	signalum: {
        gear: true,
        plate: true,
        rod: true,
        wire: true,
    },
	constantan: {
        gear: true,
        plate: true,
        rod: true,
        wire: true,
    },
	brass: {
        gear: true,
        plate: true,
        rod: true,
        wire: true,
    },
	iron: {
        gear: true,
        plate: true,
        rod: true,
        wire: true,
    },
	copper: {
        gear: true,
        plate: true,
        rod: true,
        wire: true,
    },
    gold: {
        gear: true,
        plate: true,
        rod: true,
        wire: true,
    },
	netherite: {
        gear: true,
        plate: true,
        rod: true,
        wire: true,
    },
}
/*const materials = [
    'aluminum',
    'lead',
    'nickel',
    'osmium',
    'platinum',
    'silver',
    'tin',
    'uranium',
    'zinc',
    'iridium',
    'steel',
    'invar',
    'electrum',
    'bronze',
    'enderium',
    'lumium',
    'signalum',
    'constantan',
    'brass',
    'copper',
    'iron',
    'gold',
];
const materials_type = [
    'ingot',
    'dust',
    'block',
    'nugget',
    'stick'
];*/
//Waitting cope
/*interim_items.forEach((interim_items) => {
    if (!Item.of(interim_items).isEmpty()) {
        event.hide(interim_items);
    }
});*/
const material_wire = [
    'nickel',
    'osmium',
    'platinum',
    'silver',
    'tin',
    'uranium',
    'zinc',
    'iridium',
    'invar',
    'electrum',
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