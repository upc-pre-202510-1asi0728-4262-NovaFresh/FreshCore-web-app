import { Component } from '@angular/core';
import {TemplateItems} from "../../components/template-items/template-items";
import {TemplateDetails} from "../../components/template-details/template-details";

@Component({
  selector: 'app-template',
  standalone: true,
    imports: [
        TemplateItems,
        TemplateDetails
    ],
  templateUrl: './template.html',
  styleUrl: './template.css'
})
export class Template {

}
