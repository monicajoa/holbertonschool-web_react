import React, { Fragment }from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import closeIcon from '../assets/close-icon.png';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends React.Component {
	constructor(props) {
		super(props);
		this.markAsRead = this.markAsRead.bind(this);
	}

	shouldComponentUpdate(newProps) {
		return (
			newProps.listNotifications.length > this.props.listNotifications.length
		);
	}

	markAsRead(id) { 
		console.log(`Notification ${id} has been marked as read`)
	}

	render() {
		const { displayDrawer, listNotifications } = this.props;
		return (
			<React.Fragment>
				<div className={css(styles.menuItem)}>
					Your notifications
				</div>
				{ displayDrawer &&
					<div className={css(styles.Notifications)}>
						<button style={{background: 'transparent', float: 'right'}} aria-label='Close' onClick={() => console.log('Close button has been clicked')} >
							<img src={closeIcon} alt="close-icon" style={{width: '20px'}} />
						</button>
						<p>Here is the list of notifications</p>
						<ul>
							{
								listNotifications.length === 0 &&
									(<NotificationItem
										value="No new notification for now"
									/>)
							}
							{
								listNotifications && listNotifications.map((newNote) => (
									<NotificationItem
										key={newNote.id}
										html={newNote.html}
										type={newNote.type}
										value={newNote.value}
										markAsRead={this.markAsRead}
										id={newNote.id}
									/>
								))
							}
						</ul>
					</div>
				}
			</React.Fragment>
		);
	}
}

const styles = StyleSheet.create({
	menuItem: {
		fontFamily: 'Arial, Helvetica, sans-serif',
		textAlign: 'right',
		fontWeight: 'bold',
		padding: '5px',
		paddingRight: '20px'
	},

	Notifications: {
		fontFamily: 'Arial, Helvetica, sans-serif',
		border: '2px dashed #e1354b',
		paddingRight: '20px 5px',
		margin: '5px',
		position: 'fixed',
		right: '1%',
		left: '65%'
	},

	Notificationsbutton: {
		border: 'none',
		background: 'none',
		cursor: 'pointer'
	},

	Notificationsul: {
		paddingTop: '15px',
		paddingLeft: '40px'
	}
});

Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
	displayDrawer: false,
	listNotifications: []
};

export default Notifications;
