// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  skipRemoteConfigLoad: true,
  apiPrefix: 'bff',
  KEYCLOAK_URL: 'http://keycloak-app/',
  KEYCLOAK_REALM: 'OneCX',
  KEYCLOAK_CLIENT_ID: 'portal-mf-shell',
  TKIT_PORTAL_ID: 'ADMIN',
  DEFAULT_LOGO_PATH: 'assets/images/placeholder.png'
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
