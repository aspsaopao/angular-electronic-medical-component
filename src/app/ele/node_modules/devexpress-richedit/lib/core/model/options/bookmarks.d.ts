export declare class BookmarksSettings {
    conflictNameResolution: ConflictNameAction;
    visibility: BookmarksVisibility;
    color: string;
    constructor();
    copyFrom(obj: BookmarksSettings): void;
    clone(): BookmarksSettings;
}
export declare enum ConflictNameAction {
    Keep = 0,
    Rename = 1,
    Skip = 2
}
export declare enum BookmarksVisibility {
    Auto = 0,
    Visible = 1,
    Hidden = 2
}
//# sourceMappingURL=bookmarks.d.ts.map