import { Component } from '@angular/core';
import { navItems } from '../../_nav';
import { TokenStorageService } from '../../_services/token-storage.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  currentUser: any ;
  public avatar:string ;

  constructor(private tokenStorageService: TokenStorageService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser = this.tokenStorageService.getUser();
    this.avatar = `https://ui-avatars.com/api/?name=${this.currentUser.username}`;
  }


  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout() {
    this.tokenStorageService.signOut();
    this.router.navigate(['/login']);
  }

}
