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

## Licensing

Copyright © 2017 Miguel Sanchez Gonzalez <miguelsanychez@gmail.com>

This work is free. You can redistribute it and/or modify it under the terms of
the Do What The Fuck You Want To Public License, Version 2, as published by Sam
Hocevar. See the LICENSE file for more details.

This program is free software. It comes without any warranty, to the extent
permitted by applicable law. You can redistribute it and/or modify it under the
terms of the Do What The Fuck You Want To Public License, Version 2, as
published by Sam Hocevar. See http://www.wtfpl.net/ for more details.
