KhronosJs.timegraph = function( params ){
    
    Kinetic.Stage.apply(this,[params]);
    
    // list of attached charts (each chart is drawn)
    this.timelines = Array();
    
    this.timelineLayer = new Kinetic.Layer();
    this.add(
        
        this.timelineLayer
        
        );
    

    
    //this.timelineLayer.add();
    
    this.config = params.config;
    
    
    
};

KhronosJs.timegraph.prototype = {
    
    addTimeline: function(timeline){
        this.timelines.push(timeline);
        this.timelineLayer.add(timeline.layer);
        this.refresh();
        
        
        
    },
    
    refresh: function(){
        for( var k in this.timelines){
            
            this.timelines[k].draw(this.config);
        }
        
        this.draw();
    }
    
}


Kinetic.Global.extend(KhronosJs.timegraph,Kinetic.Stage);


