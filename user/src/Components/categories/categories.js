import * as React from 'react';
import styles from './categories.module.scss';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { style } from '@mui/system';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`action-tabpanel-${index}`}
            aria-labelledby={`action-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `action-tab-${index}`,
        'aria-controls': `action-tabpanel-${index}`,
    };
}


export default function Categories() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };

    return (
        <div className='container-fluid'>
            <h3 className='text-primary text-center my-5 fw-bolder'>Categories</h3>
            <Box
                className='w-100'
                sx={{
                    bgcolor: 'background.paper',
                    position: 'relative',
                    minHeight: 500,
                }}
            >
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="action tabs example"
                    >
                        <Tab label="Medicen" {...a11yProps(0)} />
                        <Tab label="Skin Care" {...a11yProps(1)} />
                        <Tab label="Body Care" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <div className='d-flex'>
                            <img src={require('../../Assets/Images/medCate1.png')} alt='medicen' title='Panadol' className={styles.img} />
                            <img src={require('../../Assets/Images/medCate2.jpg')} alt='medicen' title='Catafast' className={styles.img} />
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <div className='d-flex'>
                            <img src={require('../../Assets/Images/skinCate1.jpg')} alt='medicen' className={styles.img} />
                            <img src={require('../../Assets/Images/skinCate2.jpg')} alt='medicen' className={styles.img} />
                            <img src={require('../../Assets/Images/skinCate1.jpg')} alt='medicen' className={styles.img} />
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        <div className='d-flex'>
                            <img src={require('../../Assets/Images/bodyCate1.jpg')} alt='medicen' className={styles.img} />
                        </div>
                    </TabPanel>
                </SwipeableViews>
            </Box>
        </div>
    );
}
