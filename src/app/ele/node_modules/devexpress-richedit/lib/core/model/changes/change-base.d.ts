import { ModelChangeType } from './enums';
export interface ModelChangeBase {
    readonly type: ModelChangeType;
    toJSON?(withPostData?: boolean): any;
}
export interface SubDocumentChangeBase extends ModelChangeBase {
    subDocumentId: number;
}
export declare abstract class ContentInsertedSubDocumentChange implements SubDocumentChangeBase {
    subDocumentId: number;
    position: number;
    length: number;
    constructor(subDocumentId: number, position: number, length: number);
    type: ModelChangeType;
    toJSON?(_withPostData?: boolean): any;
    canContinuesWith(nextChange: ContentInsertedSubDocumentChange): boolean;
}
//# sourceMappingURL=change-base.d.ts.map