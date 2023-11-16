import AvatarComponent from '../components/AvatarComponent';
import { Box, AppBar, Toolbar } from '@mui/material';
import assadiusLogo from '../../assets/assaduisLogo.png';
import NotificationComponent from '../components/NotificationComponent';
import SearchBar from '../components/SearchBar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import IconButtonComponent from '../components/IconButtonComponent';

function TopNavBar() {
	return (
		<>
			<Box>
				<AppBar sx={{ boxShadow: 'none' }}>
					<Toolbar
						sx={{
							justifyContent: 'space-between',
							color: 'black',
							backgroundColor: 'white',
							alignItems: 'center',
						}}
					>
						<Box sx={{ height: 'fit-content' }}>
							<img src={assadiusLogo} height="25px" />
						</Box>

						<Box sx={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
							<SearchBar />

							<NotificationComponent />

							<AvatarComponent />

							<IconButtonComponent Icon={ArrowDropDownIcon} />
						</Box>
					</Toolbar>
				</AppBar>
			</Box>
		</>
	);
}

export default TopNavBar;
