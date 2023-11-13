import AvatarComponent from '../components/AvatarComponent';
import { Box, AppBar, Toolbar } from '@mui/material';
import assadiusLogo from '../../assets/assaduisLogo.png';
import NotificationComponent from '../components/NotificationComponent';
import SearchBar from '../components/SearchBar';

function TopNavBar() {
	return (
		<>
			<Box>
				<AppBar>
					<Toolbar sx={{ justifyContent: 'space-between' }}>
						<Box sx={{ height: '50px' }}>
							<img src={assadiusLogo} height="50px" />
						</Box>

						<Box sx={{ display: 'flex' }}>
							<SearchBar />

							<NotificationComponent />

							<AvatarComponent />
						</Box>
					</Toolbar>
				</AppBar>
			</Box>
		</>
	);
}

export default TopNavBar;
