// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

// Asset
import './css/Footer.css';

class Footer extends Component {
	static propTypes = {
        copyright: PropTypes.string
    };

	render() {
		const {copyright = 'Niko 1997' } = this.props;
		return (
			<div className="Footer">
				<p>Copyright.. No a la pirateria </p>
				<p>{copyright}</p>
			</div>
		);
  }
}

export default Footer;
