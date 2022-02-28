import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-panel',
  templateUrl: './bootstrap-panel.component.html',
  styleUrls: ['./bootstrap-panel.component.css']
})
export class BootstrapPanelComponent implements OnInit {

  @Input() viewModel='something';

  constructor() { }

  ngOnInit(): void {
  }

}
