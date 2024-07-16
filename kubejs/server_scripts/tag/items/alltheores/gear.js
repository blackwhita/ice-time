ServerEvents.tags("item", (event) => {
    event.get('forge:gears').add('alltheores:netherite_gear');
	event.get('forge:gears/netherite').add('alltheores:netherite_gear');
});
