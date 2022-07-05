export declare type ItemsWithIcons = Array<{
    icon?: string;
    items?: ItemsWithIcons;
}>;
export declare class DxtUtils {
    static correctIconName(icon: string): string;
    static correctItemsIcons(items: ItemsWithIcons): void;
}
//# sourceMappingURL=dxt-utils.d.ts.map