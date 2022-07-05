import { ElementDestination } from '../destination';
export declare abstract class FieldDestinationBase extends ElementDestination {
    protected processFieldBegin(disableUpdate: boolean, locked: boolean, hideByParent: boolean): void;
    protected processFieldSeparator(): void;
    protected processFieldEnd(): void;
}
//# sourceMappingURL=field-destination-base.d.ts.map