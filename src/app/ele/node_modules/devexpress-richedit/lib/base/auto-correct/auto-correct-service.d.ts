import { AutoCorrectSettings } from '../../core/model/options/auto-correct';
import { IRichEditControl } from '../interfaces/i-rich-edit-core';
export declare class AutoCorrectService {
    settings: AutoCorrectSettings;
    private control;
    private providers;
    constructor(control: IRichEditControl, settings: AutoCorrectSettings);
    private registerDefaultProviders;
    performAutoCorrect(): void;
}
//# sourceMappingURL=auto-correct-service.d.ts.map