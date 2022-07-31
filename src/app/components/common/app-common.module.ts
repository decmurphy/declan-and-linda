import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ScaffoldComponent } from './scaffold/scaffold.component';

@NgModule({
    declarations: [NavbarComponent, FooterComponent, ScaffoldComponent],
    imports: [CommonModule],
    exports: [ScaffoldComponent],
})
export class AppCommonModule {}
