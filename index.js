
const retardBase = function () {
    /*
     * @param {object}
     * @public
     * @return {string}
     */
    this.full= function (elements){
        return full(
            elements
        );
     };
    /*
     * @param {string} 
     * @param {object} 
     * @param {object} 
     * @public
     * @return {string}
     */
     this.make = function (element, attributions, inside) {
         return make(
             element,
             attributions, inside
         );
     };
    /*
     * @param {string}
     * @param {object}
     * @public
     * @return {string}
     */
     this.single = function (element, attributions) {
         return single(element, attributions);
     };
    /*
     * @param {object} 
     * @private
     * @return {string}
     */
     let full= function (elements){
         let t = '';
         if(typeof elements.i === 'string'){
             t=elements.i; 
         }else if (typeof elements.i === 'object'){
             if(Array.isArray(elements.i)){
                 for(let n = 0 ; elements.i.length > n ; n++)
                     t+=full(
                         elements.i[n]
                     );
             }else{
                 t = full(
                     elements.i
                 );
             };
         };
         return make(
             elements.e, 
             elements.a, 
             t
         );
     };
    /*
     * @param {string} 
     * @param {object} 
     * @param {object} 
     * @private
     * @return {string}
     */
     let make = function (element, attributions, inside) {
         let out = '<' + element + ' ';
         for (let attr in attributions)
            out += attributionFull(
                attr, 
                attributions[attr]
            );
         return out + '>' + inside + '</' + element + '>';
     };
    /*
     * @param {string} 
     * @param {object} 
     * @private
     * @return {string}
     */
     let single = function (element, attributions) {
         let out = '<' + element + ' ';
         for (let attr in attributions)
            out += attributionFull(
                attr, 
                attributions[attr]
            );
         return out + '/>';
     };
    /*
     * @param {string} 
     * @param {array}||{string} 
     * @private
     * @return {string}
     */
     let attributionFull = function (attr, val) {
         return '' + attr + '="' + attributionValue(val) + '" ';
     };
    /*
     * @param {array}||{string} 
     * @private
     * @return {string}
     */
     let attributionValue = function (val) {
         let out = '';
         if (Array.isArray(val))
             for (let i = 0; val.length > i; i++)
                 out += val[i] + ' ';
         else
             out = val;
         return out;
    };
};
