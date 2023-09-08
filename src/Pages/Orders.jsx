import { Header } from "../components"
import { DataGrid } from '@mui/x-data-grid';
import { ordersData } from '../data/dummy';

const Orders = () => { 
  const columns = [
    { field: 'OrderID', headerName: 'Order ID', width: 100 },
    {
      field: 'ProductImage',
      headerName: 'Product Image',
      width: 180,
      renderCell: (params) => (
       
    <img
      className="rounded-xl h-20 w-24 md:ml-3 object-contain"
      src={params.value}
      alt="order-item"/>
      ),
    },
    { field: 'CustomerName', headerName: 'Customer Name', width: 150 },
    { field: 'TotalAmount', headerName: 'Total Amount', width: 150 },
    { field: 'OrderItems', headerName: 'Order Items', width: 180 },
    { field: 'Location', headerName: 'Location', width: 120 },
    { field: 'Status', headerName: 'Status', width: 120,  
    renderCell: (params) => {
      const statusBg = params.row.StatusBg; 
      return (
        <button
          type="button"
          style={{ background: statusBg }}
          className="py-1 px-2 capitalize rounded-2xl text-md"
        >
          {params.value}
        </button>
      );
    },
   },
  ];
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
        <Header category='Page' title='Orders' />
        <DataGrid
          rows={ordersData}
          columns={columns}
          pageSize={8} 
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 8 },
            },
          }}
          pageSizeOptions={[8, 10]}
          checkboxSelection
        />
    </div>
  )
}

export default Orders