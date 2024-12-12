/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/modal`; params?: Router.UnknownInputParams; } | { pathname: `/ui/profile/auth/mail-auth/mail-preotp/page`; params?: Router.UnknownInputParams; } | { pathname: `/ui/profile/auth/mail-auth/mail-preotp/mail-otp/page`; params?: Router.UnknownInputParams; } | { pathname: `/ui/profile/auth/phone-auth/phone-preotp/page`; params?: Router.UnknownInputParams; } | { pathname: `/ui/profile/auth/phone-auth/phone-preotp/phone-otp/page`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/jadwal` | `/jadwal`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/profile` | `/profile`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/rencana` | `/rencana`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Rencana (Child)/buatkunjungan` | `/Rencana (Child)/buatkunjungan`; params?: Router.UnknownInputParams; } | { pathname: `/ui/profile/ProfileUI`; params?: Router.UnknownInputParams; } | { pathname: `/ui/profile/auth/login/page`; params?: Router.UnknownInputParams; } | { pathname: `/ui/profile/auth/mail-auth/page`; params?: Router.UnknownInputParams; } | { pathname: `/ui/profile/auth/mail-auth/mail-otp/page`; params?: Router.UnknownInputParams; } | { pathname: `/ui/profile/auth/phone-auth/page`; params?: Router.UnknownInputParams; } | { pathname: `/ui/profile/auth/phone-auth/phone-otp/page`; params?: Router.UnknownInputParams; } | { pathname: `/ui/profile/auth/register/page`; params?: Router.UnknownInputParams; } | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/modal`; params?: Router.UnknownOutputParams; } | { pathname: `/ui/profile/auth/mail-auth/mail-preotp/page`; params?: Router.UnknownOutputParams; } | { pathname: `/ui/profile/auth/mail-auth/mail-preotp/mail-otp/page`; params?: Router.UnknownOutputParams; } | { pathname: `/ui/profile/auth/phone-auth/phone-preotp/page`; params?: Router.UnknownOutputParams; } | { pathname: `/ui/profile/auth/phone-auth/phone-preotp/phone-otp/page`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/jadwal` | `/jadwal`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/profile` | `/profile`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/rencana` | `/rencana`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/Rencana (Child)/buatkunjungan` | `/Rencana (Child)/buatkunjungan`; params?: Router.UnknownOutputParams; } | { pathname: `/ui/profile/ProfileUI`; params?: Router.UnknownOutputParams; } | { pathname: `/ui/profile/auth/login/page`; params?: Router.UnknownOutputParams; } | { pathname: `/ui/profile/auth/mail-auth/page`; params?: Router.UnknownOutputParams; } | { pathname: `/ui/profile/auth/mail-auth/mail-otp/page`; params?: Router.UnknownOutputParams; } | { pathname: `/ui/profile/auth/phone-auth/page`; params?: Router.UnknownOutputParams; } | { pathname: `/ui/profile/auth/phone-auth/phone-otp/page`; params?: Router.UnknownOutputParams; } | { pathname: `/ui/profile/auth/register/page`; params?: Router.UnknownOutputParams; } | { pathname: `/+not-found`, params: Router.UnknownOutputParams & {  } };
      href: Router.RelativePathString | Router.ExternalPathString | `/modal${`?${string}` | `#${string}` | ''}` | `/ui/profile/auth/mail-auth/mail-preotp/page${`?${string}` | `#${string}` | ''}` | `/ui/profile/auth/mail-auth/mail-preotp/mail-otp/page${`?${string}` | `#${string}` | ''}` | `/ui/profile/auth/phone-auth/phone-preotp/page${`?${string}` | `#${string}` | ''}` | `/ui/profile/auth/phone-auth/phone-preotp/phone-otp/page${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/jadwal${`?${string}` | `#${string}` | ''}` | `/jadwal${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/profile${`?${string}` | `#${string}` | ''}` | `/profile${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/rencana${`?${string}` | `#${string}` | ''}` | `/rencana${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/Rencana (Child)/buatkunjungan${`?${string}` | `#${string}` | ''}` | `/Rencana (Child)/buatkunjungan${`?${string}` | `#${string}` | ''}` | `/ui/profile/ProfileUI${`?${string}` | `#${string}` | ''}` | `/ui/profile/auth/login/page${`?${string}` | `#${string}` | ''}` | `/ui/profile/auth/mail-auth/page${`?${string}` | `#${string}` | ''}` | `/ui/profile/auth/mail-auth/mail-otp/page${`?${string}` | `#${string}` | ''}` | `/ui/profile/auth/phone-auth/page${`?${string}` | `#${string}` | ''}` | `/ui/profile/auth/phone-auth/phone-otp/page${`?${string}` | `#${string}` | ''}` | `/ui/profile/auth/register/page${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/modal`; params?: Router.UnknownInputParams; } | { pathname: `/ui/profile/auth/mail-auth/mail-preotp/page`; params?: Router.UnknownInputParams; } | { pathname: `/ui/profile/auth/mail-auth/mail-preotp/mail-otp/page`; params?: Router.UnknownInputParams; } | { pathname: `/ui/profile/auth/phone-auth/phone-preotp/page`; params?: Router.UnknownInputParams; } | { pathname: `/ui/profile/auth/phone-auth/phone-preotp/phone-otp/page`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/jadwal` | `/jadwal`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/profile` | `/profile`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/rencana` | `/rencana`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Rencana (Child)/buatkunjungan` | `/Rencana (Child)/buatkunjungan`; params?: Router.UnknownInputParams; } | { pathname: `/ui/profile/ProfileUI`; params?: Router.UnknownInputParams; } | { pathname: `/ui/profile/auth/login/page`; params?: Router.UnknownInputParams; } | { pathname: `/ui/profile/auth/mail-auth/page`; params?: Router.UnknownInputParams; } | { pathname: `/ui/profile/auth/mail-auth/mail-otp/page`; params?: Router.UnknownInputParams; } | { pathname: `/ui/profile/auth/phone-auth/page`; params?: Router.UnknownInputParams; } | { pathname: `/ui/profile/auth/phone-auth/phone-otp/page`; params?: Router.UnknownInputParams; } | { pathname: `/ui/profile/auth/register/page`; params?: Router.UnknownInputParams; } | `/+not-found` | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
    }
  }
}
