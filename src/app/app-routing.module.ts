import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/pages/page-not-found/page-not-found.component';

import { PresentationComponent } from 'src/app/pages/presentation/presentation.component';

const routes: Routes = [{
    path: 'presentation',
    component: PresentationComponent
}, {
    path: '',
    redirectTo: '/presentation',
    pathMatch: 'full'
}, {
    path: '**',
    component: PageNotFoundComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
