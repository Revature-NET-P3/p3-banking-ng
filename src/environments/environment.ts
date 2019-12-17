// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  title: "P3Bank (Debug)",
  production: false,
  apiUrl: "https://p3api.azurewebsites.net",
  //apiUrl: "https://localhost:44357",
  auth0Token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5qYzROMFZETVRZd05UYzNSVUZCTUVVMFJrRXhOakF4TWpORk1FRTROVEl5UmpVeE5EUTJSUSJ9.eyJpc3MiOiJodHRwczovL3AzLWJhbmtpbmcuYXV0aDAuY29tLyIsInN1YiI6ImI1cTlpZ21DMzhjUVBxSjdVNFM1Vk9mdGVsbVBVQ016QGNsaWVudHMiLCJhdWQiOiJwMy1iYW5raW5nIiwiaWF0IjoxNTc2NTQ4MDU3LCJleHAiOjE1NzY2MzQ0NTcsImF6cCI6ImI1cTlpZ21DMzhjUVBxSjdVNFM1Vk9mdGVsbVBVQ016IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.i5LMF4Vj8kpKabSSJG4g0ZulgPNCWZDS6FGOfy72irxfuMKTYQ8OParnpX06UpaE2vK-sDfTSJ5IE66i58EMZVSlTkXGSrstjf1odkvb1Q_PGx7LT6lmOXp_4jZgyNG1dyH-lWqc_yh7xhe5b_qR9b_Ecn5QatHrykiuKuGAlgRdCgLksJC_nS9Q6e2r1j41pn5W5Yul63htiCcE8xorO4WAGysDfRty_SmcKAuY5Z9OZKVw9pK5gF00TAuFKXCul4Fx_nW47HjK_yim1U5Is2cX28w9m9Tv3ZoF7-OMuUHkkvzrHp4upRdaz4Voze0AAHG76NmfH9_4dB9Kgc06uw"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error';  // Included with Angular CLI.import { ApiService } from 'src/app/services/api.service';

