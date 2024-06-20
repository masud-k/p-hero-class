import { useEffect, useState } from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-tabs";
import 'react-tabs/style/react-tabs.css';



const Courses = () => {

    const [tabIndex, setTabIndex] = useState(0);

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Level  Course</Tab>
                    <Tab>Level 2 Course</Tab>
                    <Tab>Conceptual Session</Tab>
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default Courses;