import React from 'react'
import Table from 'react-bootstrap/Table'

const CardsDetails = () => {
  return (
    <>
        <div className='containet mt-2'>
          <h2 className='text-center'>Item Details Page</h2>


          <section className='containter mt-3'>
            <div className='iteamsdetails'>

              <div className='items_img'>
                <img src='https://b.zmtcdn.com/data/pictures/chains/5/19295245/089cbcf1d3307542c72f77272556b28b_o2_featured_v2.jpg?output-format=webp' alt=''/>

              </div>

              <div className='details'>
                <Table>
                  <tr>
                    <td>
                      <p><strong>Resturant:</strong> Sada Kalo Mela</p>

                      <p><strong>Price:</strong> Sada Kalo Mela</p>

                      <p><strong>Dishes:</strong> Sada Kalo Mela</p>

                      <p><strong>Total:</strong> Sada Kalo Mela</p>

                      
                    </td>
                    <td>
                    <p><strong>Rating :</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}>3.5 ★	</span></p>
                    <p><strong>Order Review :</strong> <span >	spond</span></p>
                    <p><strong>Remove :</strong> <span ><i className='fas fa-trash'  style={{color:"red",fontSize:20,cursor:"pointer"}}></i>	</span></p>
                  </td>
                  </tr>
                </Table>
                  
              </div>

            </div>

          </section>

        </div>
    </>
  )
}

export default CardsDetails