import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const ListedBooks = () => {
    return (
        <div>
             <h2 className='text-3xl my-4'>Listed Books</h2>
            <Tabs>
                <TabList>
                  <Tab>Read Books</Tab>
                  <Tab>Wishlist Books</Tab>
                </TabList>
            
                <TabPanel>
                  <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;