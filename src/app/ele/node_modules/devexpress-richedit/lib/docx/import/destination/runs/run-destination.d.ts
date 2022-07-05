import { Data } from '../../data';
import { ElementDestination, ElementHandlerTable } from '../destination';
export declare class RunDestination extends ElementDestination {
    static handlerTable: ElementHandlerTable;
    constructor(data: Data);
    protected resetProperties(): void;
    protected get elementHandlerTable(): ElementHandlerTable;
    isChoiceNamespaceSupported(requeriesNamespaceUri: string): boolean;
}
export declare class NestedRunDestination extends RunDestination {
    constructor(data: Data);
    protected resetProperties(): void;
}
//# sourceMappingURL=run-destination.d.ts.map