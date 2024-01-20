import { useEffect, useState } from "react";
import { Search } from "./Search";
import { Trow } from "./Trow";
import { useApp } from "./useApp";
import { DefaultTrow } from "./DefaultTrow";

export type devProps = {
    name: string,
    email: string,
    company: string,
    salary: number
}

export function Table() {

    const [devs, setDevs] = useState<devProps[]>()
    const {search} = useApp();

    

    async function fetchDevs() {
        const arrayDevs: devProps[] = [
            {name: 'Jonatas', email: 'jonatas@gmail.com', company: 'Daju', salary: 1000},
            {name: 'Caio', email: 'caio@gmail.com', company: 'Daju', salary: 1000},
            {name: 'Gabriel', email: 'gab@gmail.com', company: 'Daju', salary: 1000},
            {name: 'Maryeli', email: 'mary@gmail.com', company: 'Daju', salary: 1000},
            {name: 'Nailson', email: 'nailson@gmail.com', company: 'Daju', salary: 1000},
            {name: 'Gaby', email: 'gaby@gmail.com', company: 'Daju', salary: 1000},
            {name: 'Carlos', email: 'carlos@gmail.com', company: 'Daju', salary: 1000}
        ]

        setDevs(arrayDevs)

    }
    
    const filteredDevs = devs?.filter(dev => {
        if (search.trim() === '') {
            return true;
        }

        return (
            dev.name.toLowerCase().includes(search.toLowerCase()) ||
            dev.email.toLowerCase().includes(search.toLowerCase()) ||
            dev.company.toLowerCase().includes(search.toLowerCase())
        ) ? dev : null;

    })


    useEffect(() => {
        fetchDevs()
    }, []);

    return (
        <>
        <Search/>
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Empresa</th>
                    <th>Salario</th>
                </tr>
            </thead>
            <tbody>
                {
                    filteredDevs && filteredDevs.length > 0 ? (
                        filteredDevs.map((dev) => (
                            <Trow dev={dev} />
                        ))
                    ) : (
                        <DefaultTrow />
                    )
                }
            </tbody>
        </table>
        </>
    )
    
    
}