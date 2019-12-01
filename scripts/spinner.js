var rotatorRegion = Core.atlas.find("spinner-rotator");
var SpinBlock = extend(Block, {
	/*update: function(tile){
		this.spinRotation = (this.spinRotation + this.spinSpeed) % 1;
	},*/
	draw: function(tile){
		this.spinRotation = (this.spinRotation + this.spinSpeed) % 1;
		Draw.rect(rotatorRegion, tile.drawx(), tile.drawy(), this.spinRotation * 360);
	}
})

var spinner = new SpinBlock("spinner");
//spinner.update = true
spinner.spinRotation = 0;
spinner.spinSpeed = 0.01;
spinner.localizedName = "Spinny boi";
spinner.description = "it spin :O";
spinner.category = Category.production;
spinner.buildVisibility = BuildVisibility.shown;