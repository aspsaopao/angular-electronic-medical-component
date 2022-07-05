export declare class ControlOptions {
    copy: DocumentCapability;
    createNew: DocumentCapability;
    cut: DocumentCapability;
    drag: DocumentCapability;
    drop: DocumentCapability;
    open: DocumentCapability;
    paste: DocumentCapability;
    printing: DocumentCapability;
    save: DocumentCapability;
    saveAs: DocumentCapability;
    download: DocumentCapability;
    fullScreen: DocumentCapability;
    tabMarker: string;
    pageBreakInsertMode: PageBreakInsertMode;
    characterFormatting: DocumentCapability;
    characterStyle: DocumentCapability;
    fields: DocumentCapability;
    hyperlinks: DocumentCapability;
    inlinePictures: DocumentCapability;
    paragraphFormatting: DocumentCapability;
    paragraphs: DocumentCapability;
    paragraphStyle: DocumentCapability;
    paragraphTabs: DocumentCapability;
    sections: DocumentCapability;
    tabSymbol: DocumentCapability;
    undo: DocumentCapability;
    bookmarks: DocumentCapability;
    numberingBulleted: DocumentCapability;
    numberingMultiLevel: DocumentCapability;
    numberingSimple: DocumentCapability;
    headersFooters: DocumentCapability;
    tables: DocumentCapability;
    tableStyle: DocumentCapability;
    floatingObjects: DocumentCapability;
    acceptsTab: boolean;
    raiseClientEventsOnModificationsViaAPI: boolean;
    static isEnabled(capability: DocumentCapability): boolean;
    static isVisible(capability: DocumentCapability): boolean;
    clone(): ControlOptions;
}
export declare enum DocumentCapability {
    Default = 0,
    Disabled = 1,
    Enabled = 2,
    Hidden = 3
}
export declare enum PageBreakInsertMode {
    NewLine = 0,
    CurrentLine = 1
}
//# sourceMappingURL=control.d.ts.map