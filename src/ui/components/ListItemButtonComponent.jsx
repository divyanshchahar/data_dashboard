import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

function ListItemButtonComponent({ Icon, primaryText }) {
	return (
		<ListItemButton>
			<ListItemIcon>
				<Icon />
			</ListItemIcon>

			<ListItemText primary={primaryText} />
		</ListItemButton>
	);
}

export default ListItemButtonComponent;
