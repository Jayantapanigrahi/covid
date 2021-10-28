import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_sunburst from "@amcharts/amcharts4/plugins/sunburst"; 

import { BackendApiService } from '../services/backend-api.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(private backendApiService:BackendApiService) { }

  ngOnInit(): void {

  	this.backendApiService.getAllDataByCountry("india,Nepal,Bangladesh,Pakistan,Bhutan,Sri Lanka,Maldives").subscribe(data => {
      let allData = data;
      console.log(allData);
      let chart = am4core.create("chartdiv", am4plugins_sunburst.Sunburst);
       chart.radius = am4core.percent(100);

		// Make colors more distinctive
		chart.colors.step = 2;
		// Add multi-level data
		chart.data = [{
		  name: "India",
		  children: [
		    {name: "Total Cases ",value: allData[0].cases,
		    children:[
		    { name: "Recovered", value: allData[0].recovered },
		    {name: "Deaths", value: allData[0].deaths },
		    { name: "Active", value: allData[0].active }
		    ]}
		  ]
		},
		{
		  name: "Nepal",
		  children: [
		    {name: "Total Cases ",value: allData[1].cases,children:[
		    { name: "Recovered", value: allData[1].recovered },
		    {name: "Deaths", value: allData[1].deaths },
		    { name: "Active", value: allData[1].active }]}
		  ]
		},
		{
		  name: "Bangladesh",
		  children: [
		    {name: "Total Cases ",value: allData[2].cases,
		    children:[
		    { name: "Recovered", value: allData[2].recovered },
		    {name: "Deaths", value: allData[2].deaths },
		    { name: "Active", value: allData[2].active }
		   ]}
		  ]
		},
		{
		  name: "Pakistan",
		  children: [
		    {name: "Total Cases ",value: allData[3].cases,
		    children:[
		    { name: "Recovered", value: allData[3].recovered },
		    {name: "Deaths", value: allData[3].deaths },
		    { name: "Active", value: allData[3].active }
		    ]}
		  ]
		},
		{
		  name: "Bhutan",
		  children: [
		    {name: "Total Cases ",value: allData[4].cases,children: [
		    { name: "Recovered", value: allData[4].recovered },
		    {name: "Deaths", value: allData[4].deaths },
		    { name: "Active", value: allData[4].active }
		    ]}
		  ]
		},
		{
		  name: "Sri Lanka",
		  children: [
		    {name: "Total Cases ",value: allData[5].cases,children: [
		    { name: "Recovered", value: allData[5].recovered },
		    {name: "Deaths", value: allData[5].deaths },
		    { name: "Active", value: allData[5].active }
		    ]}
		  ]
		},
		{
		  name: "Maldives",
		  children: [
		    {name: "Total Cases ",value: allData[6].cases,children: [
		    { name: "Recovered", value: allData[6].recovered },
		    {name: "Deaths", value: allData[6].deaths },
		    { name: "Active", value: allData[6].active }
		    ]}
		  ]
		},

		];

		// Define data fields
		chart.dataFields.value = "value";
		chart.dataFields.name = "name";
		chart.dataFields.children = "children";

		var level1 = chart.seriesTemplates.create("1");
		level1.slices.template.fillOpacity = 0.75;
		level1.hiddenInLegend = true;

		var level2 = chart.seriesTemplates.create("2");
		level2.slices.template.fillOpacity = 0.5;
		level2.hiddenInLegend = true;

		// Add legend
		chart.legend = new am4charts.Legend();
		    });

  }

}
