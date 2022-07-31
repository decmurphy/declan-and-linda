import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaveTheDateComponent } from './save-the-date.component';
import { SaveTheDateModule } from './save-the-date.module';

const routes: Routes = [{ path: '', component: SaveTheDateComponent }];

export const routing: ModuleWithProviders<SaveTheDateModule> = RouterModule.forChild(routes);
