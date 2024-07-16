//priority: 900
ServerEvents.recipes((event) => {
	interim_items.forEach((interim_items) => {
		if (!Item.of(interim_items).isEmpty()) {
			event.remove(interim_items);
		}
	});
});
