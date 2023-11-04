import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Observable, firstValueFrom, tap } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { loadTranslations } from '@angular/localize';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeAppFactory,
    multi: true,
    deps: [HttpClient]
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function initializeAppFactory(httpClient: HttpClient): () => Observable<any> {
  const language = localStorage.getItem('language')??'en'
  return () => httpClient.get(`./assets/i18n/${language}.json`).pipe(tap((resp:any)=>{
    loadTranslations(resp)
  }))
}


// loadTranslations(translations);