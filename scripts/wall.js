const wall = extendContent(Wall, "router-wall", {

	/*constructor(name){
		super(name);
		//Object.getPrototypeOf(this).Wall.apply(this, [name]);
		//entityType = ErraticMendingWallEntity.new;
	},*/

	update(tile) {
		tile.entity.addHeat(0.1);
		this.altUpdate(tile);
	},

	handleBulletHit(tile,bullet){
		tile.damage(bullet.damage());
		this.heat += Mathf.random(this.minHeatPerHitPercent,this.maxHeatPerHitPercent)*bullet.damage();
		this.altHandleBulletHit(tile,bullet);
	},

	setBars(){
		this.bars.add("health", func(entity => {
			return new Bar("blocks.health", Pal.health, floatp(() => {
				return entity.healthf();
			})).blink(Color.white);
		}));

		const block = this;
		this.bars.add("heat", func(entity => {
			return new Bar("blocks.speed", Color.orange, floatp(() => {
				return Mathf.clamp(entity.getHeat() / block.maxHeat, 0.0, 1.0);
			})).blink(Color.red);
		}));
	},

	/*
	| Alternative fonction for all private function,
	| use those ones if you want to add content to their original function
	| without broking everything.
	*/
	altHandleBulletHit(tile,bullet){},
	altUpdate(tile){}
});

wall.entityType = prov(() => extend(TileEntity, {
	addHeat(heat){
		this._heat += heat;
	},
	getHeat(){
		return this._heat;
	},
	_heat: 0
}));

wall.update = true;
wall.maxHeat = 60;
wall.category = Category.defense;
wall.name = "yes";
wall.description = "router wall";
wall.size = 2;
wall.health = 4;
wall.buildVisibility = BuildVisibility.shown;