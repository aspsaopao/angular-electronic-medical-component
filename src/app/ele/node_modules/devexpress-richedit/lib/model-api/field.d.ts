import { Field } from '../core/model/fields/field';
import { SubDocument } from '../core/model/sub-document';
import { IProcessor } from '../core/processor';
import { IntervalApi } from './interval';
import { SubDocumentApi } from './sub-document';
export declare enum FieldNameApi {
    Unknown = 0,
    Time = 1,
    Date = 2,
    Page = 3,
    NumPages = 4,
    MergeField = 5,
    DocVariable = 6,
    Hyperlink = 7,
    Seq = 8,
    Tc = 9,
    PageRef = 10,
    Toc = 11,
    FillIn = 12
}
export declare class FieldApi {
    protected _processor: IProcessor;
    protected _subDocument: SubDocument;
    protected _field: Field;
    constructor(processor: IProcessor, subDocument: SubDocument, field: Field);
    get index(): number;
    get interval(): IntervalApi;
    get codeInterval(): IntervalApi;
    get subDocument(): SubDocumentApi;
    get resultInterval(): IntervalApi;
    get isShowCode(): boolean;
    set isShowCode(val: boolean);
    get isHyperlink(): boolean;
    get name(): FieldNameApi;
    delete(): void;
    update(callback?: (self: FieldApi) => void): boolean;
}
export declare class HyperlinkApi extends FieldApi {
    get hyperlinkInfo(): HyperlinkInfoApi;
    set hyperlinkInfo(hyperlinkInfo: HyperlinkInfoApi);
}
export declare class HyperlinkInfoApi {
    constructor(text: string, url?: string, bookmark?: string, tooltip?: string);
    text: string;
    tooltip: string;
    url: string;
    bookmark: string;
}
//# sourceMappingURL=field.d.ts.map