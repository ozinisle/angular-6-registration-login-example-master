import { BaseMenuItemInterface } from '../../../../shared/models/interface/base-menu-item.interface';


export interface LandingPageComponentInterface {
    links: BaseMenuItemInterface[];
    openModule(link: BaseMenuItemInterface): void;
}
