import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { ImportedParagraphListInfo } from '../containers/runs';
import { HtmlImporter } from '../html-importer';
import { HtmlImporterMaskedCharacterProperties } from './character-properties-utils';
export declare class ParagraphListPropertiesUtils {
    private htmlImporterMaskedCharacterProperties;
    private listItemElement;
    private msoListAttr;
    private parentListElement;
    private importer;
    constructor(importer: HtmlImporter, htmlImporterMaskedCharacterProperties: HtmlImporterMaskedCharacterProperties);
    import(element: HTMLElement, interval: FixedInterval): ImportedParagraphListInfo;
    private importListIndex;
    private importListLevelIndex;
    private importListFormatByListItemElement;
    private static importListFormatByReserveWay;
    private importDisplayFormatStringByParentListElement;
    private static importDisplayFormatStringByReserveWay;
    private getMainParentListElement;
    private static getListType;
    private static getListTextElement;
    private static getListText;
    private static getParentListElement;
    private static removeSomeHtml;
    private static MapListTypeToType;
}
//# sourceMappingURL=paragraph-list-properties-utils.d.ts.map