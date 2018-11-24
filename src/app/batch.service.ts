import { Injectable } from '@angular/core';
import { Batch } from './batch';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  batches : Batch[];

  constructor(private httpClient: HttpClient) { }

  getBatches(): Observable<Batch[]>{
    return this.httpClient.get<Batch[]>
    ("http://localhost:50060/api/Batches");
  }

  getBatchesMockData(): Batch[]{
    this.batches = [{
      BatchID: 1,
      BatchName: 'CCS',
      StartDate: '08-10-2018',
      TentativeDate: '08-10-2018',
      NoOfHours: 60,
      HoursTaken: 45,
      Remarks: 'Good'
    }]
    return this.batches;
  }

  saveBatch(batch: Batch): Observable<Batch>{
    const header = new HttpHeaders({ 'Content-Type' : 'application/json'});
    return this.httpClient.post<Batch>("http://localhost:50060/api/Batches", batch, { headers: header });
  }
}
