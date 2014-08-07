/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "play", function(sym, e) {
         // insert code to be run at timeline play here
         
      });
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "update", function(sym, e) {
         // insert code to be run on every tick of the timeline here.
         // Be careful not to block or do too much work!
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         /

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         sym.play(0);
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'TheAPP'
   (function(symbolName) {   
   
   })("TheAPP");
   //Edge symbol end:'TheAPP'

   //=========================================================
   
   //Edge symbol: 'Categories'
   (function(symbolName) {   
   
   })("Categories");
   //Edge symbol end:'Categories'

   //=========================================================
   
   //Edge symbol: 'Features'
   (function(symbolName) {   
   
   })("Features");
   //Edge symbol end:'Features'

   //=========================================================
   
   //Edge symbol: 'Future'
   (function(symbolName) {   
   
   })("Future");
   //Edge symbol end:'Future'

   //=========================================================
   
   //Edge symbol: 'Signature'
   (function(symbolName) {   
   
   })("Signature");
   //Edge symbol end:'Signature'

   //=========================================================
   
   //Edge symbol: 'Heading'
   (function(symbolName) {   
   
   })("Heading");
   //Edge symbol end:'Heading'

   //=========================================================
   
   //Edge symbol: 'Future_symbol'
   (function(symbolName) {   
   
   })("Future_symbol");
   //Edge symbol end:'Future_symbol'

   //=========================================================
   
   //Edge symbol: 'Register'
   (function(symbolName) {   
   
   })("Register");
   //Edge symbol end:'Register'

})(jQuery, AdobeEdge, "EDGE-36007173");