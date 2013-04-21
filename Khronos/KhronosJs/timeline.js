KhronosJS.timeline = function( params ){
    
    Kinetic.Stage.apply(this,[params]);
    
    // list of attached charts (each chart is drawn)
    this.charts = new Array();
    
    // interval 
    this.interval = null;
    
};

KhronosJS.timeline.prototype=Object.create(Kinetic.Stage);

