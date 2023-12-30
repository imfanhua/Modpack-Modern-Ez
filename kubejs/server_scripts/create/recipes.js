// priority: 0

const registerCreateRecipes = (event) => {
    
    // Удаление рецептов мода create 
    /*
    event.remove({ not: [
        { id: 'create:crafting/kinetics/gearboxfrom_conversion' },
        { id: 'create:crafting/kinetics/gearbox' },
        { id: 'create:crafting/kinetics/clutch' },
        { id: 'create:crafting/kinetics/gearshift' },
        { id: 'create:crafting/kinetics/adjustable_chain_gearshift' },
        { id: 'create:crafting/kinetics/water_wheel' },
        { id: 'create:crafting/kinetics/large_water_wheel' },
        { id: 'create:crafting/kinetics/encased_fan' },
        { id: 'create:crafting/kinetics/turntable' },
        { id: 'create:crafting/kinetics/cuckoo_clock' },
        { id: 'create:crafting/kinetics/mysterious_cuckoo_clock' },
        { id: 'create:crafting/kinetics/millstone' },
        { id: 'create:crafting/kinetics/mechanical_mixer' },
        { id: 'create:crafting/kinetics/weighted_ejector' },
        { id: 'create:crafting/kinetics/smart_chute' },
        { id: 'create:crafting/kinetics/speedometerfrom_conversion' },
        { id: 'create:crafting/kinetics/speedometer' },
        { id: 'create:crafting/kinetics/stressometerfrom_conversion' },
        { id: 'create:crafting/kinetics/mechanical_pump' },
        { id: 'create:crafting/kinetics/smart_fluid_pipe' },
        { id: 'create:crafting/kinetics/portable_fluid_interface' },
        { id: 'create:crafting/kinetics/mechanical_piston' },
        { id: 'create:crafting/kinetics/sticky_mechanical_piston' },
        { id: 'create:crafting/kinetics/gantry_carriage' },
        { id: 'create:crafting/kinetics/windmill_bearing' },
        { id: 'create:crafting/kinetics/mechanical_bearing' },
        { id: 'create:crafting/kinetics/clockwork_bearing' },
        { id: 'create:crafting/kinetics/linear_chassisfrom_conversion' },
        { id: 'create:crafting/kinetics/secondary_linear_chassisfrom_conversion' },
        { id: 'create:crafting/kinetics/contraption_controls' },
        { id: 'create:crafting/kinetics/deployer' },
        { id: 'create:crafting/kinetics/portable_storage_interface' },
        { id: 'create:crafting/kinetics/mechanical_roller' },
        { id: 'create:crafting/kinetics/sail_framefrom_conversion' },
        { id: 'create:crafting/kinetics/white_sailfrom_conversion' },
        { id: 'create:crafting/kinetics/sequenced_gearshift' },
        { id: 'create:crafting/kinetics/rotation_speed_controller' },
        { id: 'create:crafting/kinetics/track_station' },
        { id: 'create:crafting/kinetics/track_signal' },
        { id: 'create:crafting/kinetics/track_observer' },
        { id: 'create:crafting/kinetics/controls' },
        { id: 'create:crafting/kinetics/content_observer' },
        { id: 'create:crafting/kinetics/stockpile_switch' },
        { id: 'create:crafting/logistics/display_link' },
        { id: 'create:crafting/kinetics/nixie_tube' },
        { id: 'create:crafting/logistics/redstone_link' },
        { id: 'create:crafting/kinetics/analog_lever' },
        { id: 'create:crafting/kinetics/placard' },
        { id: 'create:crafting/logistics/pulse_repeater' },
        { id: 'create:crafting/logistics/pulse_extender' },
        { id: 'create:crafting/logistics/powered_latch' },
        { id: 'create:crafting/logistics/powered_toggle_latch' },
        { id: 'create:crafting/kinetics/crafter_slot_cover' },
        { id: 'create:crafting/kinetics/vertical_gearboxfrom_conversion' },
        { id: 'create:crafting/kinetics/goggles' },
        { id: 'create:crafting/kinetics/wrench' },
        { id: 'create:crafting/kinetics/contraption_controls' },
        { id: 'create:crafting/appliances/linked_controller' },
        { id: 'create:crafting/appliances/filter_clear' },
        { id: 'create:crafting/appliances/attribute_filter_clear' },
        { id: 'create:crafting/appliances/schedule_clear' },
        { id: 'create:crafting/schematics/empty_schematic' },
        { id: 'create:crafting/schematics/schematic_and_quill' },
        { id: 'create:crafting/curiosities/brown_toolbox' },
        { id: 'create:crafting/appliances/clipboard_clear' },
        { id: 'create:crafting/kinetics/andesite_door' },
        { id: 'create:crafting/kinetics/brass_door' },
        { id: 'create:crafting/kinetics/copper_door' },
        { id: 'create:crafting/kinetics/train_door' },
        { id: 'create:crafting/kinetics/train_trapdoor' },
    ], mod: 'create' })*/

    // Пушка для постройки схематик
    event.shaped('create:schematicannon', [
        ' A ',
        'BAB',
        'CDC' 
    ], {
        A: '#forge:storage_blocks/wrought_iron',
        B: '#minecraft:logs',
        C: '#tfc:rock/smooth',
        D: 'minecraft:dispenser',
    }).id('tfg:create/shaped/schematicannon')

    // Стол для схематик
    event.shaped('create:schematic_table', [
        'AAA',
        ' B ',
        ' B ' 
    ], {
        A: '#minecraft:wooden_slabs',
        B: '#tfg:rock_walls'
    }).id('tfg:create/shaped/schematic_table')

    // Вал
    event.shaped('8x create:shaft', [
        'A ',
        'AB'
    ], {
        A: '#forge:ingots/wrought_iron',
        B: '#forge:tools/files'
    }).id('tfg:create/shaped/shaft')

    event.recipes.gtceu.assembler('create/shaft')             
        .itemInputs('#forge:ingots/wrought_iron')
        .itemOutputs('6x create:shaft')
        .duration(75)
        .EUt(2)

    // Малая шестерня
    event.shapeless('create:cogwheel', [
        'create:shaft',
        '#forge:gears/wood'
    ]).id('tfg:create/shapeless/cogwheel')

    // Большая шестерня
    event.shaped('create:large_cogwheel', [
        ' A ',
        'ABA',
        ' A ' 
    ], {
        A: '#forge:gears/wood',
        B: 'create:shaft'
    }).id('tfg:create/shaped/large_cogwheel')

    // Внутриблочный двигатель цепи
    event.shapeless('create:encased_chain_drive', [
        'create:andesite_casing',
        '#forge:plates/wrought_iron',
        '#forge:plates/wrought_iron',
        '#forge:plates/wrought_iron'
    ]).id('tfg:create/shapeless/encased_chain_drive')

    // Механический пресс
    event.shaped('create:mechanical_press', [
        'A',
        'B',
        'C' 
    ], {
        A: 'create:shaft',
        B: 'create:andesite_casing',
        C: '#forge:storage_blocks/wrought_iron',
    }).id('tfg:create/shaped/mechanical_press')

    // Сопло
    event.shaped('create:nozzle', [
        'ABA',
        'ACA',
        'BBB' 
    ], {
        A: '#forge:rods/wrought_iron',
        B: '#forge:plates/wrought_iron',
        C: '#minecraft:wool'
    }).id('tfg:create/shaped/nozzle')

    // Ручка, чтобы люто крутить
    event.shaped('create:hand_crank', [
        'AAA',
        '  B'
    ], {
        A: '#tfc:lumber',
        B: '#forge:rods/wrought_iron'
    }).id('tfg:create/shaped/hand_crank')

    // Колесо для дробления
    event.recipes.createMechanicalCrafting('2x create:crushing_wheel', [
        ' AAA ',
        'AABAA',
        'ABCBC',
        'AABAA',
        ' AAA '
    ], {
        A: '#forge:plates/wrought_iron',
        B: '#minecraft:planks',
        C: '#tfc:rock/hardened'
    }).id('tfg:create/mechanical_crafting/crushing_wheel')

    // Железный веник
    event.shaped('create:whisk', [
        'ABA',
        'ACA',
        'AAA' 
    ], {
        A: '#forge:plates/wrought_iron',
        B: '#forge:rods/long/wrought_iron',
        C: '#forge:rings/wrought_iron'
    }).id('tfg:create/shaped/whisk')

    // Емкость для миксера
    event.shaped('create:basin', [
        'ABA',
        'AAA' 
    ], {
        A: '#forge:plates/wrought_iron',
        B: '#forge:tools/hammers'
    }).id('tfg:create/shaped/basin')

    // Место куда можно что то положить
    event.shapeless('create:depot', [
        'create:andesite_casing',
        '#forge:double_plates/wrought_iron'
    ]).id('tfg:create/shapeless/depot')

    // Лоток
    event.shaped('create:chute', [
        'A ',
        'AB',
        'A ' 
    ], {
        A: '#forge:plates/wrought_iron',
        B: '#forge:tools/hammers'
    }).id('tfg:create/shaped/chute')

    // Металлический держатель
    event.shaped('create:metal_bracket', [
        'AAA',
        'BBB'
    ], {
        A: '#forge:nuggets/wrought_iron',
        B: '#forge:plates/wrought_iron'
    }).id('tfg:create/shaped/metal_bracket')

    // Жидкостная труба
    event.shaped('create:fluid_pipe', [
        ' B ',
        'BAB',
        ' B ' 
    ], {
        A: '#forge:tools/hammers', 
        B: '#forge:plates/copper'
    }).id('tfg:create/shaped/fluid_pipe')

    // Жидкостный люк
    event.shapeless('create:fluid_valve', [
        'create:fluid_pipe',
        '#forge:plates/wrought_iron'
    ]).id('tfg:create/shapeless/fluid_valve')

    // Ручка жидкостного люка
    event.shaped('create:copper_valve_handle', [
        'AAA',
        'BCD'
    ], {
        A: '#forge:plates/copper',
        B: '#forge:tools/hammers',
        C: '#forge:gears/wrought_iron',
        D: '#forge:tools/files'
    }).id('tfg:create/shaped/copper_valve_handle')

    // Жидкостный резервуар
    event.shaped('create:fluid_tank', [
        'ABA',
        'BCB',
        'ABA' 
    ], {
        A: '#forge:screws/copper',
        B: '#forge:plates/copper',
        C: '#forge:glass_panes'
    }).id('tfg:create/shaped/fluid_tank')

    // Шкив для шланга
    event.shaped('create:hose_pulley', [
        'A',
        'B',
        'C' 
    ], {
        A: 'create:copper_casing',
        B: '#forge:foils/rubber',
        C: '#forge:plates/copper'
    }).id('tfg:create/shaped/hose_pulley')

    // Слив из предметов
    event.shaped('create:item_drain', [
        'A',
        'B' 
    ], {
        A: '#tfg:metal_bars',
        B: 'create:copper_casing'
    }).id('tfg:create/shaped/item_drain')

    // Жидкостный наполнитель
    event.shaped('create:spout', [
        'B',
        'A' 
    ], {
        A: '#forge:foils/rubber',
        B: 'create:copper_casing'
    }).id('tfg:create/shaped/spout')

    // Паровой двигатель
    event.shaped('create:steam_engine', [
        'ABA',
        'CDC',
        'EFG' 
    ], {
        A: '#forge:screws/wrought_iron',
        B: '#forge:plates/brass',
        C: '#forge:rods/wrought_iron',
        D: '#forge:gears/wrought_iron',
        E: '#forge:tools/hammers',
        F: '#forge:storage_blocks/copper',
        G: '#forge:tools/screwdrivers',
    }).id('tfg:create/shaped/steam_engine')

    // Паровой свисток
    event.shaped('create:steam_whistle', [
        'AC',
        'BD' 
    ], {
        A: '#forge:plates/brass',
        B: '#forge:rings/gold',
        C: '#forge:tools/hammers',
        D: '#forge:tools/files'
    }).id('tfg:create/shaped/steam_whistle')
    
    // Рука поршня
    event.shaped('8x create:piston_extension_pole', [
        'A ',
        'BC',
        'A ' 
    ], {
        A: '#minecraft:planks',
        B: '#forge:plates/wrought_iron',
        C: '#forge:tools/hammers'
    }).id('tfg:create/shaped/piston_extension_pole')

    // Редстоуновый вал
    event.shaped('create:gantry_shaft', [
        'A ',
        'BC',
        'A ' 
    ], {
        A: '#forge:plates/wrought_iron',
        B: '#forge:wires/single/red_alloy',
        C: '#forge:tools/hammers'
    }).id('tfg:create/shaped/gantry_shaft')

    // Канатный шкиф
    event.shaped('create:rope_pulley', [
        'A',
        'B',
        'C' 
    ], {
        A: 'create:andesite_casing',
        B: '#minecraft:wool',
        C: '#forge:plates/wrought_iron'
    }).id('tfg:create/shaped/rope_pulley')

    // Шкиф подъемника
    event.shaped('create:brass_casing', [
        'A',
        'B',
        'C' 
    ], {
        A: 'create:brass_casing',
        B: 'tfc:bellows',
        C: '#forge:plates/wrought_iron'
    }).id('tfg:create/shaped/brass_casing')

    // Сборщик вагонеток
    event.shaped('create:cart_assembler', [
        'ABA',
        'C C' 
    ], {
        A: '#forge:plates/steel',
        B: '#forge:wires/single/red_alloy',
        C: '#minecraft:logs'
    }).id('tfg:create/shaped/cart_assembler')

    // Контроллер рельсы
    event.shaped('create:controller_rail', [
        'ABA',
        'ACA',
        'ABA' 
    ], {
        A: '#forge:rods/gold',
        B: '#tfc:can_be_lit_on_torch',
        C: 'create:electron_tube'
    }).id('tfg:create/shaped/controller_rail')

    // Линейный переход
    event.shaped('3x create:linear_chassis', [
        'ABA',
        'CCC',
        'ABA' 
    ], {
        A: '#forge:screws/wrought_iron',
        B: '#forge:plates/wrought_iron',
        C: '#minecraft:logs'
    }).id('tfg:create/shaped/linear_chassis')

    // Радиальный переход
    event.shaped('3x create:radial_chassis', [
        'ACA',
        'BCB',
        'ACA' 
    ], {
        A: '#forge:screws/wrought_iron',
        B: '#forge:plates/wrought_iron',
        C: '#minecraft:logs'
    }).id('tfg:create/shaped/radial_chassis')

    // Умный липкий поршень
    event.shaped('create:sticker', [
        'ABA',
        'CDC' 
    ], {
        A: '#forge:plates/wrought_iron',
        B: 'minecraft:slime_ball',
        C: '#forge:cobblestone',
        D: '#forge:dusts/redstone'
    }).id('tfg:create/shaped/sticker')

    // Механическая бурилка
    event.shaped('create:mechanical_drill', [
        'ABA',
        'BCB',
        'ADA' 
    ], {
        A: '#forge:plates/wrought_iron',
        B: '#forge:drill_heads',
        C: 'create:cogwheel',
        D: 'create:andesite_casing'
    }).id('tfg:create/shaped/mechanical_drill')

    // Механическая пила
    event.shaped('create:mechanical_saw', [
        'ABA',
        'BCB',
        'ADA' 
    ], {
        A: '#forge:plates/wrought_iron',
        B: '#forge:buzz_saw_heads',
        C: 'create:cogwheel',
        D: 'create:andesite_casing'
    }).id('tfg:create/shaped/mechanical_saw')

    // Редстоуновый контакт
    event.shaped('2x create:redstone_contact', [
        'DCE',
        'ABA',
        'AAA' 
    ], {
        A: '#forge:cobblestone',
        B: '#forge:dusts/redstone',
        C: '#forge:plates/wrought_iron',
        D: '#forge:screws/bronze',
        E: '#forge:tools/screwdrivers'
    }).id('tfg:create/shaped/redstone_contact')

    // Механический собиратель
    event.shaped('create:mechanical_harvester', [
        'ABA',
        'ABA',
        'CDE' 
    ], {
        A: '#forge:shovel_heads',
        B: '#forge:plates/wrought_iron',
        C: '#forge:tools/hammers',
        D: 'create:andesite_casing',
        E: '#forge:tools/wrenches'
    }).id('tfg:create/shaped/mechanical_harvester')

    // Механический плуг
    event.shaped('create:mechanical_plough', [
        'ABA',
        'ABA',
        'CDE' 
    ], {
        A: '#forge:hoe_heads',
        B: '#forge:plates/wrought_iron',
        C: '#forge:tools/hammers',
        D: 'create:andesite_casing',
        E: '#forge:tools/wrenches'
    }).id('tfg:create/shaped/mechanical_plough')

    // Парус ветряной мельницы
    event.shaped('2x create:white_sail', [
        'AB',
        'BC' 
    ], {
        A: '#minecraft:wool',
        B: '#forge:rods/wooden',
        C: '#forge:screws/wrought_iron'
    }).id('tfg:create/shaped/white_sail')

    // Андезитовый корпус
    event.recipes.createItemApplication(['create:andesite_casing'], ['#minecraft:logs', '#forge:plates/wrought_iron'])
        .id('tfg:create/item_application/andesite_casing')

    // Латунный корпус
    event.recipes.createItemApplication(['create:brass_casing'], ['#minecraft:logs', '#forge:plates/brass'])
        .id('tfg:create/item_application/brass_casing')

    // Медный корпус
    event.recipes.createItemApplication(['create:copper_casing'], ['#minecraft:logs', '#forge:plates/copper'])
        .id('tfg:create/item_application/copper_casing')

    // Корпус поезда
    event.recipes.createItemApplication(['create:railway_casing'], ['create:brass_casing', '#forge:plates/steel'])
        .id('tfg:create/item_application/railway_casing')

    // Механический крафтер
    event.shaped('create:mechanical_crafter', [
        'A',
        'B',
        'C' 
    ], {
        A: 'create:electron_tube',
        B: 'create:brass_casing',
        C: '#tfc:workbenches'
    }).id('tfg:create/shaped/mechanical_crafter')

    // Маховик
    event.shaped('create:flywheel', [
        'ABA',
        'BCB',
        'ABA' 
    ], {
        A: '#forge:plates/brass',
        B: '#forge:rods/wrought_iron',
        C: 'create:shaft'
    }).id('tfg:create/shaped/flywheel')

    // Механическая рука
    event.shaped('create:mechanical_arm', [
        'AAB',
        'AGE',
        'CDF' 
    ], {
        A: '#forge:plates/brass',
        B: '#forge:rods/wrought_iron',
        C: 'create:precision_mechanism',
        D: 'create:brass_casing',
        E: '#forge:tools/hammers',
        F: '#forge:tools/wrenches',
        G: '#forge:screws/wrought_iron'
    }).id('tfg:create/shaped/mechanical_arm')

    // Наблюдатель за поездом
    event.shapeless('create:track_observer', [
        'create:railway_casing',
        '#minecraft:stone_pressure_plates'
    ]).id('tfg:create/shapeless/track_observer')

    // Сейф
    event.shaped('create:item_vault', [
        'CBC',
        'AAA',
        'CDC' 
    ], {
        A: '#forge:chests/wooden',
        B: '#forge:sheets/wrought_iron',
        C: '#forge:screw/wrought_iron',
        D: '#forge:tools/screwdrivers'
    }).id('tfg:create/shaped/item_vault')

    // Умный раздатчик/приемник из железа
    event.shaped('2x create:andesite_funnel', [
        'AAA',
        'ABA',
        'ACA' 
    ], {
        A: '#forge:plates/wrought_iron',
        B: '#forge:foils/rubber'
    }).id('tfg:create/shaped/andesite_funnel')

    // Умный раздатчик/приемник из латуни
    event.shaped('2x create:brass_funnel', [
        'AAA',
        'ABA',
        'ACA' 
    ], {
        A: '#forge:plates/brass',
        B: '#forge:foils/rubber'
    }).id('tfg:create/shaped/brass_funnel')

    // Тунель из железа
    event.shaped('create:andesite_tunnel', [
        'C ',
        'AA',
        'BB' 
    ], {
        A: '#forge:plates/wrought_iron',
        B: '#forge:foils/rubber',
        C: 'create:electron_tube'
    }).id('tfg:create/shaped/andesite_tunnel')

    // Тунель из латуни
    event.shaped('create:brass_tunnel', [
        'C ',
        'AA',
        'BB' 
    ], {
        A: '#forge:plates/brass',
        B: '#forge:foils/rubber',
        C: 'create:electron_tube'
    }).id('tfg:create/shaped/brass_tunnel')

    // Дисплей столешница (чзх)
    event.shaped('create:display_board', [
        ' A ',
        'BCB',
        ' A ' 
    ], {
        A: '#forge:plates/wrought_iron',
        B: '#forge:rings/wrought_iron',
        C: 'create:cogwheel'
    }).id('tfg:create/shaped/display_board')

    // Пропеллер
    event.shaped('create:propeller', [
        'AB ',
        'BCB',
        ' BA' 
    ], {
        A: '#forge:tools/hammers',
        B: '#forge:plates/wrought_iron',
        C: '#forge:rotors'
    }).id('tfg:create/shaped/propeller')

    // Латунная рука
    event.shaped('create:brass_hand', [
        ' AB',
        'CCA',
        ' C ' 
    ], {
        A: '#forge:tools/hammers',
        B: '#forge:nuggets/brass',
        C: '#forge:plates/brass'
    }).id('tfg:create/shaped/brass_hand')

    // Электронная трубка
    event.shaped('create:electron_tube', [
        ' A ',
        'BCB',
        'DED' 
    ], {
        A: 'gtceu:glass_tube',
        B: 'gtceu:resistor',
        C: 'gtceu:resin_circuit_board',
        D: '#forge:wires/single/red_alloy',
        E: '#forge:plates/wrought_iron'
    }).id('tfg:create/shaped/electron_tube')

    /*
    
    //
    event.shaped('', [
        'AAA',
        'AAA',
        'AAA' 
    ], {
        A: '',
        B: '',
        C: '',
        D: '',
        E: '',
        F: '',
        G: '',
    }).id('tfg:create/shaped/')
    
    //
    event.shapeless('', [
        
    ]).id('tfg:create/shapeless/')

    */

    
}