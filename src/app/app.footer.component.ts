import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <div class="layout-footer clearfix">
            <a href="dashboard.xhtml">
                <img style="width:50px !important" height="50" width="50" alt="logo-colored" src="assets/layout/images/next-logo.png" />
            </a>
            <span class="footer-text-right">
                <span class="material-icons">copyright</span>
                <span>All Rights Reserved</span>
            </span>
        </div>
    `
})
export class AppFooterComponent {

}
