import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputBase, MatInputModule, MatProgressSpinnerModule, MatExpansionModule, MatOptionModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  imports:[
          MatFormFieldModule,
          MatProgressSpinnerModule,
          MatInputModule,
          BrowserAnimationsModule,
          LayoutModule,
          MatToolbarModule,
          MatButtonModule,
          MatSidenavModule,
          MatIconModule,
          MatListModule,
          MatGridListModule,
          MatCardModule,
          MatMenuModule,
          MatTableModule,
          MatPaginatorModule,
          MatSortModule,
          MatExpansionModule,
          MatOptionModule,
          MatSelectModule,
          MatDatepickerModule,
          MatNativeDateModule
  ],
  exports:[ MatFormFieldModule,
            MatProgressSpinnerModule,
            MatInputModule,
            BrowserAnimationsModule,
            LayoutModule,
            MatToolbarModule,
            MatButtonModule,
            MatSidenavModule,
            MatIconModule,
            MatListModule,
            MatGridListModule,
            MatCardModule,
            MatMenuModule,
            MatTableModule,
            MatPaginatorModule,
            MatSortModule,
            MatExpansionModule,
            MatOptionModule,
            MatSelectModule,
            MatDatepickerModule,
            MatNativeDateModule
  ]
})
export class MaterialComponentModules {
}
