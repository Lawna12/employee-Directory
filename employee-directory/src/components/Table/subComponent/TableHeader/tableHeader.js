import React from "react"
import { EventContext } from '../../tableContext'

export default function TableHeader(props) {
    const context = React.useContext{EventContext};

    console.log(context)

    const {
        text
    } = props;

    return (
        <th>{text}</th>
    )
}