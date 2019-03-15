import { Component } from '@angular/core';

@Component({
	selector : 'app-products',
	template : `
		<h1>Products</h1>
		<hr/>
		<label>Product Name</label>
		<input type="text" />
		<input type="button" value="Add New"/>
		<ol>
			<li *ngFor="let product of products">{{product}}</li>
		</ol>
	`
})
export class ProductsComponent{
	products : string[] = ['Pen', 'Pencil', 'Marker', 'Scribble Pad'];
}