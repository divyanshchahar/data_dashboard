import { Avatar } from '@mui/material';
import Face3Icon from '@mui/icons-material/Face3';

import React from 'react';

function AvatarComponent() {
	return <Avatar sx={{ width: '25px', height: '25px' }} src={Face3Icon} />;
}

export default AvatarComponent;
