const { of } = require( 'rxjs' );


/**
 *
 * Returns a greeting message.
 *
 * This message will be customised if the name parameter is present
 *
 * @param {string?} name Target of the greet
 *
 * @return {Observable<string>} Greeting wrapped into an observable
 *
 */
module.exports.init = ( name = 'Unknow user' ) =>
    of( `${name}, Welcome to msg labs!` );

