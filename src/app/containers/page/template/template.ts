import { Component } from '@angular/core';
import {TemplateItem} from "../../components/template-item/template-item";
import {TemplateDetails} from "../../components/template-details/template-details";

@Component({
  selector: 'app-template',
  standalone: true,
    imports: [
        TemplateItem,
        TemplateDetails
    ],
  templateUrl: './template.html',
  styleUrl: './template.css'
})
export class Template {

}
