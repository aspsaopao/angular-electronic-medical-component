import { Section } from '../../core/model/section/section';
import { SectionApi } from '../section';
import { SectionBreakTypeApi } from '../sub-document';
import { Collection } from './collection';
export declare class SectionCollection extends Collection<SectionApi, Section> {
    find(position: number): SectionApi;
    create(sectionBreakPosition: number, type: SectionBreakTypeApi): SectionApi;
    protected _getItem(coreItem: Section): SectionApi;
    protected _getCoreItems(): Section[];
}
//# sourceMappingURL=section-collection.d.ts.map