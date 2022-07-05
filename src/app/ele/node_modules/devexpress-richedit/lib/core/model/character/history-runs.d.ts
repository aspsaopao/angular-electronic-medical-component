import { MaskedCharacterPropertiesBundle, MaskedParagraphPropertiesBundleFull } from '../../rich-utils/properties-bundle';
import { HyperlinkInfo } from '../fields/field';
import { AnchorPictureInfo, InlinePictureInfo } from '../manipulators/picture-manipulator/insert-picture-manipulator-params';
import { ImageLoadingOptions } from '../manipulators/picture-manipulator/loader/image-loading-options';
import { BaseTextBoxInfo } from '../manipulators/text-box-manipulator';
import { RunType } from '../runs/run-type';
import { SectionHeadersFooters } from '../section/header-footer';
import { Section } from '../section/section';
import { SectionProperties } from '../section/section-properties';
import { FooterSubDocumentInfo, HeaderSubDocumentInfo } from '../sub-document-infos';
export declare class HistoryRun {
    offsetAtStartDocument: number;
    type: RunType;
    text: string;
    charPropsBundle: MaskedCharacterPropertiesBundle;
    constructor(type: RunType, charPropsBundle: MaskedCharacterPropertiesBundle, offsetAtStartDocument: number, text: string);
}
export declare class HistoryRunInlinePicture extends HistoryRun {
    picInfo: InlinePictureInfo;
    options?: ImageLoadingOptions;
    constructor(offsetAtStartDocument: number, charPropsBundle: MaskedCharacterPropertiesBundle, picInfo: InlinePictureInfo, options?: ImageLoadingOptions);
}
export declare class HistoryRunFieldCodeStart extends HistoryRun {
    showCode: boolean;
    startPosition: number;
    separatorPosition: number;
    endPosition: number;
    hyperlinkInfo: HyperlinkInfo;
    constructor(type: RunType, charPropsBundle: MaskedCharacterPropertiesBundle, offsetAtStartDocument: number, text: string, showCode: boolean, startPosition: number, separatorPosition: number, endPosition: number, hyperlinkInfo: HyperlinkInfo);
}
export declare class HistoryRunFieldCodeEnd extends HistoryRun {
}
export declare class HistoryRunFieldResultEnd extends HistoryRun {
}
export declare class HistoryRunParagraph extends HistoryRun {
    applyDirectlyToNewParagraph: boolean;
    parPropsBundle: MaskedParagraphPropertiesBundleFull;
    constructor(type: RunType, charPropsBundle: MaskedCharacterPropertiesBundle, parPropsBundle: MaskedParagraphPropertiesBundleFull, offsetAtStartDocument: number, text: string, applyDirectlyToNewParagraph: boolean);
}
export declare class HistoryRunSection extends HistoryRunParagraph {
    sectionProperties: SectionProperties;
    headers: SectionHeadersFooters<HeaderSubDocumentInfo>;
    footers: SectionHeadersFooters<FooterSubDocumentInfo>;
    constructor(charPropsBundle: MaskedCharacterPropertiesBundle, parPropsBundle: MaskedParagraphPropertiesBundleFull, section: Section, offsetAtStartDocument: number, applyDirectlyToNewParagraph: boolean);
}
export declare class HistoryRunAnchoredPicture extends HistoryRun {
    picInfo: AnchorPictureInfo;
    constructor(charPropsBundle: MaskedCharacterPropertiesBundle, picInfo: AnchorPictureInfo, offsetAtStartDocument: number);
}
export declare class HistoryRunAnchoredTextBox extends HistoryRun {
    textBoxInfo: BaseTextBoxInfo;
    constructor(charPropsBundle: MaskedCharacterPropertiesBundle, textBoxInfo: BaseTextBoxInfo, offsetAtStartDocument: number);
}
//# sourceMappingURL=history-runs.d.ts.map