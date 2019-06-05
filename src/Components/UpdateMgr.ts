class UpdateMgr {
	public handleUpdate() {
		console.warn(
			'The updates to UpdateMgr are failing. The %chandleUpdate%c method must be overwritten in order for updates to render.',
			'font-style:italic;',
			'font-style:normal;'
		);
	}

	public initUpdate() {
		this.handleUpdate();
	}
}

export default UpdateMgr;
