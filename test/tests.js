test( "Test config ParseUnit", function() {
     
    var config = new Khronos.TimeConfig({
        unit : "1 day",
        ppuX : 10,
        ppuY : 10
    });
    
    
    ok( config._parseUnit("1 day") === 86400 );
    ok( config._parseUnit("2 day") === 86400 * 2);
    ok( config._parseUnit("6 day") === 86400 * 6);
    ok( config._parseUnit("1 minute") === 60 );
    ok( config._parseUnit("2 minute") === 60 * 2 );
    ok( config._parseUnit("6 minute") === 60 * 6 );
    
});

test( "Test config diffX", function() {
     
    var config = new Khronos.TimeConfig({
        unit : "1 day",
        ppuX : 10,
        ppuY : 10,
        minDate : moment("2013-01-01")
    });
    
    
    ok( config.diffX("2013-01-01") == 0 );
    ok( config.diffXPixel("2013-01-01") == 0 );
    ok( config.diffX("2013-01-02") == 1 );
    ok( config.diffXPixel("2013-01-02") == 10 );
    
    config.ppuX = 14;
    ok( config.diffX("2013-01-13") == 12 );
    ok( config.diffXPixel("2013-01-13") == (12 * 14) );
    
});


test( "Test config diffXToDate", function() {
     
    var config = new Khronos.TimeConfig({
        unit : "1 day",
        ppuX : 10,
        ppuY : 10,
        minDate : moment("2013-01-01")
    });
    
    ok(config.diffXToDate(0).valueOf() == config.minDate.valueOf());
    ok(config.diffXPixelToDate(0).valueOf() == config.minDate.valueOf());

    ok(config.diffXToDate(1).valueOf() == moment("2013-01-02").valueOf());
    ok(config.diffXPixelToDate(10).valueOf() == moment("2013-01-02").valueOf());
   
});

