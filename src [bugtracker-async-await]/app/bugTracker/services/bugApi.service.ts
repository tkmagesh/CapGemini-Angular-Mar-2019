import { Bug } from '../models/Bug';

import axios from 'axios';

export class BugApiService{

	private serviceEndPoint = 'http://localhost:3000/bugs';

	async getAll() : Promise<Bug[]> {
		/*return axios
			.get<Bug[]>(this.serviceEndPoint)
			.then(response => response.data);*/

		let response = await axios.get(this.serviceEndPoint);
		return response.data;
	}

	async save(bugData : Bug) : Promise<Bug> {
		if (bugData.id === 0){
			let response = await axios.post(this.serviceEndPoint, bugData);
			return response.data;
		} else {
			let response = await axios.put(`${this.serviceEndPoint}/${bugData.id}`, bugData);
			return response.data;
		}
	}

	async remove(bug : Bug) : Promise<any>{
		let response = await axios.delete(`${this.serviceEndPoint}/${bug.id}`);
		return response.data;
	}
}