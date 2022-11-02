import { FormGroup, FormBuilder } from '@angular/forms';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'search-ad-unit',
  templateUrl: './search-ad-unit.component.html',
  styleUrls: ['./search-ad-unit.component.scss'],
})
export class SearchAdUnitComponent implements OnInit {
  @Input() cleanSearch;
  @Output() search = new EventEmitter<any>();
  @Output() detectedKey = new EventEmitter<any>();

  formSearch: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formSearch = this.fb.group({
      searchField: [''],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.cleanSearch.currentValue) {
      this.f.searchField.setValue('');
    }
  }

  ngOnInit(): void {}

  get f() {
    return this.formSearch.controls;
  }

  searchEnter() {
    this.search.emit({
      search: this.f.searchField.value,
      reset: false,
    });
  }

  detectKey() {
    this.detectedKey.emit(false);
  }
}
