import { DefaultTrow } from "./DefaultTrow";
import { devProps } from "./Table";

type trowTypes = {
    dev: devProps
}

export function Trow({dev}: trowTypes) {
    if (!dev) {
        return (
            <DefaultTrow/>
        )
    }else{
        return ( 
            <tr>
                <td>{dev.name}</td>
                <td>{dev.email}</td>
                <td>{dev.company}</td>
                <td>{dev.salary}</td>
            </tr>
        )
    }
}
