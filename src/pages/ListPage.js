import React, { useEffect, useState, useContext } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { ListPageContext } from '../contexts/ListPageContext';
import Card from '../components/commons/Card';
import responseFromApi from '../feed/data.json';
import { Row, Col, Spin } from 'antd';

const ListPage = () => {
  const { dispatch, listDataSource } = useContext(ListPageContext);
  const [isLoading, setLoading] = useState(true);
  const { listData } = listDataSource;

  useEffect(() => {
    // fetching here, since data is given I'll be using it as a sample response from the API
    setTimeout(() => {
      const data = responseFromApi;
      dispatch({ type: 'GET_LIST', data });
      setLoading(false);
    }, 1500)
  }, [dispatch]);

  return (
    <MainLayout>
      <Spin spinning={isLoading} tip='Please wait while we are gathering your data...'>
        <Row gutter={[{ xs: 0, sm: 0, md: 32 }, { xs: 64, sm: 64, md: 64 }]} style={{ marginTop: '60px' }}>
          {listData.map((el, ind) => {
            return (
              <Col md={{ span: 12 }} sm={{ span: 24 }} key={ind}>
                <Card el={el} />
              </Col>
            )
          })}
        </Row>
      </Spin>
    </MainLayout>
  );
}

export default ListPage;