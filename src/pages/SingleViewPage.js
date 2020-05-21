import React, { useContext } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { ListPageContext } from '../contexts/ListPageContext';
import { Row, Col } from 'antd';
import { Redirect } from 'react-router-dom';
import './pages.scss';

const SingleViewPage = () => {
  const { listDataSource } = useContext(ListPageContext);
  const { selected } = listDataSource;
  return (
    <MainLayout>
      <Row
        gutter={[{ xs: 0, sm: 0, md: 64 }, { xs: 64, sm: 64, md: 64 }]}
        className='single-view-container'>
        {
          selected.length > 0 ?
            <React.Fragment>
              <Col md={{ span: 12 }} sm={{ span: 24 }}>
                <img alt={selected[0].slug} src={require('../assets/' + selected[0].image)} />
              </Col>
              <Col md={{ span: 12 }} sm={{ span: 24 }}>
                <p>{selected[0].title}</p>

                {selected[0].questions.map((el, ind) => {
                  return <React.Fragment key={ind}>
                    <h4>Question {ind + 1}</h4>
                    <h5>{el}</h5>
                  </React.Fragment>
                })}
              </Col>
            </React.Fragment> : <Redirect to={'/'} />
        }
      </Row>
    </MainLayout>
  );
}

export default SingleViewPage;