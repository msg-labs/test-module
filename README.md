# @msg-labs/test-module [[Test Module]]

Just a test module to learn how to deploy and manage npm modules using different
organisations and users

## Usage

```javascript

const { init } = require( '@msg-labs/test-module' );

init()
    .subscribe( message => console.log( message ) );

```

## API

**init**

Returns a greeting message.

This message will be customised if the name parameter is present


```typescript
( name?: string ) => Observable<string>
```

*name* Target of the greet

*returns* Greeting wrapped into an observable

<hr>

