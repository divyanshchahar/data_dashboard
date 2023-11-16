import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge } from '@mui/material';
import { SvgIcon } from '@mui/material';

function NotificationComponent() {
	return (
		<Badge
			badgeContent={
				<SvgIcon>
					<svg height="200" width="200" viewBox="0 0 200 200">
						<circle cx="100" cy="100" r="100" fill="white" />
						<circle cx="100" cy="100" r="50" fill="green" />
					</svg>
				</SvgIcon>
			}
			overlap="circular"
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
		>
			<NotificationsIcon sx={{ fontSize: 30 }} />
		</Badge>
	);
}

export default NotificationComponent;
