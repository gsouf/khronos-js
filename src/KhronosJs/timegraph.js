/**
 * Copyright (c) 2013 Soufiane Ghzal
 * Code under MIT LICENSE
 * https://github.com/SneakyBobito/khronos-js
 */
KhronosJs.timegraph = function( params ){
    
    Kinetic.Stage.apply(this,[params]);
    
    
    // list of attached charts (each chart is drawn)
    this.timelines = Array();
    this.config = params.config;
    this.bgColor=params.bgColor;
    this.gridsColor=params.gridsColor;
    
    this.setHeight(this.config.yVal(this.config.maxY)+40);
    
    var self=this;
    
    /*
    
    STRUCTURE IS :
    
     | TimeGraph (Stage)
     |--> Background (Layer)
     |
     |--> |Graph (Layer)
          |    
          |--> |Labels (Group)
          |    |--> LabelsContainer (Group)
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
    this.graphLayer      = new Kinetic.Layer({y:3,height:this.height,width:this.width});
    
    /**************************
     = INSTANCIATE THE GROUPS *
     =========================*/
        this.labelGroup    = new Kinetic.Group();
            this.labelsContainer = new Kinetic.Group();
                this.valuesGroup = new KhronosJs.valuePannel(this.config);
        this.positionGroupe = new Kinetic.Group();
        this.graphGroupe    = new Kinetic.Group();
            this.fullGraphGroup = new Kinetic.Group();
                    this.gridGroup  = new KhronosJs.dateGrid(this.config,{gridsColor:this.gridsColor});
                    this.lineGroup  = new Kinetic.Group();
                    this.dateGroup  = new KhronosJs.datePannel(this.config);
            
    
    
    
    
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
    


    
    /*******************************
     = CREATION OF THE LABEL GROUP *
     ==============================*/
    
    
    this.labelGroup.setHeight(this.getHeight());
    this.labelGroup.setWidth(120);
    
    var bgLabel=new Kinetic.Rect({
        fill: this.bgColor,
        x:0,
        y:0,
        height: this.labelGroup.getHeight(),
        width: this.labelGroup.getWidth()
    });
    
    
    
    this.labelGroup.add(bgLabel);
    
    
    
    
    /**********************************
     = CREATION OF THE POSITION GROUP *
     =================================*/

    this.positionGroupe.setHeight(this.getHeight());
    this.positionGroupe.setWidth(0);
    this.positionGroupe.setX(this.getWidth()-this.positionGroupe.getWidth());
    

    
    var bgPosition=new Kinetic.Rect({
        fill: this.bgColor,
        x:0,
        y:0,
        height: this.positionGroupe.getHeight(),
        width: this.positionGroupe.getWidth()
    });
    this.positionGroupe.add(bgPosition);
    
       
       
       
       
    /*******************************
     = CREATION OF THE GRAPH GROUP *
     ==============================*/

    this.graphGroupe.setHeight(this.getHeight());
    this.graphGroupe.setWidth(this.getWidth()-this.positionGroupe.getWidth()-this.labelGroup.getWidth());
    this.graphGroupe.setX(this.labelGroup.getWidth());
    

    
    // CREATION OF THE FULLGRAPHGROUP
    //
    this.fullGraphGroup.setHeight(this.graphGroupe.getHeight());
    this.fullGraphGroup.setWidth(this.config.diffX(this.config.max));
    this.fullGraphGroup.setX(0);
    //*************************
    // SET DRAG EVENT FOR GRAPH
    this.fullGraphGroup.setDraggable(true);
    this.fullGraphGroup.setDragBoundFunc(function(pos) {
        var newX;

        var elmX=pos.x-self.graphGroupe.getX();
        
        
        if(elmX>10 || elmX<(-1)*this.getWidth()+self.graphGroupe.getWidth())
            newX = this.getAbsolutePosition().x;
        else
            newX=pos.x;
        
        self.refreshLabelPos();
        
        return {
          x: newX,
          y: this.getAbsolutePosition().y
        };
    });
    this.graphGroupe.add(this.fullGraphGroup);
    
    // ADD A RECT IN THE BACKGROUND. THIS RECT WILL ALLOW TO CATCH THE GROUP FOR DRAGGING (cant drag a group on empty area)
    //
    var dragingRect=new Kinetic.Rect({
        fill: this.bgColor,
        x:0,
        y:0,
        height: this.fullGraphGroup.getHeight(),
        width: this.config.diffX(this.config.max)
    });
    this.fullGraphGroup.add(dragingRect);
    // CREATION OF THE DATE
    //
    this.dateGroup.setHeight(40);
    this.dateGroup.setY(this.fullGraphGroup.getHeight()-this.dateGroup.getHeight());
    this.fullGraphGroup.add(this.dateGroup);
    // CREATION OF THE GRID
    //
    this.fullGraphGroup.add(this.gridGroup);
    // CREATION OF THE LINES
    //
    this.fullGraphGroup.add(this.lineGroup);
    
    
    /*******************************************
     = CREATE LINE TO SHOW LIMITS OF THE GRAPH *
     ==========================================*/
    var leftLine = new Kinetic.Line({
        points: [this.labelGroup.getWidth(), 0, this.labelGroup.getWidth(), this.fullGraphGroup.getHeight()-this.dateGroup.getHeight()],
        stroke: "#BBB",
        strokeWidth: 1
    });
    
    var rightLine = new Kinetic.Line({
        points: [0, 0, 0, this.fullGraphGroup.getHeight()-this.dateGroup.getHeight()],
        stroke: "#BBB",
        strokeWidth: 1
    });
    
    
    /*************************
     = CREATE VALUES GROUP *
     ========================*/
    this.valuesGroup.setX(this.labelGroup.getWidth()-12);
    
    /***************************
     = ADD GROUPS TO THE LAYER *
     ==========================*/
    
    
    this.graphLayer.add(this.graphGroupe);// WE CREATE IT BEFORE BECAUSE LEFT AND RIGHT PAN HIDE OVERFLOW
    this.graphLayer.add(this.positionGroupe);
    this.graphLayer.add(this.labelGroup);
    
    this.labelGroup.add(leftLine);
    this.labelGroup.add(this.valuesGroup);
    this.positionGroupe.add(rightLine);
    this.labelGroup.add(this.labelsContainer);
    
    
    
    
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
    
    console.log(this.fullGraphGroup.getWidth());
    
};




