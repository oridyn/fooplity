var React = require('react/addons');

var HeroApp = React.createClass({

	render: function() {
		if (this.props.user) {
			if(this.props.meetup.rsvpsAvailable || this.props.rsvpStatus.rsvped && this.props.rsvpStatus.attending) {
				return (
					<div>
						<h4 className="hero-button-title">Are you coming? <br /> <span className="text-thin">{ this.props.meetup.remainingRSVPs } spots left</span></h4>
						<div className="hero-button">
							<div id="next-meetup" className="form-row meetup-toggle">
								<div className="col-xs-6">
									<button type="button" onClick={this.rsvpAttending} className="btn btn-lg btn-block btn-default js-rsvp-attending">Yes</button>
								</div>
								<div className="col-xs-6">
									<button type="button" onClick={this.rsvpNotAttending} className="btn btn-lg btn-block btn-default js-rsvp-decline">No</button>
								</div>
							</div>
						</div>
					</div>
				);
			} else {
				return (
					<div className="hero-button">
						<div className="alert alert-success mb-0 text-center">No more tickets...</div>
					</div>
				);
			}
		} else {
			if (this.props.meetup.rsvpsAvailable) {
				return (
					<div className="hero-button">
						<a className="btn btn-primary btn-lg btn-block js-auth-trigger">RSVP Now {this.props.meetup.remainingRSVPs} spots left<span class="text-thin"></span></a>
					</div>
				)
			} else {
				 return (
					<div className="hero-button">
						<div className="alert alert-success mb-0 text-center">No more tickets...</div>
					</div>
				);
			}
		}
	},
});

React.render(<HeroApp meetup={Keystone.meetup} user={Keystone.user} rsvpStatus={Keystone.rsvpStatus} />, document.getElementById('react-hero-button'));
