import React from 'react'
import Sidenav from '../../components/shared/Sidenav'
import TopBar from '../../components/shared/TopBar';
import { Row, Col } from "react-bootstrap";
import Notification from '../../components/dashboard/Notification';
import HeatMap from "../../components/dashboard/Heatmap";
import BrandOverview from "../../components/dashboard/BrandOverview";
import CounterfeitSolutionResults from "../../components/dashboard/CounterfeitSolutionResults";
import ProductWiseChecked from "../../components/dashboard/ProductWiseChart";
import RecentCodeCheck from "../../components/dashboard/RecentCodeCheck";

function Home() {
  return (
    <>
      <TopBar />
      <Sidenav />
      <div className='page-wrapper'>
        <Notification />
        <div className='home-section'>
          <div class="dashboard-cards">
            <Row className="g-3">
              <Col xxl={6} xl={6} lg={6} md={12} className="d-flex">
                <BrandOverview />
              </Col>
              <Col xxl={6} xl={6} lg={6} md={12} className="d-flex">
                <HeatMap />
              </Col>
              <Col xxl={5} xl={5} lg={5} md={12} className="d-flex">
                <CounterfeitSolutionResults />
              </Col>
              <Col xxl={7} xl={7} lg={7} md={12} className="d-flex">
                <ProductWiseChecked />
              </Col>
              {/* <Col xxl={6} xl={6} lg={6} md={12} className="d-flex">
                <DailyActivitiesChart />
              </Col>
              <Col xxl={6} xl={6} lg={6} md={12} className="d-flex">
                <StateWiseCodeCheckUsers />
              </Col> */}
              <Col xxl={12} xl={12} lg={12} md={12} className="d-flex">
                <RecentCodeCheck />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home