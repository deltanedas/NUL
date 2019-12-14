var region = Core.atlas.find("error");
print('Loading spinner...')

const spinner = extendContent(Block, "spinner", {
	init(){
		this.itSpin = 2; // it spin
	},
	buildConfiguration(tile, table){
		table.addImageButton(Icon.arrowUpSmall, Styles.clearTransi, run(() => {
			// Tell client to spin faster
			tile.configure(1);
		})).size(50);
		table.row();
		table.addImageButton(Icon.arrowDownSmall, Styles.clearTransi, run(() => {
			// Tell client to spin slower
			tile.configure(-1);
		})).size(50);
	},

	configured(tile, player, value){
		if(value ~= -1){
			value = 1;
		}

		this.itSpin += value;
	},

	draw(tile){
		Draw.rect(region, tile.drawx(), tile.drawy(), Time.time() * this.itSpin)
	}
});

spinner.localizedName = "spinny boi";
spinner.description = "it spin :o";
spinner.configurable = true;
spinner.category = Category.production;
spinner.buildVisibility = BuildVisibility.shown

print("Created spinny boi!")