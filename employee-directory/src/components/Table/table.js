import React from "react";
import data from "../../data.json"
import TableRow  from "./subComponent/TableRow/tableRow";
import TableHeader from "./subComponent/TableHeader/tableHeader";
import { EventContext, TableContext } from "./tableContexts";

export default function Table() {
    const [sortBy, setSortBy] = React.useState();
    const [sortOrder, setSortOrder] = React.useState();

    const handleTableHeaderClick = (event) => {
        const target = event.currentTarget
        const id = target.getAttribute('data-id')

        if (id === sortBy) {
            switch (sortOrder) {
                case 'ASC':
                    setSortOrder('Desc')
                    break;
                case 'DESC':
                    setSortOrder(undefined);
                    setSortBy(undefined)
                    break;
                default:
                    break;
            }
        } else {
            setSortBy(id);
            setSortOrder('ASC')
        }

    }

    const tableContext = {
        sortBy,
        sortOrder,
    }

    const eventContext = {
        onTableHeaderClick: handleTableHeaderClick
    }

    let sortedData = [ ... data];
    const sortOrderModifier = sortOrder === 'ASC' ? 1 : -1; 
    switch (sortBy){
        case "Name":
            sortedData = sortedData.sort((a, b) => {
                const aName = `${a.name.first} ${a.name.last}`;
                const bName = `${b.name.first} ${b.name.last}`;
                return aName.localeCompare(bName) * sortOrderModifier;
            })
            break;
        case "Email":
            sortedData = sortedData.sort((a, b) => a.email.localeCompare(b.email) * sortOrderModifier)
            break;
        case "Phone":
            sortedData = sortedData.sort((a, b) => a.phone.localeCompare(b.phone) * sortOrderModifier)
            break;
        case "Nationality":
            sortedData = sortedData.sort((a, b) => a.nat.localeCompare(b.nat) * sortOrderModifier)
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