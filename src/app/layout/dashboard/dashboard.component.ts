import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    @ViewChild('agGrid') agGrid: AgGridAngular;

    title = 'app';

    rowData: any;

    columnDefs = [
        {headerName: 'Make', field: 'make', sortable: true, filter: true, checkboxSelection: true },
        {headerName: 'Model', field: 'model', sortable: true, filter: true },
        {headerName: 'Price', field: 'price', sortable: true, filter: true}
    ];

    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor(private http: HttpClient) {
        this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: 'First slide label',
                text:
                    'Nulla vitae elit libero, a pharetra augue mollis interdum.'
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: 'Second slide label',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: 'Third slide label',
                text:
                    'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'warning',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            }
        );
    }

    ngOnInit() {
        this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
        // this.rowData = this.http.get('https://api.myjson.com/bins/ly7d1');
        console.log(`tables -- ngOnInit called`);
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

    getSelectedRows() {
        const selectedNodes = this.agGrid.api.getSelectedNodes();
        const selectedData = selectedNodes.map( node => node.data );
        const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
        const selectedDataJsonPresentation = selectedData.map( node => '{ "make" :"' + node.make + '", "model" : "' + node.model + '" }').join(', ');
        console.log(`${selectedDataStringPresentation}`);
        console.log(`[${selectedDataJsonPresentation}]`);
    }
}
