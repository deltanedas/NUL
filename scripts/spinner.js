var rotatorRegion = Core.atlas.find("ohno-ohno-drill-rotator");
print('Loading spinner...')

const spinner = extendContent(Block, "spinner", {
	update(tile){
		tile.rotation(tile.rotation() + 1)
	},

	draw(tile){
		Draw.rect(rotatorRegion, tile.drawx(), tile.drawy(), Time.time() * 2)
	}
});

spinner.update = true;
spinner.localizedName = "spinny boi";
spinner.description = "it spin :o";
spinner.rotate = true;
spinner.category = Category.production;
spinner.buildVisibility = BuildVisibility.shown

print("Created spinny boi!")
