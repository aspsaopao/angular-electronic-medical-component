import { StyleBase } from '../../../../core/model/style-base';
import { RtfImportData } from '../../rtf-import-data';
import { RtfBaseImporter } from '../importer-base';
export declare abstract class RtfBaseStyleImporter<TCoreStyle extends StyleBase<TCoreStyle>> extends RtfBaseImporter {
    mapRtfIndexToModelIndex: Record<number, number>;
    private readonly states;
    private readonly resetStates;
    constructor(data: RtfImportData, resetStates: boolean);
    abstract get styleCollection(): TCoreStyle[];
    get rtfStyleIndex(): number;
    set rtfStyleIndex(value: number);
    get rtfParentStyleIndex(): number;
    set rtfParentStyleIndex(value: number);
    get styleExists(): boolean;
    get style(): TCoreStyle;
    get parentStyleExists(): boolean;
    get parentStyle(): TCoreStyle;
    abstract createEmpty(): TCoreStyle;
    getModelIndex(rtfIndex: number): number;
    abstract addStyle(newStyle: TCoreStyle): TCoreStyle;
    getOrCreateStyleByName(styleName: string): TCoreStyle;
    pushState(): void;
    popState(): void;
    startImportSubDocument(): void;
    finalizeSubDocument(): void;
}
//# sourceMappingURL=base-style-importer.d.ts.map