import { Component, OnInit } from '@angular/core';
import { CocoaCore } from '@mitel-internal/cocoa';
import { TranslateService } from '@ngx-translate/core';

import * as manifest from './cocoa-manifest.json';

@Component({
  selector: 'app-cocoa-components',
  templateUrl: './cocoa.component.html',
  styleUrls: ['./cocoa.component.scss']
})
export class CocoaComponent implements OnInit {

  breadcrumbTitles = [
    {title: 'Heading', path: 'heading path' }, 
    {title: 'Subheading 1', path: 'subheading1 path' },
     {title: 'Subheading 2', path: '' }]

    items: any[] = [
      { label: 'Default', value:'Default', disabled: false }, 
      { label: 'Disabled', value:'Disabled', disabled: true }, 
      { label: 'Selected + Disabled', value:'Selected + Disabled', disabled: true }
    ];

    selectedValue: any[] = ['Selected + Disabled'];
    align: string = 'horizontal';

    supportLanguages = ['english', 'french', 'tamil', 'hindi'];

  constructor(private cocoa: CocoaCore, private translateService: TranslateService) { 
    this.translateService.addLangs(this.supportLanguages);
    this.translateService.setDefaultLang('english');

    const browserlang = this.translateService.getBrowserLang();
    this.translateService.use(browserlang);

  }

  ngOnInit(): void {
    this.cocoa.register(manifest);

    this.cocoa.messageBus.listen('shell_app1').subscribe(msg => {
      alert(`Received from Shell over CFM: ${msg.data}`);
    })

  }
  sendMsg() {
    console.log('Message bus trigggered');
    this.cocoa.messageBus.send('shared_cocoa1', 'From Shared Cocoa');
  }


  useLang(lang: string) {
    this.translateService.use(lang);
    this.translateService.get(['home.Heading','home.Subheading1', 'home.Subheading2']).subscribe(translations =>{
       this.breadcrumbTitles = [
        {title: translations['home.Heading'], path: 'heading path' }, 
        {title: translations['home.Subheading1'], path: 'subheading1 path' },
        {title: translations['home.Subheading2'], path: '' }
       ];
    })

    this.translateService.get(['home.Default','home.Disabled', 'home.Selected']).subscribe(itemsTranslations =>{
      this.items = [
        { label: itemsTranslations['home.Default'], value:'Default', disabled: false }, 
        { label: itemsTranslations['home.Disabled'], value:'Disabled', disabled: true }, 
        { label: itemsTranslations['home.Selected'], value:'Selected + Disabled', disabled: true }
      ];
   })



  }
}
