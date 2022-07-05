import { BorderLineStyle } from '../../core/model/borders/enums';
export declare class RtfArtBorderConverter {
    private static mapBorderLineStyleToIndex;
    private static mapIndexToBorderLineStyle;
    static getBorderArtIndex(borderLineStyle: BorderLineStyle): number;
    static getBorderLineStyle(borderArtIndex: number): BorderLineStyle;
    static initStatics(): Record<number, BorderLineStyle>;
}
//# sourceMappingURL=rtf-art-border-converter.d.ts.map