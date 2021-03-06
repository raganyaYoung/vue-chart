# vue-chart
A simple chart component for vue

## Installation
vue-chart for using required vuejs and Chart.js 

[Vue.js](http://vuejs.org)

[Chart.js](http://www.chartjs.org/docs/)


##  Example
#### line&bar&pie&doughnut chart
##### demo
![vue line chart] (https://raw.githubusercontent.com/raganyaYoung/vue-chart/master/demo/line.png) 
***
![vue bar chart] (https://github.com/raganyaYoung/vue-chart/blob/master/demo/bar.png?raw=true) 
***
![vue pie chart] (https://raw.githubusercontent.com/raganyaYoung/vue-chart/master/demo/pie.png) 
***
![vue doughnut chart] (https://raw.githubusercontent.com/raganyaYoung/vue-chart/master/demo/doughnut.png) 

#####  usage
```
    <v-chart type=“line" // or bar/pie/doughnut 
		width=“300"
		height=“300"
		:chartdata=“chartdata"
		:labels=“chartlabels"
		:responsive=“false"
		label="line chart”>
	</v-chart>
```
##### props
| Name          | Type     | Default | Required | Description     |
| ------------- |:--------:| -------:| --------:| ------------:|
| type  | BOOLEAN  |doughnut | true     | type of chart    |
| width   | INTEGER  | 400   | false     | width of chart     |
| height | INTEGER  | 300    | false     | height of chart  | 
| chartdata | ARRAY  | [12, 19, 3]    |true     | data of chart  |
| labels | ARRAY  | ['d1', 'd2', 'd3']     | true     | name of every data note  |
| responsive | BOOLEAN  | false    | true     | resize your chart (false means can resize )  |
| label | TEXT  | 'My Chart'    | false     | name of chart  |
 
 ***
#### radar chart
##### demo
![vue radar chart] (https://raw.githubusercontent.com/raganyaYoung/vue-chart/master/demo/radar.png)

#####  usage
```
    <v-chart type="radar"
		width="300"
		height="300"
		:radardata="radarData"
		:labels="chartLabels"
		:responsive="false"
		:radarlabel="radarLabel">
	</v-chart>
```
##### props
| Name          | Type     | Default | Required | Description     |
| ------------- |:--------:| -------:| --------:| ------------:|
| type  | BOOLEAN  |doughnut | true     | type of chart    |
| width   | INTEGER  | 400   | false     | width of chart     |
| height | INTEGER  | 300    | false     | height of chart  | 
| radardata | ARRAY  | [ [1,2,3], [4,5,6] ]    |true     | data of radar chart  |
| labels | ARRAY  | ['d1', 'd2', 'd3'],['c1', 'c2', 'c3']     | true     | name of every data note  |
| responsive | BOOLEAN  | false    | true     | resize your chart (false means can resize )  |
| label | TEXT  | 'My Chart'    | false     | name of chart  |
 
 
 