/*************
 = PROTOTYPE *
 ============*/

KhronosJs.timegraph.prototype = {
    
    addTimeline: function(timeline){
        this.timelines.push(timeline);
        this.lineGroup.add(timeline.getGroup());
        
        this.refreshTimeline(timeline);
        this.draw();
    },
    
    refresh: function(){

        this.labelsContainer.removeChildren();

        for( var k in this.timelines){
            
            this.refreshTimeline(this.timelines[k]);
            
        }
        
        this.draw();
    },
      
    refreshLabelPos: function(){
        
        var date=this.config.diffXToDate(Math.abs(this.fullGraphGroup.getX()));
        
        for( var k in this.timelines ){
            
            this.timelines[k].refreshLabelPos(date,this.config);
            
        }

    },
    
    refreshTimeline: function(timeline){
            
            
            //******************
            // REMAKE THE LINES
            timeline.draw(this.config);
            
            //*************
            // MAKE LEGEND
            var legend=timeline.legend;
            if(legend!==undefined){

                label=timeline.getLabel();
                label.setX(this.labelGroup.getWidth()-20);
                this.labelsContainer.add(label);
                this.labelsContainer.draw();
                timeline.refreshLabelPos(this.config.min,this.config);
            }
            
  
    }
    
}


Kinetic.Global.extend(KhronosJs.timegraph,Kinetic.Stage);


