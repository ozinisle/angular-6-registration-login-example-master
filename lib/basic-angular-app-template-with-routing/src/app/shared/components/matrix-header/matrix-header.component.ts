import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../security/services/authentication.service';
import { BaseMenuItemInterface } from '../../models/interface/base-menu-item.interface';
import { BaseMenuItemModal } from '../../models/base-menu-item.model';

@Component({
  selector: 'app-matrix-header',
  templateUrl: './matrix-header.component.html',
  styleUrls: ['./matrix-header.component.scss']
})
export class MatrixHeaderComponent implements OnInit {

  public topMenuItems: BaseMenuItemInterface[] = [];

  private topMenuItemsConfig = [
    { 'name': 'Home', 'route': '' },
    { 'name': 'About Us', 'route': '' },
    { 'name': 'Products', 'route': '' },
    { 'name': 'Promotions', 'route': '' },
    { 'name': 'Whats New', 'route': '' },
    { 'name': 'Region wise', 'route': '' },
    { 'name': 'Guided Tour', 'route': '' },
    { 'name': 'Ethinic wear History', 'route': '' },
    { 'name': 'FAQs', 'route': '' },
    { 'name': 'Contact', 'route': '' }
  ];

  private selectedTopMenuItemIndex: number = 0;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.topMenuItemsConfig.map((menuItem) => {
      const topMenuItem: BaseMenuItemInterface = new BaseMenuItemModal();
      topMenuItem.setLabel(menuItem.name).setNavigationRouteUrl(menuItem.route);
      this.topMenuItems.push(topMenuItem);
    });
  }

  public doClick(topMenuItem: BaseMenuItemInterface, menuItemIndex: number) {
    console.log('will navgate to ' + topMenuItem.navigationRouteUrl, 'you have selected the item : ' + menuItemIndex);
    this.selectedTopMenuItemIndex = menuItemIndex;
  }

  public getMenuItemClass(menuItemIndex) {
    // yet to code
    return this.selectedTopMenuItemIndex;
  }

  public signOut(): void {
    this.authService.logout();
  }
}
