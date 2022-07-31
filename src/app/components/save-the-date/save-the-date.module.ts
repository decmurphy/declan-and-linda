import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveTheDateComponent } from './save-the-date.component';
import { AppCommonModule } from '../common/app-common.module';
import { routing } from './save-the-date.routing';

@NgModule({
    declarations: [SaveTheDateComponent],
    imports: [CommonModule, routing, AppCommonModule],
})
export class SaveTheDateModule {}
