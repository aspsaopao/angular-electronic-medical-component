import { TableProperties } from '../properties/table-properties';
import { ConditionalTableStyleFormatting } from '../secondary-structures/table-base-structures';
import { TableConditionalStyle } from '../styles/table-conditional-style';
import { TableStyle } from '../styles/table-style';
export declare abstract class TablePropertiesMergerBase<PropertiesContainerType, ResultPropertyType> {
    protected result: ResultPropertyType;
    protected tablePropertiesException: TableProperties;
    getProperty(container: PropertiesContainerType, style: TableStyle, condStyleFormattingFlags: ConditionalTableStyleFormatting, defaultContainer: PropertiesContainerType): ResultPropertyType;
    protected abstract getContainerFromConditionalStyle(condStyle: TableConditionalStyle): PropertiesContainerType;
    protected abstract canUseValue(props: PropertiesContainerType): boolean;
    protected abstract getCondTableStyleFormattingListForThisContainer(): ConditionalTableStyleFormatting[];
    protected abstract getPropertyFromContainer(container: PropertiesContainerType): ResultPropertyType;
    protected abstract getPropertyMask(): number;
    protected abstract getNotMergedProperty(): TableMergerNotMergedPropertyResult<ResultPropertyType>;
    protected processTablePropertiesException(): boolean;
    private getPropertyInternal;
    protected actionBeforeDefaultValue(): boolean;
}
export declare class TableMergerNotMergedPropertyResult<T> {
    isFound: boolean;
    result: T;
    constructor(isFound: boolean, result: T);
}
//# sourceMappingURL=table-properties-merger-base.d.ts.map