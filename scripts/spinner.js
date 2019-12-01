var rotation = 0;
var rotatorRegion = Core.atlas.find("spinner-rotator");
var SpinBlock = extend(Block, {
	/*buildTable: function(tile, table){
		FloatingDialog dialog = new FloatingDialog("$editspeed");
		dialog.setFillParent(false);
		var area = dialog.cont.add(new TextArea("0.01")).size(380f, 160f).get();
		area.setFilter((textField, c) -> {
			if(c == '\n' || c == '\r'){
				int count = 0;
				for(int i = 0; i < textField.getText().length(); i++){
					if(textField.getText().charAt(i) == '\n' || textField.getText().charAt(i) == '\r'){
						count++;
					}
				}
				return count < maxNewlines;
			}
			return true;
		});
		area.setMaxLength(20);
		dialog.buttons.addButton("$ok", () -> {
			Call.setMessageBlockText(player, tile, a.getText());
			dialog.hide();
		}).size(130f, 60f);
		dialog.update(() -> {
			if(!tile.isValid()){
				dialog.hide();
			}
		});
		dialog.show();
	},*/
	update: function(tile){
		rotation = (rotation + this.rotateSpeed) % 1;
	},
	draw: function(tile){
		Draw.rect(rotatorRegion, tile.drawx(), tile.drawy(), rotation * 360);
	}
})

var spinner = new SpinBlock("spinner");
spinner.update = true;
spinner.rotateSpeed = 0.01;
spinner.localizedName = "Spinny boi";
spinner.description = "it spin :O";
spinner.category = Category.production;
spinner.buildVisibility = BuildVisibility.shown;