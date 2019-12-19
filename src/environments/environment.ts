// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  title: "P3Bank (Debug)",
  production: false,
  apiUrl: "https://p3api.azurewebsites.net",
  //apiUrl: "https://localhost:44357",
  auth0Token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5qYzROMFZETVRZd05UYzNSVUZCTUVVMFJrRXhOakF4TWpORk1FRTROVEl5UmpVeE5EUTJSUSJ9.eyJpc3MiOiJodHRwczovL3AzLWJhbmtpbmcuYXV0aDAuY29tLyIsInN1YiI6ImI1cTlpZ21DMzhjUVBxSjdVNFM1Vk9mdGVsbVBVQ016QGNsaWVudHMiLCJhdWQiOiJwMy1iYW5raW5nIiwiaWF0IjoxNTc2NzY1NzM5LCJleHAiOjE1NzY4NTIxMzksImF6cCI6ImI1cTlpZ21DMzhjUVBxSjdVNFM1Vk9mdGVsbVBVQ016IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.JS-VW9w25CwGencK244IYTJyKsMENNGEhM9vn6xgAPvQ_jnqnc2EyA5EmZfJDeI8xNlpWH3BhFz06aY-Oq-A9evPeT2Cp9gSt04r_xO6RAS4iv66cDSyxC8pZnkmDyMdHNOmF5y-4JFwjDxgQYr9tPd73nea1JecBH0-3mCQB9oZAbogHVuLPhOzx8f18dX-J4HSvyO4M8yuj16b5H-e4a5L2vW3uuoYMUEeIBq10xtMUIirZx7jCdN_5Up_roqlUBIWpdJ9uEHg4aWWNl2Gz94kqQWeG7RDsNXyntlPZ5Up0iZh-oigmRXe4XwcUrTE1ulUu7H4mbrLvY5kAi_1jA"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error';  // Included with Angular CLI.import { ApiService } from 'src/app/services/api.service';

