var spinRotation = 0.0;
var rotatorRegion = Core.atlas.find("ohno-drill-rotator");
var SpinBlock = extend(Block, {
	draw: function(tile){
		spinRotation = (spinRotation + 0.001) % 1;
		Draw.rect(rotatorRegion, tile.drawx(), tile.drawy(), spinRotation * 360);
	}
})

var spinner = new SpinBlock("spinner");
spinner.localizedName = "Spinny boi";
spinner.description = "it spin :O";
spinner.category = Category.production;
spinner.buildVisibility = BuildVisibility.shown;

System.out.println("oh no");