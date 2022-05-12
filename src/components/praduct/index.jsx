import React, { useContext, useRef, useState } from 'react'
import { Table, Input, Button, Space } from 'antd'
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import {Container, Wrapper} from './style'
import { ProductsContext } from '../../context/praducts'


const Product = () => {

  const [product, setProduct] = useContext(ProductsContext)

  const searchInput = useRef(null);
  
  const [state, setState] = useState({searchText:'', searchedColumn:''})
  
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  const handleReset = clearFilters => {
    clearFilters();
    setState({ searchText: '' });
  };
  
  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          // ref={node => {
          //   this.searchInput = node;
          // }}
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: text =>
      state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  
    const columns = [
      {
        title: 'Company Id',
        dataIndex: 'id',
        key: 'id',
        width: '2%',
        ...getColumnSearchProps('company'),
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'id',
        width: '10%',
        ...getColumnSearchProps('name'),
      },
      {
        title: 'Created_At',
        dataIndex: 'created_at',
        key: 'id',
        width: '10%',
        ...getColumnSearchProps('created_at'),
      },
      {
        title: 'Updated_At',
        dataIndex: 'updated_at',
        key: 'id',
        width: '10%',
        ...getColumnSearchProps('updated_at'),
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'id',
        width: '30%',
        ...getColumnSearchProps('description'),
        sorter: (a, b) => a.address.length - b.address.length,
        sortDirections: ['descend', 'ascend'],
      },
    ];
    
    return  <Table columns={columns} dataSource={product.items} bordered />
  
}


export default Product

