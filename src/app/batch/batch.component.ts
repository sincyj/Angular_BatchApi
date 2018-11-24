import { Component, OnInit } from '@angular/core';
import { BatchService } from '../batch.service';
import { Batch } from '../batch';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {

  constructor(private batchservice : BatchService) { }

  batches: Batch[];
  batch: Batch;

  ngOnInit() {
    this.newBatchData();
    this.getBatches();
  }

  newBatchData(): void {
    this.batch = {
      BatchID: 0,
      BatchName: '',
      StartDate: '2018-02-02',
      TentativeDate: '2018-02-01',
      HoursTaken:0,
      NoOfHours:0,
      Remarks:''
    };
  }

  getBatches(): void{
    this.batchservice.getBatches()
    .subscribe(b => this.batches = b);
  }

  saveBatchData(): void {
    this.batchservice.saveBatch(this.batch)
    .subscribe(b => this.batches.push(b));
  }

  

}
