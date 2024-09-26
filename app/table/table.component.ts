import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Car {
  year: number;
  model: string;
  value: number;
  brand: string;
}

const CAR_DATA: Car[] = [
  { year: 2020, model: 'Fusca', value: 30000, brand: 'Volkswagen' },
  { year: 2021, model: 'Civic', value: 90000, brand: 'Honda' },
  { year: 2019, model: 'Corolla', value: 80000, brand: 'Toyota' },
  { year: 2022, model: 'Model 3', value: 200000, brand: 'Tesla' },
  { year: 2023, model: 'i30', value: 95000, brand: 'Hyundai' },
  { year: 2018, model: 'Onix', value: 60000, brand: 'Chevrolet' },
  { year: 2017, model: 'Sandero', value: 45000, brand: 'Renault' },
  { year: 2020, model: 'Kwid', value: 35000, brand: 'Renault' },
  { year: 2015, model: 'Palio', value: 28000, brand: 'Fiat' },
  { year: 2022, model: 'Tracker', value: 95000, brand: 'Chevrolet' },
  { year: 2023, model: 'A3', value: 180000, brand: 'Audi' },
  { year: 2021, model: 'X1', value: 150000, brand: 'BMW' },
  { year: 2020, model: 'Fortuner', value: 180000, brand: 'Toyota' },
  { year: 2019, model: 'HR-V', value: 80000, brand: 'Honda' },
  { year: 2021, model: 'T-Cross', value: 100000, brand: 'Volkswagen' },
  { year: 2023, model: 'Civic SI', value: 130000, brand: 'Honda' },
  { year: 2022, model: 'Compass', value: 120000, brand: 'Jeep' },
];


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  displayedColumns: string[] = ['year', 'brand', 'model', 'value'];
  dataSource = new MatTableDataSource(CAR_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
