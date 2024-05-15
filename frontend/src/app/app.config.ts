import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNativeDateAdapter } from '@angular/material/core';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { boardReducer } from './store/board/board.reducer';
import { BoardEffects } from './store/board/board.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideAnimationsAsync(),
    provideNativeDateAdapter(),
    provideStore({ boardState: boardReducer }),
    provideEffects([BoardEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: false })
  ]
};
