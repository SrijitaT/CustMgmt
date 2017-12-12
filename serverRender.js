import axios from 'axios';
import config from './config';
import ReactDOMServer from 'react-dom/server';
import CustomerList from './src/components/customerdetails/customerlist';
import TabList from './src/components/customerdetails/customerInfoView';

axios.get(`${config.serverUrl}/api/customers`).then(resp=>{
  // ReactDOMServer.renderToString(<TabList initialCust={resp.data}/>);
    console.log(resp.data);
})