WorldgenEvents.remove((event) => {
	event.removeFeatureById("underground_ores", [
        "thermal:tin_ore",
        "thermal:deepslate_tin_ore",
        "thermal:lead_ore",
        "thermal:deepslate_lead_ore",
        "thermal:silver_ore",
        "thermal:deepslate_silver_ore",
        "thermal:nickel_ore",
        "thermal:deepslate_nickel_ore",

        "occultism:silver_ore_deepslate",
        "occultism:silver_ore",

        //If you want to change it, due to mod issues, you can only make changes in [defaultconfigs\immersiveengineering-server.toml]
        /*"immersiveengineering:ore_aluminum",
        "immersiveengineering:deepslate_ore_aluminum",
        "immersiveengineering:ore_lead",
        "immersiveengineering:deepslate_ore_lead",
        "immersiveengineering:ore_silver",
        "immersiveengineering:deepslate_ore_silver",
        "immersiveengineering:ore_nickel",
        "immersiveengineering:deepslate_ore_nickel",
        "immersiveengineering:ore_uranium",
        "immersiveengineering:deepslate_ore_uranium",*/

        "mekanism:tin_ore",
        "mekanism:deepslate_tin_ore",
        "mekanism:osmium_ore",
        "mekanism:deepslate_osmium_ore",
        "mekanism:uranium_ore",
        "mekanism:deepslate_uranium_ore",
        "mekanism:lead_ore",
        "mekanism:deepslate_lead_ore",
    ]);
});
