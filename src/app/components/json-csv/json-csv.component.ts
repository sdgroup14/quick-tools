import {FormsModule} from "@angular/forms";
import {Component, inject, OnInit} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-json-csv',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './json-csv.component.html',
})
export class JsonCsvComponent implements OnInit {
  input: string = '';
  output: string = '';
  mode: 'jsonToCsv' | 'csvToJson' = 'jsonToCsv';
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('JSON to CSV Converter — QuickTools');
    this.meta.updateTag({
      name: 'description',
      content: 'Convert JSON arrays to CSV format and back online. Free and fast data converter tool for developers and analysts.',
    });
  }

  convert(): void {
    try {
      if (this.mode === 'jsonToCsv') {
        const json = JSON.parse(this.input);
        if (!Array.isArray(json)) throw new Error('JSON должен быть массивом объектов');
        const keys = Object.keys(json[0]);
        const csv = [
          keys.join(','),
          ...json.map((obj: any) => keys.map(k => JSON.stringify(obj[k] ?? '')).join(','))
        ].join('\n');
        this.output = csv;
      } else {
        const [headerLine, ...lines] = this.input.split('\n');
        const headers = headerLine.split(',');
        const json = lines.map(line => {
          const values = line.split(',');
          const obj: any = {};
          headers.forEach((h, i) => obj[h.trim()] = values[i]?.trim());
          return obj;
        });
        this.output = JSON.stringify(json, null, 2);
      }
    } catch (e: any) {
      this.output = '❌ Ошибка: ' + e.message;
    }
  }

  copy(): void {
    navigator?.clipboard.writeText(this.output);
  }

  clear(): void {
    this.input = '';
    this.output = '';
  }
}
