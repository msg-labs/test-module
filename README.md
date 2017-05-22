# msg-labs-module [[Test Module]]

Just a test module to learn how to deploy and manage npm modules using different
organisations and users

## Usage

```javascript

const { init } = require( 'msg-labs-module' );

init()
    .subscribe( message => console.log( message ) );

```

## API

**init**
```typescript
( name?: string ) => Observable<string>
```
