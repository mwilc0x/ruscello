declare var km: KeyMirror;

declare module 'keymirror' {
  export = km;
}

interface KeyMirror {
  (obj: any): any;
}
