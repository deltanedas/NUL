const region = Core.atlas.find("error");

const spinner = extendContent(Block, "spinner", {
	setBars(){
		this.bars.add("health", func(entity => {
			return new Bar("blocks.health", Pal.health, floatp(() => {
				return entity.healthf();
			})).blink(Color.white);
		}));

		const block = this;
		this.bars.add("speed", func(entity => {
			return new Bar("blocks.speed", Color.royal, floatp(() => {
				return (entity.getSpeed() + 3) / 10;
			})).blink(Color.red);
		}));
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

		tile.entity.addSpeed(value);
	},

	draw(tile){
		Draw.rect(region, tile.drawx(), tile.drawy(), Time.time() * tile.entity.getSpeed())
	}
});

spinner.entityType = prov(() => extend(TileEntity, {
	addSpeed(speed){
		this._speed += speed;
	},
	getSpeed(){
		return this._speed;
	},
	_speed: 2
}));

spinner.destructible = true;
spinner.solid = true;
spinner.localizedName = "spinny boi";
spinner.description = "it spin :o";
spinner.configurable = true;
spinner.category = Category.production;
spinner.buildVisibility = BuildVisibility.shown;