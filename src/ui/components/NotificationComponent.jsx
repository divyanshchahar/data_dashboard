import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge } from '@mui/material';
import { SvgIcon } from '@mui/material';

function NotificationComponent() {
	return (
		<Badge
			badgeContent={
				<SvgIcon>
					<svg height="100" width="100" viewBox="0 0 100 100">
						<circle cx="50" cy="50" r="50" fill="white" />
						<circle cx="50" cy="50" r="25" fill="green" />
					</svg>
				</SvgIcon>
			}
			overlap="circular"
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'right',
			}}
		>
			<NotificationsIcon sx={{ fontSize: 40 }} />
		</Badge>
	);
}

export default NotificationComponent;
