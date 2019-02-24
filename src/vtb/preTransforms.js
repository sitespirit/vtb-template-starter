const preTransforms = {
  setTargetAsCopy: function(args){
    args.dst = JSON.parse(JSON.stringify(args.src));
    return args;
  },
  removeCostPrices: function(args){
    if(args.dst != null && args.dst != null){
      delete args.dst.costPriceBeforeRounding;
      if(args.dst.segments != null){
        args.dst.segments.forEach(function(segment){
          if(segment.elements != null){
            segment.elements.forEach(function(element){
              if(element.olPrices != null){
                delete element.olPrices.costPrice;
                if(element.olPrices.participants != null){
                  for(var participant in element.olPrices.participants){
                    if(element.olPrices.participants[participant] != null){
                      delete element.olPrices.participants[participant].costPrice;
                    }
                  }
                }
              }
            });
          }
        });
      }
    }
    return args;
  }
}

module.exports = preTransforms;