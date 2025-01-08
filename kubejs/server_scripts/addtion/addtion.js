// priority: 1

ServerEvents.tags('item', event => {
	// 将TFC的种子添加到随机种子生成器中
	event.add('forge:seeds', '#tfc:seeds')
	// 允许将TFC的泥土转化为粘土块
	event.add('forge:dust', '#tfc:dirt')
	// 将富矿加入随机矿物列表
	// Ingredient.of(/tfc:ore\/rich_(.[^\/]*)\/*(.[^\/]*)/).getItemIds().forEach(x => event.add('forge:ores', x))
})

ServerEvents.tags('block', event => {
	// 将富矿加入随机矿物列表
	// Ingredient.of(/tfc:ore\/rich_(.[^\/]*)\/*(.[^\/]*)/).getItemIds().forEach(x => event.add('forge:ores', x))
})

ServerEvents.recipes(event => {
	// 删除旧配方
	event.remove({ output: 'simple_resource_generators:random_ore_block_generator_placement' })
	event.remove({ output: 'simple_resource_generators:random_sapling_generator' })
	event.remove({ output: 'simple_resource_generators:random_seed_generator' })
	event.remove({ output: 'simple_resource_generators:advanced_ore_generator' })
	event.remove({ output: 'simple_resource_generators:raw_conversion_generator' })
	event.remove({ output: 'simple_resource_generators:simple_ore_generator_placement' })
	event.remove({ output: 'simple_resource_generators:simple_water_condenser' })
	event.remove({ output: 'simple_resource_generators:simple_lava_condenser' })
	
	event.remove({ output: 'simple_resource_generators:simple_ore_generator' })
	event.remove({ output: 'simple_resource_generators:random_ore_generator' })
	
	// 泥土转粘土
	event.custom({
		type: "ae2:transform",
		circumstance: { type: "fluid", tag: "minecraft:water" },
		ingredients: [
			{ tag: 'tfc:dirt' },
		],
		result: { item: 'minecraft:clay' }
	}).id('srgs:ae_transform/dirt_to_clay')
	
	// 石墨粉与红石转高岭石粉
	event.custom({
		type: "ae2:transform",
		circumstance: { type: "fluid", tag: "minecraft:water" },
		ingredients: [
			{ item: 'minecraft:redstone' },
			{ item: 'tfc:powder/graphite' },
		],
		result: { item: 'tfc:powder/kaolinite' }
	}).id('srgs:ae_transform/graphite_to_kaolinite')
	
	// 随机矿物生成器
	event.shaped('simple_resource_generators:random_ore_block_generator_placement', [
        'AB',
        'BA',
    ], {
        A: '#tfc:small_ore_pieces',
        B: '#forge:rods/wood',
    }).id('srgs:crafting/random_ore_block_generator_placement')
	
	// 随机树种生成器
	event.shaped('simple_resource_generators:random_sapling_generator', [
        'AB',
        'BA',
    ], {
        A: '#minecraft:saplings',
        B: '#forge:rods/wood',
    }).id('srgs:crafting/random_sapling_generator')
	
	// 随机种子生成器
	event.shaped('simple_resource_generators:random_seed_generator', [
        'AB',
        'BA',
    ], {
        A: '#forge:seeds',
        B: '#forge:rods/wood',
    }).id('srgs:crafting/random_seed_generator')
	
	// 高级指定矿物生成器
	event.shaped('simple_resource_generators:advanced_ore_generator', [
        'CBC',
        'BAB',
        'CBC',
    ], {
        A: '#forge:raw_materials',
        B: '#minecraft:planks',
        C: '#forge:rods/wood',
    }).id('srgs:crafting/advanced_ore_generator')
	
	// 指定矿物转换器
	event.shaped('simple_resource_generators:raw_conversion_generator', [
        ' B ',
        'BAB',
        ' B ',
    ], {
        A: '#forge:raw_materials',
        B: '#minecraft:planks',
    }).id('srgs:crafting/raw_conversion_generator')
	
	// 指定矿物复制器
	event.shaped('simple_resource_generators:simple_ore_generator_placement', [
        ' B ',
        'BAB',
        ' B ',
    ], {
        A: '#forge:raw_materials',
        B: '#forge:rods/wood',
    }).id('srgs:crafting/simple_ore_generator_placement')
	
	// 水生成器
	event.shaped('simple_resource_generators:simple_water_condenser', [
        'CBC',
        'BAB',
        'CBC',
    ], {
        A: 'tfc:wooden_bucket',
        B: '#minecraft:planks',
        C: '#forge:rods/wood',
    }).id('srgs:crafting/simple_water_condenser')
	
	// 岩浆生成器
	event.shaped('simple_resource_generators:simple_lava_condenser', [
        'CBC',
        'BAB',
        'CBC',
    ], {
        A: 'simple_resource_generators:simple_water_condenser',
        B: '#minecraft:planks',
        C: '#forge:rods/wood',
    }).id('srgs:crafting/simple_lava_condenser')
})
