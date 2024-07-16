ServerEvents.tags("item", (event) => {
	material_wire.forEach((material) => {
		event
			.get('forge:wires')
			.add(`immersiveengineering:wire_${material}`);
            event
			.get(`forge:wires/${material}`)
			.add(`immersiveengineering:wire_${material}`);
	});
});
