import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {FooterContent} from '../footer-content/footer-content';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {LanguageSwitcher} from '../language-switcher/language-switcher';
import {MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,
    RouterLink, RouterLinkActive,
    MatSidenavModule, MatButtonModule,
    MatIconModule,
    MatListModule,
    FooterContent,
    MatSidenavContainer,
    MatToolbar,
    MatSidenav,
    MatSidenavContent,
    MatIcon,
    LanguageSwitcher,
    MatIconButton
  ],

  templateUrl: './layout.html',
  styleUrl: './layout.css',
  changeDetection: ChangeDetectionStrategy.Eager

})
export class Layout {
  readonly collapsed = signal(false);
  readonly options = [
    {link: '/home', label: 'Home', icon: 'home'},
    {link: '/add', label: 'New Reservation', icon: 'add'},
  ];

  toggleMenu(): void {
    this.collapsed.update(value => !value);
  }
}
