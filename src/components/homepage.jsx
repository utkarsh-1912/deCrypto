import React from 'react'
import millify from 'millify';
import {Typography , Row , Col ,Statistic} from 'antd';
import {Link} from 'react-router-dom';
import {useGetCryptosQuery} from '../services/cryptoApi';
import Cryptocurrencies from './cryptocurrencies';
import News from './news';

const {Title} = Typography;

function Homepage() {

    const { data, isFeaching } = useGetCryptosQuery(10)  ;
    const globalStats = data?.data?.stats;
    if(isFeaching) return 'Loading..';
   console.log(data);
  return (
    <>
        <Typography.Title level={2} className="heading">
          Crypto Stats
        </Typography.Title>
        <Row>
            <Col span={12}><Statistic title="Total CryptoCurrency" value={globalStats.total} /></Col>
            <Col span={12}><Statistic title="Total Market Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
            <Col span={12}><Statistic title="Total Market Capital" value={millify(globalStats.totalMarketCap)}/></Col>
            <Col span={12}><Statistic title="Total Last 24hr Volume" value={millify(globalStats.total24hVolume)}/></Col>
            <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
        </Row>
        <div className="home-heading-container">
            <Title level={2} className="home-title">Top 10 Cryptocurrencies</Title>
            <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
        </div>
        <Cryptocurrencies simplified ={true}/>
        <div className="home-heading-container">
            <Title level={2} className="home-title">Latest News</Title>
            <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>
        </div>
        <News simplified/>
    </>
  )
}

export default Homepage
