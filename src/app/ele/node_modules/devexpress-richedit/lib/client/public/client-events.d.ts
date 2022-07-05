import { ActiveSubDocumentChangedEvent, AutoCorrectEvent, CalculateDocumentVariableAsyncEvent, CalculateDocumentVariableEvent, CharacterPropertiesChangedEvent, CommandStateChangedEvent, ContentInsertedEvent, ContentRemovedEvent, CustomCommandExecutedEvent, DocumentChangedEvent, DocumentFormattedEvent, DocumentLoadedEvent, GotFocusEvent, HyperlinkClickEvent, KeyDownEvent, KeyUpEvent, LostFocusEvent, ParagraphPropertiesChangedEvent, PdfExportedEvent, PdfExportingEvent, PointerDownEvent, PointerUpEvent, ContextMenuShowingEvent, SavedEvent, SavingEvent, SelectionChangedEvent } from './events';
export declare class Events {
    readonly selectionChanged: SelectionChangedEvent;
    readonly documentLoaded: DocumentLoadedEvent;
    readonly documentFormatted: DocumentFormattedEvent;
    readonly documentChanged: DocumentChangedEvent;
    readonly activeSubDocumentChanged: ActiveSubDocumentChangedEvent;
    readonly gotFocus: GotFocusEvent;
    readonly lostFocus: LostFocusEvent;
    readonly hyperlinkClick: HyperlinkClickEvent;
    readonly pointerDown: PointerDownEvent;
    readonly pointerUp: PointerUpEvent;
    readonly keyDown: KeyDownEvent;
    readonly keyUp: KeyUpEvent;
    readonly calculateDocumentVariable: CalculateDocumentVariableEvent;
    readonly contentInserted: ContentInsertedEvent;
    readonly contentRemoved: ContentRemovedEvent;
    readonly characterPropertiesChanged: CharacterPropertiesChangedEvent;
    readonly paragraphPropertiesChanged: ParagraphPropertiesChangedEvent;
    readonly autoCorrect: AutoCorrectEvent;
    readonly saving: SavingEvent;
    readonly saved: SavedEvent;
    readonly customCommandExecuted: CustomCommandExecutedEvent;
    readonly pdfExporting: PdfExportingEvent;
    readonly pdfExported: PdfExportedEvent;
    readonly commandStateChanged: CommandStateChangedEvent;
    readonly calculateDocumentVariableAsync: CalculateDocumentVariableAsyncEvent;
    readonly contextMenuShowing: ContextMenuShowingEvent;
    constructor();
    clear(): void;
}
//# sourceMappingURL=client-events.d.ts.map