import { ControlFontsCache } from './control-fonts';
import { CharacterPropertiesCache } from './hashed-caches/character-properties-cache';
import { ColorModelInfoCache } from './hashed-caches/color-model-info-cache';
import { DrawingColorModelInfoCache } from './hashed-caches/drawing-color-model-info-cache';
import { FontInfoCache } from './hashed-caches/font-info-cache';
import { ListLevelPropertiesCache } from './hashed-caches/list-level-properties-cache';
import { MaskedCharacterPropertiesCache } from './hashed-caches/masked-character-properties-cache';
import { MaskedParagraphPropertiesCache } from './hashed-caches/masked-paragraph-properties-cache';
import { ParagraphPropertiesCache } from './hashed-caches/paragraph-properties-cache';
import { Scene3DPropertiesInfoCache } from './hashed-caches/scene3d-properties-info-cache';
import { Scene3DRotationInfoCache } from './hashed-caches/scene3d-rotation-info-cache';
import { ShadingInfoCache } from './hashed-caches/shading-info-cache';
import { TableCellPropertiesCache } from './hashed-caches/table-cell-properties-cache';
import { TableRowPropertiesCache } from './hashed-caches/table-row-properties-cache';
import { ImageCache } from './images';
export declare class DocumentCache {
    imageCache: ImageCache;
    controlFontsCache: ControlFontsCache;
    fontInfoCache: FontInfoCache;
    mergedCharacterPropertiesCache: CharacterPropertiesCache;
    mergedParagraphPropertiesCache: ParagraphPropertiesCache;
    maskedCharacterPropertiesCache: MaskedCharacterPropertiesCache;
    maskedParagraphPropertiesCache: MaskedParagraphPropertiesCache;
    tableRowPropertiesCache: TableRowPropertiesCache;
    tableCellPropertiesCache: TableCellPropertiesCache;
    listLevelPropertiesCache: ListLevelPropertiesCache;
    shadingInfoCache: ShadingInfoCache;
    colorModelInfoCache: ColorModelInfoCache;
    drawingColorModelInfoCache: DrawingColorModelInfoCache;
    scene3DPropertiesInfoCache: Scene3DPropertiesInfoCache;
    scene3DRotationInfoCache: Scene3DRotationInfoCache;
    constructor();
    clearTemporaryCaches(): void;
    DEBUG_DISTRIBUTION_INFO(): string;
    clone(): DocumentCache;
}
//# sourceMappingURL=caches.d.ts.map