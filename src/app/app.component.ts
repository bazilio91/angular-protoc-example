import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Time} from "@protobuf/service_pb_service";
import {NowRequest, NowResponse} from "@protobuf/service_pb"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private client: Time.Client;
  public mainLocation: NowResponse;
  public otherLocations: NowResponse[];
  readonly locationNames = [{location: "America/New_York"}, {location: "Europe/Moscow"}];
  readonly mainLocationName = "Asia/Yekaterinburg";

  constructor(private http: HttpClient) {
    this.client = new Time.Client("http://localhost:4200", this.http);

    this.client.Now(<NowRequest>{location: this.mainLocationName}).subscribe(
      res => this.mainLocation = res,
      err => console.error(err)
    );

    this.client.NowBatch(<NowRequest[]>this.locationNames).subscribe(
      res => this.otherLocations = res,
      err => console.error(err),
    );
  }
}
