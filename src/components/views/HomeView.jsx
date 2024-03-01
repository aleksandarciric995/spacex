import axios from 'axios'
import { useState, useEffect } from 'react';
import api from '../../services/api';
import Company from '../company/Company';
import Loading from '../../loading/Loading';
import Error from '../error/Error';

const HomeView = () => {
    const [companyInfo, setCompanyInfo] = useState(undefined);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get(`/company`)
        .then(res => {
            // console.log(res.data);
            // console.log(typeof(res.data));
            setCompanyInfo(res.data);
        })
        .catch((error) => {
            setError(true);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [])
    
    return <>
      <h1>HomeView</h1>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <Company companyInfo={companyInfo} />
      )}
    </>
}

export default HomeView;

