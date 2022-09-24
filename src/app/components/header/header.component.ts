import { NgTemplateOutlet } from "@angular/common";
import { Component, ElementRef, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { faBars, faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { NgbOffcanvas } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    searchIcon = faMagnifyingGlass;
    eraseIcon = faXmark;
    menuIcon = faBars;

    searchTerm = this.fb.control("");
    searchForm = new FormGroup({
        search: this.searchTerm
    })

    constructor(private fb: FormBuilder,
        public offCanvas: NgbOffcanvas) {
    }
}