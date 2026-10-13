import { NgModule } from '@angular/core';
import { TitleCasePipe } from './title-case.pipe';
import { HighlightDirective } from './highlight.directive';
@NgModule({ declarations: [TitleCasePipe, HighlightDirective], exports: [TitleCasePipe, HighlightDirective] })
export class SharedModule {}
