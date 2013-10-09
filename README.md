khronos-js
==========

KhronosJs is a JS Library specialized in drawing temporal charts.

Be aware that it has been built under specific requirements and currently it mays no support all of your needing.


Installation
------------

KhronosJs is built on the top of [KineticJS](https://github.com/ericdrowell/KineticJS/). Then you will need KineticJS in addtion of KhronosJs.
You can download the latest release or use the one shipped with KhronosJs.

````html
        <script type="text/javascript"
                src="kineticjs.js"></script>
        <script type="text/javascript"
                src="khronos.min.js"></script>
````

Quick Doc
---------

Before creating any Chart, you need to create a config.

The config contains the bases about your chart :

````javascript

    var conf = new KhronosJs.config({
        // the unit of time that you want to show
        // "1d" for 1 day
        unit: "1d",

        // the first date to show in the graph
        min: new Date(2013,04,20),

        // the last date to show in the graph
        max: new Date(2013,05,30),

        // the first (ordinate) value to show
        minY: 0,

        // the last (ordinate) value to show
        maxY: 5,

        // pixel per unit X
        // it's the number of pixels for 1 horizontal unit
        // for instance with unit:"1d" and ppuX:40 then 1 day will be represented with 40 pixels
        ppuX: 40,

        // pixel per unit Y
        // it's the number of pixels for 1 vertical unit
        ppuY: 40
    });

````

Then you have to create a graph and a container for the graph (remember to create an html div with an id that will contain the graph).

````html

    <div id="timeline" ></div>
````

````javascript

    var graph=new KhronosJs.timegraph({

        // id of the container
        // that the dom element (usualy a div) in which the graph will be rendered
        container: 'timeline',

        // the width (px) of the graph (including border & co)
        width: 900,

        // the height (px) of the graph (including border & co)
        height: 200,

        // the config object that we just created
        config: conf,

        // color of the background of the graph
        bgColor: "#FFF",

        // color of the grids of the graph
        gridsColor: "#EEE"
    });

````

Now that we have a graph to be rendered in the div with the id "container" let's add some data into the graph :

````javascript

    // we create a timeline
    // the timeline is the line that will be shown
    var t=new KhronosJs.timeline({
        // legend of the timeline (to be shown in the left part of the grid)
        legend: "test1",

        // color of the timeline
        color: "#FF0000",
    });


    // now we add some points to the timeline
    // each point is a value associated with a date
    t.addPoint(new Date(2013,04,21),1);

    t.addPoint(new Date(2013,04,22),1);
    t.addPoint(new Date(2013,04,23),1);
    t.addPoint(new Date(2013,04,25),1);
    t.addPoint(new Date(2013,04,26),1);
    t.addPoint(new Date(2013,04,24),1);

    // finaly add the timeline to the graph
    graph.addTimeline(t);

````


Right now we have a graph with one line, but we can add some other timelines :

````javascript

    var t2=new KhronosJs.timeline({
        legend: "test2",
        color: "#FF00FF",
    });

    t2.addPoint(new Date(2013,04,21),2);
    t2.addPoint(new Date(2013,04,20),2);
    t2.addPoint(new Date(2013,04,22),3);
    t2.addPoint(new Date(2013,04,23),3);

    var t3=new KhronosJs.timeline({
        legend: "test3",
        color: "#00FFFF",
    });

    t3.addPoint(new Date(2013,04,21),3);
    t3.addPoint(new Date(2013,04,24),2);
    t3.addPoint(new Date(2013,04,22),2);
    t3.addPoint(new Date(2013,04,23),2);


    graph.addTimeline(t2);
    graph.addTimeline(t3);

````


Roadmap
-------
* Steps for the y axis / more configurations (colors...)
* fixing the top missing padding
* replace graph.addTimeline() with graph.addItem() in order to make it more extendable
* allow to show/unshow the grid
* add some cool examples
* make the time (X axis) legends more customable and more relevant
