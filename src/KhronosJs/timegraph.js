KhronosJs.timegraph = function( params ){
    
    Kinetic.Stage.apply(this,[params]);
    
    // list of attached charts (each chart is drawn)
    this.charts = new Kinetic.Layer();
    
    this.config = params.config;
    
    
    
};


Kinetic.Global.extend(KhronosJs.timegraph,Kinetic.Stage);