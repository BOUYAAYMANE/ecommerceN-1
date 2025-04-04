import React from 'react'
import AdminAllProductsCard from './AdminAllProductsCard'
import { Row } from 'react-bootstrap'
import { useTheme } from '@mui/system'

const AdminAllProducts = ({products}) => {
  const theme =useTheme();
  return (
    <div>
    <div  style={{ color: theme.palette.text.primary }} className='admin-content-text'>Manage all products
</div>
    <Row className='justify-content-start '>
        {
          products ? (products.map((item,index)=>{
            return (<AdminAllProductsCard key={index} product={item}/>)
          })) : null
        }
        
      
    </Row>
    
</div>
  )
}

export default AdminAllProducts
