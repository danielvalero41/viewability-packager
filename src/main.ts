import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { Amplify } from '@aws-amplify/core';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

Amplify.configure({
  Auth: {
    domain: environment.domain,
    poolId: environment.userPoolID,
    clientId: environment.cliendId,
    clientName: environment.clientName,
    // region: environment.region,
    // userPoolId: environment.userPoolID,
    // cliendId: environment.cliendId,
    // identityPoolId: environment.identityPoolId,
  },
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
