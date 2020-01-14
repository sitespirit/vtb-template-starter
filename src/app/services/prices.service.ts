import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PricesService {

  constructor() {

  }

  init(itinerary) {
    itinerary = this.addDefaultProperty(itinerary);
    itinerary = this.addPriceDifference(itinerary);

    return itinerary;
  }

  addDefaultProperty(itinerary)
  {
    itinerary.segments.forEach(segment => {
      segment.elements.forEach(element => {
        if(!element.optional) {
          element.isDefault = true;
        }
      })
    });

    return itinerary;
  }

  addPriceDifference(itinerary)
  {
    let currentPrice = 0;
    let extraUnitIds = itinerary.extraUnitIds ? itinerary.extraUnitIds : [];

    itinerary.segments.forEach(segment => {
      let groups = [];
      let groupCount = 0;

      segment.elements.forEach((element, i) => {
        if(element.isDefault && i > 0) groupCount = groupCount + 1;
        if(typeof groups[groupCount] == 'undefined') groups[groupCount] = [];

        groups[groupCount].push(element);

      });

      groups.forEach(group => {
        let basePrice = 0;

        group.forEach(element => {
          if(extraUnitIds.indexOf(element.unit) > -1) {
            element.addedValue = element.olPrices.salesTotal;
            element.addedValuePerPerson = (element.addedValue / Object.keys(element.olPrices.participants).length).toFixed(2);
          } else if(element.prices && element.optional == false) {
            basePrice = element.prices.price;
          }
        });

        group.forEach(element => {
          if(element.prices) {
            element.addedValue = Math.round((element.prices.price - basePrice) * 100) / 100;
            element.addedValuePerPerson = (element.addedValue / Object.keys(element.prices.participantPrices).length).toFixed(2);
          }
            
        })
      });
    });  

    return itinerary;
  }

  setRequired(itinerary, blockID, lineID) 
  {
    let foundBlock = false;
    let skipRest = false;
    let currentGroup = [];

    itinerary.segments.forEach(segment => {
      if(segment.TSBlock.id !== blockID) return;

      segment.elements.forEach((element, index) => {
        if(element.TSOrderline.id == lineID) {
          element.optional = false;
          foundBlock = true;
          
        } else if(element.isDefault && !foundBlock) {
          currentGroup = [element];
        } else if(element.isDefault && foundBlock) {
          skipRest = true;
        } else if(!skipRest) {
          currentGroup.push(element);
        }
      });
      
    });

    currentGroup.forEach(element => {
      element.optional = true;
    });
    
    return this.addPriceDifference(itinerary);
  }
}
