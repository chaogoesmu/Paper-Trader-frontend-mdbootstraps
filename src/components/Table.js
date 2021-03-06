import React from 'react';
import EasyTable from 'react-easy-table';
// import 'react-easy-table/sharp-ocean.css'

const Table = (props) => {
  const tHead = [
    {
        title: <h3 id="table-header">Company</h3>,
        assignTo: 'companyName',
        id: 'companyName'
    },
    {
        title: <h3 id="table-header">Exch</h3>,
        assignTo: 'exchange',
        id: 'exchange'
    },
    {
        title: <h3 id="table-header">Ticker/Symbol</h3>,
        assignTo: 'ticker',
        id: 'ticker'
    }
  ];



  const temp = JSON.parse('{"ResultSet":{"Query":"AAPL","Result":[{"symbol":"AAPL","name":"Apple Inc.","exch":"NAS","type":"S","exchDisp":"NASDAQ","typeDisp":"Equity"},{"symbol":"AAPL180329C00170000","name":"AAPL Mar 2018 call 170.000","exch":"OPR","type":"O","exchDisp":"OPR","typeDisp":"Option"},{"symbol":"AAPL.SN","name":"Apple Inc.","exch":"SGO","type":"S","exchDisp":"Santiago Stock Exchange","typeDisp":"Equity"},{"symbol":"AAPL180329C00175000","name":"AAPL Mar 2018 call 175.000","exch":"OPR","type":"O","exchDisp":"OPR","typeDisp":"Option"},{"symbol":"AAPL180329C00172500","name":"AAPL Mar 2018 call 172.500","exch":"OPR","type":"O","exchDisp":"OPR","typeDisp":"Option"},{"symbol":"AAPL.MX","name":"Apple Inc.","exch":"MEX","type":"S","exchDisp":"Mexico","typeDisp":"Equity"},{"symbol":"AAPL180329C00167500","name":"AAPL Mar 2018 call 167.500","exch":"OPR","type":"O","exchDisp":"OPR","typeDisp":"Option"},{"symbol":"AAPL180420C00170000","name":"AAPL Apr 2018 call 170.000","exch":"OPR","type":"O","exchDisp":"OPR","typeDisp":"Option"},{"symbol":"AAPL190118C00200000","name":"AAPL Jan 2019 call 200.000","exch":"OPR","type":"O","exchDisp":"OPR","typeDisp":"Option"},{"symbol":"AAPL180518C00185000","name":"AAPL May 2018 call 185.000","exch":"OPR","type":"O","exchDisp":"OPR","typeDisp":"Option"}]}}')
  const companies = temp.ResultSet.Result

  // const setCompanySymbol = (e) => {
  //   console.log('clicked!')
  // }

  const findData = (companies) => {
    let results = []
    companies.map((company, i) => {
      results.push(
        {
          companyName: <p id="table-data">{company.name}</p>,
          exchange: <p id="table-data">{company.exch}</p>,
          ticker: <p id="table-data"><a onClick={() => {props.setCompanySymbol(company.symbol)}} id="table-ticker">{company.symbol}</a></p>, id: i+1})
    })
    return results
  }

  const data = findData(companies);

  return (
    <div id="table">
      <EasyTable
        tHead={tHead}
        data={data}
      />
    </div>
      );
};

export default Table;
