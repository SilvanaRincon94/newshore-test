import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuOpen = false;
  subMenuOpen = false;

  // function for open the menu
  openMenu(){
    this.menuOpen = true;
  }
  // function for close the menu
  closeMenu(){
    this.menuOpen = false;
  }
  // function for submenu toggle
  openSubMenu() {
    this.subMenuOpen = !this.subMenuOpen;
  }
  // function close for submenu in mobile
  closeSubMenu() {
    this.subMenuOpen = true;
  }
}
