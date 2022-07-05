import { LayoutColumn, ParagraphFrame } from '../../../layout/main-structures/layout-column';
import { ColorProvider } from '../../../model/color/color-provider';
import { Paragraph } from '../../../model/paragraph/paragraph';
import { ParagraphFrameChange } from '../changes/layout-change-base';
export declare class ParagraphFrameCollector {
    static collect(colorProvider: ColorProvider, newColumn: LayoutColumn, pageAreaOffset: number, paragraphs: Paragraph[]): ParagraphFrame[];
    private static collectNewParFrames;
    private static isRemoveSpacingAfter;
    private static mergeParagraphFrames;
}
export declare class ParagraphFrameChangesCollector {
    static collect(oldParFrames: ParagraphFrame[], newParFrames: ParagraphFrame[]): ParagraphFrameChange[];
}
//# sourceMappingURL=paragraph-frame-changes-collector.d.ts.map