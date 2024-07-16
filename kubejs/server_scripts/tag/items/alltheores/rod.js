ServerEvents.tags("item", (event) => {
    event.get('forge:rods').add('alltheores:netherite_rod');
	event.get('forge:rods/netherite').add('alltheores:netherite_rod');
});
