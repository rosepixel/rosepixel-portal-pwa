import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ToolbarComponent } from '@layout/toolbar';
import { NavigationComponent } from '@layout/navigation';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,

        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule
    ],
    exports: [
        ToolbarComponent,
        NavigationComponent
    ],
    declarations: [
        ToolbarComponent,
        NavigationComponent
    ]
})
export class LayoutModule { }
