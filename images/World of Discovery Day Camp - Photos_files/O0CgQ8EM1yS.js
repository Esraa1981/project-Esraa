if (self.CavalryLogger) { CavalryLogger.start_js(["+srbW"]); }

__d('MarketplaceSearchLocationRoute',['MarketplaceSearchResultsPageRoute','Relay'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('Relay').Route);i=h&&h.prototype;function j(){'use strict';h.apply(this,arguments);}j.routeName='MarketplaceSearchLocationRoute';j.path='/marketplace/location/{locationID}/search';j.paramDefinitions={query:{type:'String',required:true},minPrice:{type:'Int',required:false},maxPrice:{type:'Int',required:false},cat:{type:'String',required:false},locationID:{type:'String',required:true}};j.prepareParams=c('MarketplaceSearchResultsPageRoute').prepareParams;j.queries=c('MarketplaceSearchResultsPageRoute').queries;f.exports=j;}),null);