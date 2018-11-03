import React from 'react';

class Timeline extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className="timeline">
				<div className="timeline-item" id="timeline-example-1">
					<div className="timeline-left">
						<a className="timeline-icon" href="#timeline-example-1" />
					</div>
					<div className="timeline-content">Signed up to Chavruta</div>
				</div>
				<div className="timeline-item" id="timeline-example-2">
					<div className="timeline-left">
						<a className="timeline-icon icon-lg" href="#timeline-example-2">
							<i className="icon icon-check" />
						</a>
					</div>
					<div className="timeline-content">You matched with Yael Bat Meir (France)</div>
				</div>
				...
			</div>
		);
	}
}

export default Timeline;
