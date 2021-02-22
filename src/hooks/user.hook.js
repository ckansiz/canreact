/**
 * 
 * Custom Hook Example
 * 
 */

import { useState, useEffect } from 'react';
import axios from 'axios';

export function GetUserHook() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isLoading) {
            axios.get(`https://jsonplaceholder.typicode.com/users`)
                .then(res => {
                    const persons = res.data;
                    setUsers(persons);
                    setIsLoading(false);
                });
        }
        console.log(`akıyor`)
    }, []);

    return users;
}

