import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';

@Component({
  selector: 'app-main',
  imports: [EditorModule, FormsModule],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {
  text: string = '';
}
