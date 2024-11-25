/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as R404Import } from "./../../../pages/__404"
import { Route as rootRoute } from "./../../../pages/__root"
import { Route as IndexImport } from "./../../../pages/index"

// Create/Update Routes

const R404Route = R404Import.update({
   id: "/__404",
   path: "/*",
   getParentRoute: () => rootRoute,
   // biome-ignore lint/suspicious/noExplicitAny: <explanation>
} as any)

const IndexRoute = IndexImport.update({
   path: "/",
   getParentRoute: () => rootRoute,
   // biome-ignore lint/suspicious/noExplicitAny: <explanation>
} as any)

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
   interface FileRoutesByPath {
      "/": {
         preLoaderRoute: typeof IndexImport
         parentRoute: typeof rootRoute
      }
      "/__404": {
         preLoaderRoute: typeof R404Import
         parentRoute: typeof rootRoute
      }
   }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([IndexRoute, R404Route])

/* prettier-ignore-end */
