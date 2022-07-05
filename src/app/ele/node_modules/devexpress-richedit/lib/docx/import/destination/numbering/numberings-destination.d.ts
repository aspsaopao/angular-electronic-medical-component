import { MapCreator } from '../../../../base-utils/map-creator';
import { IListLevel, ListLevel, OverrideListLevel } from '../../../../core/model/numbering-lists/list-level';
import { ListLevelProperties } from '../../../../core/model/numbering-lists/list-level-properties';
import { AbstractNumberingList } from '../../../../core/model/numbering-lists/numbering-list';
import { XmlReader } from '../../../zip/xml-reader';
import { Data } from '../../data';
import { OpenXmlAbstractNumberingInfo } from '../../list/open-xml-abstract-numbering-info';
import { OpenXmlListLevelOverride } from '../../list/open-xml-list-level-override';
import { OpenXmlNumberingListInfo } from '../../list/open-xml-numbering-list-info';
import { RunPropertiesBaseDestination } from '../character-properties/run-properties-base-destination';
import { ElementDestination, ElementHandler, ElementHandlerTable, LeafElementDestination } from '../destination';
import { ParagraphPropertiesBaseDestination } from '../paragraph-properties/paragraph-properties-base-destination';
export declare class NumberingsDestination extends ElementDestination {
    static handlerTable: ElementHandlerTable;
    constructor(data: Data);
    protected get elementHandlerTable(): ElementHandlerTable;
    protected static onAbstractNumbering(data: Data, _reader: XmlReader): ElementDestination;
    protected static onNumbering(data: Data, _reader: XmlReader): ElementDestination;
}
export declare class AbstractNumberingListDestination extends ElementDestination {
    protected get elementHandlerTable(): ElementHandlerTable;
    static handlerTable: ElementHandlerTable;
    info: OpenXmlAbstractNumberingInfo;
    list: AbstractNumberingList;
    id: string;
    constructor(data: Data);
    static getThis(data: Data): AbstractNumberingListDestination;
    static onLevel(data: Data, _reader: XmlReader): ElementDestination;
    protected static onMultilevelType(data: Data, _reader: XmlReader): ElementDestination;
    protected static onName(data: Data, _reader: XmlReader): ElementDestination;
    protected static onUniqueId(data: Data, _reader: XmlReader): ElementDestination;
    protected static onNumberingStyleLink(data: Data, _reader: XmlReader): ElementDestination;
    protected static onStyleLink(_data: Data, _reader: XmlReader): ElementDestination;
    protected static onTemplate(_data: Data, _reader: XmlReader): ElementDestination;
    processElementOpen(reader: XmlReader): Promise<void>;
    processElementClose(_reader: XmlReader): void;
}
export declare class NumberingListDestination extends ElementDestination {
    protected get elementHandlerTable(): ElementHandlerTable;
    static handlerTable: ElementHandlerTable;
    listInfo: OpenXmlNumberingListInfo;
    constructor(data: Data);
    static getThis(data: Data): NumberingListDestination;
    static onAbstractNumberingId(data: Data, _reader: XmlReader): ElementDestination;
    static onLevelOverride(data: Data, _reader: XmlReader): ElementDestination;
    processElementOpen(reader: XmlReader): Promise<void>;
    processElementClose(_reader: XmlReader): void;
}
export declare class AbstractNumberingLeafElementDestination extends LeafElementDestination {
    list: AbstractNumberingList;
    constructor(data: Data, list: AbstractNumberingList);
}
export declare class NumberingListNameDestination extends AbstractNumberingLeafElementDestination {
    constructor(data: Data, list: AbstractNumberingList);
    processElementOpen(_reader: XmlReader): Promise<void>;
}
export declare class AbstractNumberingListUniqueIdDestination extends AbstractNumberingLeafElementDestination {
    constructor(data: Data, list: AbstractNumberingList);
    processElementOpen(reader: XmlReader): Promise<void>;
}
export declare class NumberingListMultiLevelTypeDestination extends AbstractNumberingLeafElementDestination {
    constructor(data: Data, list: AbstractNumberingList);
    processElementOpen(reader: XmlReader): Promise<void>;
    private setHybridListType;
}
export declare class NumberingListNumStyleLinkDestination extends LeafElementDestination {
    info: OpenXmlAbstractNumberingInfo;
    constructor(data: Data, info: OpenXmlAbstractNumberingInfo);
    processElementOpen(reader: XmlReader): Promise<void>;
}
export declare class AbstractNumberingListReferenceDestination extends LeafElementDestination {
    listInfo: OpenXmlNumberingListInfo;
    constructor(data: Data, listInfo: OpenXmlNumberingListInfo);
    processElementOpen(reader: XmlReader): Promise<void>;
}
export declare class ListLevelOverrideDestination extends LeafElementDestination {
    protected get elementHandlerTable(): ElementHandlerTable;
    static handlerTable: ElementHandlerTable;
    listInfo: OpenXmlNumberingListInfo;
    levelOverride: OpenXmlListLevelOverride;
    overrideRead: boolean;
    constructor(data: Data, listInfo: OpenXmlNumberingListInfo);
    static getThis(data: Data): ListLevelOverrideDestination;
    static onLevelOverride(data: Data, _reader: XmlReader): ElementDestination;
    static onLevelStartOverride(data: Data, _reader: XmlReader): ElementDestination;
    processElementOpen(reader: XmlReader): Promise<void>;
    processElementClose(_reader: XmlReader): void;
}
export declare abstract class NumberingLevelBaseDestination<TLevel extends IListLevel> extends ElementDestination {
    protected get elementHandlerTable(): ElementHandlerTable;
    static handlerTable: ElementHandlerTable;
    level: TLevel;
    levelProperties: ListLevelProperties;
    private _levelIndex;
    get levelIndex(): number;
    set levelIndex(val: number);
    constructor(data: Data);
    static getThis(data: Data): NumberingLevelBaseDestination<IListLevel>;
    protected static createElementHandlerTable(): MapCreator<string, ElementHandler>;
    protected static onTextAlignment(data: Data, _reader: XmlReader): ElementDestination;
    protected static onRestart(data: Data, _reader: XmlReader): ElementDestination;
    protected static onText(data: Data, _reader: XmlReader): ElementDestination;
    protected static onStart(data: Data, _reader: XmlReader): ElementDestination;
    protected static onSuffix(data: Data, _reader: XmlReader): ElementDestination;
    protected static onNumberingFormat(data: Data, _reader: XmlReader): ElementDestination;
    protected static onParagraphProperties(data: Data, _reader: XmlReader): ElementDestination;
    protected static onRunProperties(data: Data, _reader: XmlReader): ElementDestination;
    protected static onLegalNumbering(data: Data, _reader: XmlReader): ElementDestination;
    protected static onLegacy(data: Data, _reader: XmlReader): ElementDestination;
}
export declare class NumberingLevelDestination extends NumberingLevelBaseDestination<ListLevel> {
    protected get elementHandlerTable(): ElementHandlerTable;
    static handlerTable: ElementHandlerTable;
    list: AbstractNumberingList;
    constructor(data: Data, list: AbstractNumberingList);
    protected static onParagraphStyleReference(data: Data, _reader: XmlReader): ElementDestination;
    processElementOpen(reader: XmlReader): Promise<void>;
    processElementClose(_reader: XmlReader): void;
}
export declare class ListLevelOverrideLevelDestination extends NumberingLevelBaseDestination<OverrideListLevel> {
    levelOverride: OpenXmlListLevelOverride;
    constructor(data: Data, levelOverride: OpenXmlListLevelOverride);
    get levelIndex(): number;
    processElementOpen(reader: XmlReader): Promise<void>;
    processElementClose(_reader: XmlReader): void;
}
export declare class ListLevelOverrideStartDestination extends LeafElementDestination {
    levelOverride: OpenXmlListLevelOverride;
    constructor(data: Data, levelOverride: OpenXmlListLevelOverride);
    processElementOpen(reader: XmlReader): Promise<void>;
}
export declare class ListLevelElementDestination extends LeafElementDestination {
    levelDestination: NumberingLevelBaseDestination<IListLevel>;
    constructor(data: Data, levelDestination: NumberingLevelBaseDestination<IListLevel>);
    get properties(): ListLevelProperties;
}
export declare class ListLevelTextAlignmentDestination extends ListLevelElementDestination {
    constructor(data: Data, levelDestination: NumberingLevelBaseDestination<IListLevel>);
    processElementOpen(reader: XmlReader): Promise<void>;
}
export declare class ListLevelStartDestination extends ListLevelElementDestination {
    constructor(data: Data, levelDestination: NumberingLevelBaseDestination<IListLevel>);
    processElementOpen(reader: XmlReader): Promise<void>;
}
export declare class ListLevelLegacyDestination extends ListLevelElementDestination {
    constructor(data: Data, levelDestination: NumberingLevelBaseDestination<IListLevel>);
    processElementOpen(reader: XmlReader): Promise<void>;
}
export declare class ListLevelFormatStringDestination extends ListLevelElementDestination {
    constructor(data: Data, levelDestination: NumberingLevelBaseDestination<IListLevel>);
    processElementOpen(reader: XmlReader): Promise<void>;
    replaceStringFormatInBulletNumbering(value: string): string;
    replaceStringFormatInSimpleNumbering(): string;
    convertFormatString(value: string): string;
}
export declare class ListLevelRestartDestination extends ListLevelElementDestination {
    constructor(data: Data, levelDestination: NumberingLevelBaseDestination<IListLevel>);
    processElementOpen(reader: XmlReader): Promise<void>;
}
export declare class ListLevelSuffixDestination extends ListLevelElementDestination {
    constructor(data: Data, levelDestination: NumberingLevelBaseDestination<IListLevel>);
    processElementOpen(reader: XmlReader): Promise<void>;
}
export declare class ListLevelNumberingFormatDestination extends ListLevelElementDestination {
    constructor(data: Data, levelDestination: NumberingLevelBaseDestination<IListLevel>);
    processElementOpen(reader: XmlReader): Promise<void>;
}
export declare class ListLevelLegalNumberingDestination extends ListLevelElementDestination {
    constructor(data: Data, levelDestination: NumberingLevelBaseDestination<IListLevel>);
    processElementOpen(reader: XmlReader): Promise<void>;
}
export declare class ListLevelParagraphStyleReferenceDestination extends ListLevelElementDestination {
    constructor(data: Data, levelDestination: NumberingLevelBaseDestination<IListLevel>);
    processElementOpen(_reader: XmlReader): Promise<void>;
}
export declare class ListLevelRunPropertiesDestination extends RunPropertiesBaseDestination {
    level: IListLevel;
    constructor(data: Data, level: IListLevel);
    processElementClose(_reader: XmlReader): void;
}
export declare class ListLevelParagraphPropertiesDestination extends ParagraphPropertiesBaseDestination {
    level: IListLevel;
    constructor(data: Data, level: IListLevel);
    get numberingId(): number;
    set numberingId(_value: number);
    get listLevelIndex(): number;
    set listLevelIndex(_value: number);
    processElementClose(_reader: XmlReader): void;
}
//# sourceMappingURL=numberings-destination.d.ts.map