import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'semantic-ui-react';
import { setNotBusy } from '../redux/carSlice/carSlice';

function RentalHistoryPage() {
    const dispatch = useDispatch()
    const customer = useSelector(state => state.customer.currentCustomer)
    const rentals = useSelector(state => state.rental.items)
    const [customersRentals, setCustomersRentals] = useState([])

    
    
    useEffect(() => {
        rentals.forEach(rental => {
            if(rental.customer.id===customer.id){
                setCustomersRentals(customersRentals => [...customersRentals, rental])
            }
        });
        
       
    }, [rentals])


    return (
        <div style={{ marginLeft: "auto", marginRight: "auto" }}>
        
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                marginTop: 40,
                
              }}
            >
    
            </div>
        
            <h2 style={{color:"white"}}>Rent History</h2>
          <div
            style={{
              width: 600,
              marginTop: 20,
            }}
          >
            
          </div>
    
          <div
            style={{
              width: 800,
              background: "#4E4E50",
              borderRadius: 10,
              padding: 20,
              textAlign: "left",
            }}
          >
          <Table celled inverted selectable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Brand</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
        <Table.HeaderCell>Daily Price</Table.HeaderCell>
        <Table.HeaderCell>Rent Date</Table.HeaderCell>
        <Table.HeaderCell>Return Date</Table.HeaderCell>
        <Table.HeaderCell>Is available now</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    {customersRentals.map(customersRental=>{
        const rentDate = customersRental.rentDate;
        const returnDate = customersRental.returnDate;
        const car = customersRental.car;
       return <Table.Row  >
        <Table.Cell>{car.brand.name}</Table.Cell>
        <Table.Cell>{car.description}</Table.Cell>
        <Table.Cell>{car.dailyPrice}</Table.Cell>
        <Table.Cell>{rentDate}</Table.Cell>
        <Table.Cell >{returnDate?returnDate:'---'}</Table.Cell>
        <Table.Cell style={{textAlign:"center"}}>{(!car.busy).toString()}</Table.Cell>
      </Table.Row>
    })}
    
    </Table.Body>
  </Table>

            
          </div>
        </div>
      );
}

export default RentalHistoryPage
