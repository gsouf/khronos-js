KhronosJs.timegraph = function( params ){
    
    Kinetic.Stage.apply(this,[params]);
    
    // list of attached charts (each chart is drawn)
    this.timelines = Array();
    this.config = params.config;
    
    /*
    
    STRUCTURE IS :
    
     | TimeGraph (Stage)
     |--> Background (Layer)
     |
     |--> |Graph (Layer)
          |    
          |--> Labels (Group)
          |
          |--> Positions (Group)
          |    
          |--> |TimelineGroup (Group) [Visible par of the graph]
               |    
               |--> | Fullgraph (Group) [overflow hidden into TimelineGroup]
                    |
                    |--> Grid (KhronosJs.dateGrid)
                    |--> LinesGroup (Group of timeline)
                    |--> Dates (groupe)
    
    
    
    
    */
    
    
    /**************************
     = INSTANCIATE THE LAYERS *
     =========================*/
    this.backgroundLayer = new Kinetic.Layer();    
    this.graphLayer      = new Kinetic.Layer();
    
    /**************************
     = INSTANCIATE THE GROUPS *
     =========================*/
        this.labelGroupe    = new Kinetic.Group();
        this.positionGroupe = new Kinetic.Group();
        this.graphGroupe    = new Kinetic.Group();
            this.fullGraphGroup = new Kinetic.Group();
                    this.gridGroup  = new KhronosJs.dateGrid(this.config);
                    this.lineGroup  = new Kinetic.Group();
                    this.dateGroup  = new Kinetic.Group();
            
    
    
    
    
    /******************************
     = CREATION OF THE BACKGROUND *
     =============================*/
    var bgRec=new Kinetic.Rect({
        fill: params.bgColor,
        x:0,
        y:0,
        height: this.getHeight(),
        width: this.getWidth()
    });
    
    this.backgroundLayer.add(bgRec);
    this.add(this.backgroundLayer);
    
    
    /********************************
     = CREATION OF THE LABEL GROUPE *
     ===============================*/
    
    this.labelGroupe.setHeight(this.graphLayer.height);
    this.labelGroupe.setWidth(80);
    
    var testRec=new Kinetic.Rect({
        fill: "FF0000",
        x:0,
        y:0,
        height: this.labelGroupe.getHeight(),
        width: this.labelGroupe.getWidth()
    });
    this.labelGroupe.add(testRec);
    
    
    /************************
     = CREATION OF THE GRID *
     =======================*/
    this.gridTime = new KhronosJs.dateGrid(this.config);
    //this.gridLayer.add(this.gridTime);
    
    
    
     /***************************
      = ADD LAYERS TO THE STAGE *
      ==========================*/   
//    this.add(this.backgroundLayer);
//    this.add(this.gridLayer);
//    this.gridLayer.setX(50);
//    this.timelineLayer.setX(50);
//    this.add(this.timelineLayer);


    this.add(this.graphLayer);
    
};




KhronosJs.timegraph.prototype = {
    
    addTimeline: function(timeline){
        this.timelines.push(timeline);
        this.lineGroup.add(timeline.getGroup());
        

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


