import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DescriptionIcon from '@mui/icons-material/Description';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButtonComponent from '../components/ListItemButtonComponent';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';
import ContactsIcon from '@mui/icons-material/Contacts';

const buttonList = [
	{ icon: DashboardIcon, text: 'Dashboard' },
	{ icon: AccountBalanceWalletIcon, text: 'Accounts' },
	{ icon: AttachMoneyIcon, text: 'Payroll' },
	{ icon: DescriptionIcon, text: 'Reports' },
	{ icon: PersonIcon, text: 'Advisor' },
	{ icon: ContactsIcon, text: 'Contacts' },
];

export default function SideNavBarLayout() {
	return (
		<Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
			<nav aria-label="main mailbox folders">
				<List>
					{buttonList.map((item) => {
						return (
							<ListItem disablePadding>
								<ListItemButtonComponent
									Icon={item.icon}
									primaryText={item.text}
								/>
							</ListItem>
						);
					})}
				</List>
			</nav>
		</Box>
	);
}
