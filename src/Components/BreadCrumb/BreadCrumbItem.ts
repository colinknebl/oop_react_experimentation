import UpdateMgr from '../UpdateMgr';
import { AppBreadCrumbMgr } from '../../index';

declare var window: any;

class BreadCrumbItem extends UpdateMgr {
	private _name: string;
	private _id: string;

	constructor(name: string, id: string) {
		super();
		this._name = name;
		this._id = id;
	}

	public get name() {
		return this._name;
	}

	public get id() {
		return this._id;
	}

	public set name(newName: string) {
		this._name = newName;
		this.initUpdate.call(AppBreadCrumbMgr);
	}
}
window.BreadCrumbItem = BreadCrumbItem;

export default BreadCrumbItem;
