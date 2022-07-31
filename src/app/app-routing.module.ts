import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        data: { preload: true },
        loadChildren: () => import('./components/save-the-date/save-the-date.module').then((m) => m.SaveTheDateModule),
    },
    {
        path: 'save-the-date',
        data: { preload: true },
        loadChildren: () => import('./components/save-the-date/save-the-date.module').then((m) => m.SaveTheDateModule),
    },
    {
        path: 'rsvp',
        data: { preload: false },
        loadChildren: () => import('./components/rsvp/rsvp.module').then((m) => m.RsvpModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
