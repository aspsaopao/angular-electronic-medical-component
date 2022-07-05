import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { EleEditModule } from './ele/lib/eleEdit.module';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserAnimationsModule, EleEditModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
