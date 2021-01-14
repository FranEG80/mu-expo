import { registerRootComponent } from 'expo';
import React from 'react'

import App from './App';
import { GlobalProvider } from './stores/global.store';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(()=> (    
    <GlobalProvider>
        <App/>
    </GlobalProvider>
));