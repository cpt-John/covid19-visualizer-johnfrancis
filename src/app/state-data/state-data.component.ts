import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { DataServerService } from '../data-server.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-state-data',
  templateUrl: './state-data.component.html',
  styleUrls: ['./state-data.component.css'],
})
export class StateDataComponent implements OnInit {
  @ViewChild('childChart') childChart: BarChartComponent;
  data = [];
  name = 'Unknown';

  constructor(
    private service: DataServerService,
    private toastr: ToastrService,
    private route_: ActivatedRoute
  ) {
    this.loadStateData();
  }
  loadStateData() {
    this.service.getStateData().subscribe(
      (responce) => {
        this.data = responce.find(
          (data) => data['statecode'] == [this.route_.snapshot.params['id']]
        );
        this.name = this.data['state'];
        this.data = this.data['districtData'];

        console.log(this.data);
        this.childChart.updateChart(this.data, 'state');
      },
      (error) => {
        this.toastr.error('Network Error!');
        console.log(error);
      }
    );
  }
  ngOnInit(): void {}
}
