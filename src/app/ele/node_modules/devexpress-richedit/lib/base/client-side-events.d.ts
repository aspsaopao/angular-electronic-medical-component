import { Field } from '../core/model/fields/field';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { IControlOwner } from './interfaces/i-control-owner';
export declare class ClientSideEvents {
    private owner;
    constructor(owner: IControlOwner);
    raiseHyperlinkClick(evt: MouseEvent, field: Field): boolean;
    raiseKeyDown(evt: KeyboardEvent): boolean;
    raiseKeyUp(evt: KeyboardEvent): void;
    raisePointerDown(evt: MouseEvent): boolean;
    raisePointerUp(evt: MouseEvent): boolean;
    raiseContentInserted(subDocumentId: number, interval: FixedInterval): void;
    raiseContentRemoved(subDocumentId: number, interval: FixedInterval, removedText: string): void;
    raiseCharacterPropertiesChanged(subDocumentId: number, interval: FixedInterval): void;
    raiseParagraphPropertiesChanged(subDocumentId: number, paragraphIndex: number): void;
    raiseAutoCorrect(text: string, interval: FixedInterval): boolean;
    raiseDocumentChanged(): void;
    raiseDocumentFormatted(pageCount: number): void;
    raiseActiveSubDocumentChanged(): void;
    raiseSelectionChanged(): void;
    raiseDocumentLoaded(): void;
    raiseGotFocus(): void;
    raiseLostFocus(): void;
}
//# sourceMappingURL=client-side-events.d.ts.map