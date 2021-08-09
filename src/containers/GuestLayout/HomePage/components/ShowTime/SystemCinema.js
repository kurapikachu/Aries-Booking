import React, { useState, useEffect } from 'react'
import Cinema from './Cinema'
import { Tabs } from 'antd';
import MovieBlock from './MovieBlock'

const { TabPane } = Tabs;

const SystemCinema = ({ systemData }) => {
  const {lstCumRap = [] } = systemData
  return (
    <div>
      {<Tabs style={{ minWidth: '700px' }} tabPosition='left'>
          {
            Array.isArray(lstCumRap) && lstCumRap.length ? 
              lstCumRap.map((cinema, index) => {
                return (
                  <TabPane key={index} tab={<Cinema cinema={cinema}  />} key={index}>
                      <MovieBlock cinema={cinema}/>
                  </TabPane>
                )
              }) : ''
          }
        </Tabs>   } 
    </div>
  )
}

export default SystemCinema
