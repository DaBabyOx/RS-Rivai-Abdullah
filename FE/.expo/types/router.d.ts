/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/Rencana (Child)/buatkunjungan` | `/(tabs)/jadwal` | `/(tabs)/profile` | `/(tabs)/rencana` | `/Rencana (Child)/buatkunjungan` | `/_sitemap` | `/jadwal` | `/modal` | `/profile` | `/rencana`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
