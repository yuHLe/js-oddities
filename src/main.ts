import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { AboutComponent } from './app/page/about.component';

platformBrowserDynamic().bootstrapModule(AppModule);
