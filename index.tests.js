const msg = require( './index' );
const assert = require( 'assert' );

const rxjs = require( 'rxjs' );

const tick = ( message = 'Passed' ) => console.log( `    ✓ ${message}` );

assert( msg.init,
    'It should contain an init property' ) || tick( 'Has init' );

assert.strictEqual( typeof msg.init, 'function',
    'Init should be a function' ) || tick( 'Init is a function' );

assert( msg.init() instanceof rxjs.Observable,
    'Init should return an observable' ) || tick( 'Init returns an observable' );


const subscribeNext = () => assert( true,
    'It should call the next function' ) || tick( 'Calls the next method' );

const subscribeError = () => assert( false,
    'It should not call the error function' );

const subscribeComplete = () => assert( true,
    'It should call the complete function' ) ||
    tick( 'Calls the complete method' );

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
        complete: () => assert.strictEqual( nextTimes, 1,
            'It should call next once and complete' ) ||
        tick( 'It calls next one time and then completes' )
    } );

const nextReturnsString = message => assert( typeof message === 'string',
    'It should return an string' ) || tick( 'Returns an string' );

msg.init()
    .subscribe( {
        next: nextReturnsString
    } );

const nextWithDefaultMessage = message =>
    assert.strictEqual( message, 'Unknow user, Welcome to msg labs!',
        'It should return a default message if no name is provided' ) ||
    tick( 'Returns the default message when no name is provided' );

msg.init()
    .subscribe( {
        next: nextWithDefaultMessage
    } );


const nameParam = 'Test';
const assertNextWithParam = message =>
    assert.strictEqual( message, `Test, Welcome to msg labs!`,
        'It should customise the welcome message if a name is provided' ) ||
    tick( 'Customises the message if a parameter is provided' );


msg.init( nameParam )
    .subscribe( {
        next: assertNextWithParam
    } );

console.log( '\nAll good here!\n' );
