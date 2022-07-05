import { ColorProvider } from '../../../core/model/color/color-provider';
import { RunInfo } from '../containers/runs';
import { HtmlImporter } from '../html-importer';
export declare abstract class HtmlTagImporterBase {
    protected importer: HtmlImporter;
    get colorProvider(): ColorProvider;
    constructor(importer: HtmlImporter);
    protected getClosestImporterByTagName(tagName: string): HtmlTagImporterBase;
    abstract importBefore(): any;
    abstract isImportChilds(): boolean;
    abstract importAfter(): any;
    abstract elementTag(): string;
    isAllowed(): boolean;
    protected addRun(run: RunInfo): void;
    protected get element(): HTMLElement;
}
//# sourceMappingURL=base.d.ts.map