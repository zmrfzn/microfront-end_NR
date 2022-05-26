import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  supportLanguages = ['english', 'french', 'tamil', 'hindi'];

  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(this.supportLanguages);
    this.translateService.setDefaultLang('english');
    const browserlang = this.translateService.getBrowserLang();
    this.translateService.use(browserlang);
  }

  ngOnInit(): void {
  }

  useLang(lang: string) {
    this.translateService.use(lang);
  }

}
