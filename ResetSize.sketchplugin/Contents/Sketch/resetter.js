var onRun = function(context) {

  var doc = context.document;
  var selection = context.selection;

  function alert(msg, title) {
    title = title || "alert";
    var app = [NSApplication sharedApplication];
    [app displayDialog:msg withTitle:title];

  };


  // Check if something selected

  if ([selection count] === 0) {
  alert('Please select at least one layer', 'Selection is empty')
  return;
  };

  // Checking if any of selected layers is simbols, and reseting all of them to original sizes

  var placeholder = '';

  var loopLookup = function(context) {

    for (var j = 0; j < [context count]; j++) {
        var layer = context[j];

            if ([layer class] == MSLayerGroup){
                var group = [layer layers]
                loopLookup(group);
              };

            if ([layer class] == MSSymbolInstance ) {
              layer.resetSizeToMaster()
            };
      };
  };

  loopLookup(selection);

}
