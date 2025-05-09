import { useEffect, useState } from 'react';
import axios from 'axios';

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';

export function UniqueRolesBarChart(){
    const [uniqueRoles, setUniqueRoles] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/unique_roles')
        .then(response => setUniqueRoles(response.data))
        .catch(error => console.error('Erro:', error));

    }, []);

    console.log(uniqueRoles);

    return(
        <>
            <ResponsiveContainer width="50%" height={300}>
            <BarChart data={uniqueRoles} >
                <CartesianGrid strokeDasharray="5 5" />
                <XAxis dataKey="cargo" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="quant" fill="#8884d8" label={{position: 'insideBottom', fill:"#000"}}/>
            </BarChart>
            </ResponsiveContainer>
        </>
    )
}