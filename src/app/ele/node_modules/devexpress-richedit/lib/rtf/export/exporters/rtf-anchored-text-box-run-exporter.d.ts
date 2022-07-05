import { AnchoredTextBoxRun } from '../../../core/model/runs/anchored-text-box-run';
import { RtfBuilder } from '../rtf-builder';
import { RtfAnchoredRunExporter } from './rtf-anchored-run-exporter';
export declare class RtfAnchoredTextBoxRunExporter extends RtfAnchoredRunExporter {
    readonly textBoxRun: AnchoredTextBoxRun;
    readonly exportTextBoxContent: () => void;
    constructor(rtfBuilder: RtfBuilder, textBoxRun: AnchoredTextBoxRun, exportTextBoxContent: () => void);
    getWidth(): number;
    getHeight(): number;
    exportContent(): void;
    private exportTextBoxProperties;
    protected exportFloatingObjectRelativeSize(): void;
}
//# sourceMappingURL=rtf-anchored-text-box-run-exporter.d.ts.map