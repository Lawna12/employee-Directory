import React from "react";
import data from "../../data.json"
import TableRow  from "./subComponent/TableRow/tableRow";
import TableHeader from "./subComponent/TableHeader/tableHeader";
import { EventContext } from "./tableContext";

export default function Table() {
    const handleTableHeaderClick = (id) => {
        console.log(id);
    }

    const eventContext = {
        onTableHeaderClick: handleTableHeaderClick
    }
    return (
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
                        data.map((person) => (
                            <TableRow
                                    key={person.phone}
                                    person={person}
                            />
                        ))
                    }
                </tbody>
            </table>
        </EventContext.Provider>
    )
}