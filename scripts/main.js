const region = Core.atlas.find("error");

var map = {};

const spinner = extendContent(Block, "spinner", {
	placed(tile){
		const key = tile.x + "," + tile.y;
		map[key] = 2;
	},
	buildConfiguration(tile, table){
		table.addImageButton(Icon.upSmall, Styles.clearTransi, run(() => {
			// Tell client to spin faster
			tile.configure(1);
		})).size(50);
		table.row();
		table.addImageButton(Icon.downSmall, Styles.clearTransi, run(() => {
			// Tell client to spin slower
			tile.configure(-1);
		})).size(50);
	},

	configured(tile, player, value){
		if(value != -1){
			value = 1;
		}

		const key = tile.x + "," + tile.y;
		map[key] += value;
	},

	draw(tile){
		const key = tile.x + "," + tile.y;
		Draw.rect(region, tile.drawx(), tile.drawy(), Time.time() * map[key])
	}
});
spinner.solid = true;
spinner.localizedName = "spinny boi";
spinner.description = "it spin :o";
spinner.configurable = true;
spinner.category = Category.production;
spinner.buildVisibility = BuildVisibility.shown
