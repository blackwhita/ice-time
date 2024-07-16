ServerEvents.tags("item", (event) => {
    event.get('forge:plates').add('alltheores:netherite_plate');
	event.get('forge:plates/netherite').add('alltheores:netherite_plate');
});
