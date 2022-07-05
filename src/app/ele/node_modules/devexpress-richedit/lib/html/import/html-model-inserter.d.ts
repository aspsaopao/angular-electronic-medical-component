import { IModelManager } from '../../core/model-manager';
import { HistoryRun } from '../../core/model/character/history-runs';
import { SubDocumentPosition } from '../../core/model/sub-document';
import { MaskedCharacterPropertiesBundle } from '../../core/rich-utils/properties-bundle';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { TableInfo } from './containers/tables';
import { HtmlImportData } from './html-importer';
export declare class HtmlModelInserter {
    private static runConverterMap;
    private modelManager;
    private subDocPos;
    private htmlData;
    private charPropsBundle;
    private get options();
    private get subDocument();
    private defaultMaskedParProps;
    private defaultMaskedCharProps;
    private pastedListsIndices;
    private fieldsMap;
    tableInfo: TableInfo[];
    historyRuns: HistoryRun[];
    position: number;
    constructor(modelManager: IModelManager, subDocPos: SubDocumentPosition, htmlData: HtmlImportData, charPropsBundle: MaskedCharacterPropertiesBundle);
    insert(): FixedInterval;
    private convertTextRun;
    private convertInlinePictureRun;
    private convertParagraphRun;
    private convertFieldCodeStartRun;
    private convertFieldCodeEndRun;
    private convertFieldResultEndRun;
    private insertListInfo;
}
//# sourceMappingURL=html-model-inserter.d.ts.map