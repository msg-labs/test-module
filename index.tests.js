const msg = require( './index' );
const assert = require( 'assert' );

const rxjs = require( 'rxjs' );

const tick = ( message = 'Passed' ) => console.log( `    ✓ ${message}` );
const ssrt = ( value, failure, success ) => assert( value, failure ) || tick( success );

ssrt( msg.init, 'It should contain an init property', 'Has init' );

ssrt( typeof msg.init === 'function',
    'Init should be a function',
    'Init is a function' );

ssrt( msg.init() instanceof rxjs.Observable,
    'Init should return an observable',
    'Init returns an observable' );


const subscribeNext = () => ssrt( true,
    'It should call the next function',
    'Calls the next method' );

const subscribeError = () => ssrt( false,
    'It should not call the error function' );

const subscribeComplete = () => ssrt( true,
    'It should call the complete function',
    'Calls the complete method' );

msg.init()
    .subscribe( {
        next: subscribeNext,
        error: subscribeError,
        complete: subscribeComplete
    } );


let nextTimes = 0;

msg.init()
    .subscribe( {
        next: () => nextTimes++,
        complete: () => ssrt( nextTimes === 1,
            'It should call next once and complete',
            'It calls next one time and then completes' )
    } );

const nextReturnsString = message => ssrt( typeof message === 'string',
    'It should return an string',
    'Returns an string' );

msg.init()
    .subscribe( {
        next: nextReturnsString
    } );


const unknowMessage = 'Unknow user, Welcome to msg labs!';

const nextWithDefaultMessage = message => ssrt( message === unknowMessage,
    'It should return a default message if no name is provided',
    'Returns the default message when no name is provided' );

msg.init()
    .subscribe( {
        next: nextWithDefaultMessage
    } );


const userMessage = 'Test, Welcome to msg labs!';
const userName = 'Test';

const assertNextWithParam = message => ssrt( message === userMessage,
    'It should customise the welcome message if a name is provided',
    'Customises the message if a parameter is provided' );


msg.init( userName )
    .subscribe( {
        next: assertNextWithParam
    } );

console.log( '\nAll good here!\n' );
