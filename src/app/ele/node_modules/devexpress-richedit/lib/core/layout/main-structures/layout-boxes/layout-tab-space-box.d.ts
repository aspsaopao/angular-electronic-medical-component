import { ICloneable, ISupportCopyFrom } from '@devexpress/utils/lib/types';
import { IPictureRenderer } from '../../../canvas/picture-renderer';
import { MeasureInfo } from '../../../measurer/measure-info';
import { LayoutBox, LayoutBoxType, LayoutRenderCharacterProperties } from './layout-box';
export declare enum TabLeaderType {
    None = 0,
    Dots = 1,
    MiddleDots = 2,
    Hyphens = 3,
    Underline = 4,
    ThickLine = 5,
    EqualSign = 6
}
export declare class LayoutTabSpaceBox extends LayoutBox implements ICloneable<LayoutTabSpaceBox>, ISupportCopyFrom<LayoutTabSpaceBox> {
    protected tabLeaderSymbol: string;
    protected spaceWidth: number;
    protected hiddenTabWidth: number;
    equals(obj: LayoutTabSpaceBox): boolean;
    clone(): LayoutTabSpaceBox;
    copyFrom(obj: LayoutTabSpaceBox): void;
    setTabParams(tabLeaderSymbol: string, spaceWidth: number, hiddenTabWidth: number): void;
    getType(): LayoutBoxType;
    pushInfoForMeasure(_info: MeasureInfo[], _showHiddenSymbols: boolean): void;
    popInfoForMeasure(_info: MeasureInfo[], _showHiddenSymbols: boolean): void;
    isVisible(): boolean;
    renderGetContent(_renderer: IPictureRenderer): string;
    renderGetCharacterProperties(): LayoutRenderCharacterProperties;
    isWhitespace(): boolean;
    isLineBreak(): boolean;
}
export declare class LayoutTabSpaceBoxJustForBoxIterator extends LayoutTabSpaceBox {
    private leadersMeasureInfo;
    private hiddenTabMeasureInfo;
    private showHiddenSymbols;
    private static getTabLeaderMap;
    static tabLeaderMap: {
        [type: number]: string;
    };
    static tabLeaderSymbolList: string[];
    static tabLeaderTypeList: TabLeaderType[];
    getLayoutTabBox(tabLeaderType: TabLeaderType): LayoutTabSpaceBox;
    pushInfoForMeasure(info: MeasureInfo[], _showHiddenSymbols: boolean): void;
    popInfoForMeasure(info: MeasureInfo[], showHiddenSymbols: boolean): void;
}
//# sourceMappingURL=layout-tab-space-box.d.ts.map