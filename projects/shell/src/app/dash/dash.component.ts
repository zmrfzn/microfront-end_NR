import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

  supportLanguages = ['english', 'french', 'tamil', 'hindi'];

  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(this.supportLanguages);
    this.translateService.setDefaultLang('english');
    const browserlang = this.translateService.getBrowserLang();
    this.translateService.use(browserlang);
   }


  ngOnInit(): void {
  }

  onLinkClick(){
    window.alert('shell_app1 => From App Shell/Module: shell_app1');
  }

  useLang(lang: string) {
    this.translateService.use(lang);
  }
}
