import { Component } from '@angular/core';
import { CodeComponent } from '../code/code.component';

@Component({
    selector: 'app-installation',
    templateUrl: 'installation.component.html',
    imports: [CodeComponent]
})
export class InstallationComponent {
  snippet = `
npm i @ngxpert/avvvatars`;
  snippet2 = `
yarn add @ngxpert/avvvatars`;
}
