// Default values
cssVars({
     // Sources
    include       : 'style:not([data-ignore]),link[rel=stylesheet]',
    exclude       : 'link[rel=stylesheet]:not([href*="assets/css"])',
    variables     : {},
  
    // Options
    onlyLegacy    : true,
    preserveStatic: true,
    preserveVars  : false,
    silent        : false,
    updateDOM     : true,
    updateURLs    : true,
    watch         : true,
  });
  