const FLAVORS = {
    IOS: 'iOS',
    Android: 'Android'
} as const;
type FLAVORS = typeof FLAVORS[keyof typeof FLAVORS];

export {FLAVORS}
