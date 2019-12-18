// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  title: "P3Bank (Debug)",
  production: false,
  apiUrl: "https://p3api.azurewebsites.net",
  //apiUrl: "https://localhost:44357",
  auth0Token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5qYzROMFZETVRZd05UYzNSVUZCTUVVMFJrRXhOakF4TWpORk1FRTROVEl5UmpVeE5EUTJSUSJ9.eyJpc3MiOiJodHRwczovL3AzLWJhbmtpbmcuYXV0aDAuY29tLyIsInN1YiI6ImI1cTlpZ21DMzhjUVBxSjdVNFM1Vk9mdGVsbVBVQ016QGNsaWVudHMiLCJhdWQiOiJwMy1iYW5raW5nIiwiaWF0IjoxNTc2NjcyNTAwLCJleHAiOjE1NzY3NTg5MDAsImF6cCI6ImI1cTlpZ21DMzhjUVBxSjdVNFM1Vk9mdGVsbVBVQ016IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.FZWU5NhqCtA-HnjPwHesMzNStEDKqX5ut4g3BMo2us3m7h9FsdNjDEkIKRS5hHj_UnhmZ8Il2Vr240dK-iHpgAE197or5OBOgpym2jQQNbpwwaaTk1KlVVu_l0W9iI1Q_wa3lVfZcdcBVV28o1woNUPwJ2ZI-e55HKWKrrjz2ciaFBbNBit60r5g-X9G3iD1W9qXYFLHpQfUh-l3BaXUry-ke7I8h9NnnQ6wRlE0eX51m1MfVwUsPNgp0pVC7OgLucyYxKUHidNUfGCAXKln2TkvZX5KjJOu43NlxTizaAB8-4A2isVASxhN5KmV_OzHxNFRTAZ_w97JC3RKyXjUwA"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error';  // Included with Angular CLI.import { ApiService } from 'src/app/services/api.service';

