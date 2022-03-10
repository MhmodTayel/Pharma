import {TabPanel,Navbar} from './../../Components/index'
import Footer from '../../Layouts/Footer/Footer'
function RecenltyAdded() {
    return ( 
        <>
        <Navbar/>
        <div className='container py-5'>
            <div className='row'>
                <TabPanel></TabPanel>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default RecenltyAdded;