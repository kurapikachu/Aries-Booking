import React from 'react';
import { Input, Space } from 'antd';

function Search () {

    const Search  = Input.Search ;
    const onSearch = value => console.log(value);

    return (
        <Space direction="vertical">
            <Search placeholder="" onSearch={onSearch} enterButton />
        </Space>
    );
}

export default Search