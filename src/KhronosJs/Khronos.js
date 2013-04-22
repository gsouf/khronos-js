var KhronosJs={};

KhronosJs.handler={};


// usefull to sort by date when calling Array.sort();
KhronosJs.handler.sortDateAsc = function (date1, date2) {
    if (date1 > date2) return 1;
    if (date1 < date2) return -1;
    return 0;
};

// usefull to sort by date when calling Array.sort();
KhronosJs.handler.sortDateDesc = function (date1, date2) {
    if (date1 > date2) return -1;
    if (date1 < date2) return 1;
    return 0;
};