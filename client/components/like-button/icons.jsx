/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import Gridicon from 'components/gridicon';

const LikeIcons = ( { size } ) => (
	<span className="like-icons">
		<Gridicon icon="star" size={ size } />
		<Gridicon icon="star-outline" size={ size } />
	</span>
);

LikeIcons.propTypes = {
	size: React.PropTypes.number
}

LikeIcons.defaultProps = {
	size: 24
}

export default LikeIcons;
