#!/bin/bash
SOURCE_DIR='../src/KhronosJs'
OUPUT_FILE='../compiled/khronos.min.js'
STRINGCMD="java -jar ./compiler.jar "
addjs () {
    STRINGCMD="$STRINGCMD --js $SOURCE_DIR/$1.js"
}
echo "" > "$OUPUT_FILE"
addjs Khronos
addjs config
addjs timegraph
addjs point
addjs timeline
addjs dateGrid
addjs datePannel
addjs valuePannel

STRINGCMD="$STRINGCMD --js_output_file $OUPUT_FILE"
$STRINGCMD