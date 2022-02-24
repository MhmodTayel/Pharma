import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from './Tabs.module.scss'
import {getIncomingMed} from '../../services/userService'
import IncomingMed from './../IncomingMedicine/IncomingMed'
 
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const d = new Date()
const today = {date:d.toISOString().split('T')[0]}

var w = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
const weekAgo = {date:w.toISOString().split('T')[0]}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [todayMedicine, setTodayMedicine] = React.useState([]);
  const [weeklyMedicine, setWeeklyMedicine] = React.useState([]);
  const tabStyles = {
    background: "#00e2fa" ,
    opacity:'0.5',
    padding: "24px 40px",
    borderRadius: "25px 25px 0px 0px",
    boxShadow:'3px 3px 4px 4px rgba(0,0,0,0.5)'
  }

  React.useEffect(()=>{
      getIncomingMed(today).then(
        (res)=>{
          setTodayMedicine(res.data);
      },
      (err)=> console.log(err)) 
  },[]) 
  
  const getWeeklyMed =  () => {
        getIncomingMed(weekAgo).then(
          (res)=>{
            setWeeklyMedicine(res.data);
        },
        (err)=> console.log(err)) 
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log("Change")
  };


  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 3, borderColor: '#00e2fa'}}>
        <Tabs value={value} onChange={handleChange} TabIndicatorProps={{ style: tabStyles }} sx={{px:2}}>
          <Tab label="Added Today" sx={{ marginLeft:"5px"}} className={styles.tabStyle} />
          <Tab onClick={getWeeklyMed} label="Added This Week" className={styles.tabStyle}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} >
        <IncomingMed meds={todayMedicine} />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <IncomingMed meds={weeklyMedicine} />
      </TabPanel>
    </Box>
  );
}
