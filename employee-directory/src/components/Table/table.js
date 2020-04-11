import React from "react";
import data from "../../data.json"
import TableRow  from "./subComponent/TableRow/tableRow";
import TableHeader from "./subComponent/TableHeader/tableHeader";
import { EventContext, TableContext } from "./tableContexts";

export default function Table() {
    const [sortBy, setSortBy] = React.useState();

    const handleTableHeaderClick = (event) => {
        const target = event.currentTarget
        const id = target.getAttribute('data-id')

        setSortBy(id);
    }

    const tableContext = {
        sortBy,
    }

    const eventContext = {
        onTableHeaderClick: handleTableHeaderClick
    }

    let sortedData = ;
    switch (sortBy){
        case "Name":
        
            break;
        case "Email":
            sortedData = sortedData.sort((a, b) => a.email.localeCompare(b.email))
            break;
        case "Phone":
            sortedData = sortedData.sort((a, b) => a.phone.localeCompare(b.phone))
            break;
        case "Nationality":
            sortedData = sortedData.sort((a, b) => a.nat.localeCompare(b.nat))
            break;
        default:
            break;                        
    }



    return (
        <TableContext.Provider value={tableContext}>
            <EventContext.Provider value ={eventContext}>
                <table border=".5">
                    <thead>
                        <tr>
                            <TableHeader
                                text="Name"
                            />
                            <TableHeader 
                                text="Email"
                            />
                            <TableHeader 
                                text="Phone"
                            />
                            <TableHeader 
                                text="Nationality"
                            />
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sortedData.map((person) => (
                                <TableRow
                                        key={person.phone}
                                        person={person}
                                />
                            ))
                        }
                    </tbody>
                </table>
            </EventContext.Provider>
        </TableContext.Provider>
    )
}