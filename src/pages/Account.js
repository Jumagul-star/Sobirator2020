import React, { useEffect, useState } from 'react'
import { Container } from 'reactstrap';
import Pagination from './Pagination';
import List from '../components/List';
import { fetchData } from '../redux/actions';
import { connect } from 'react-redux';

function Account(props) {

    const {fetchData} = props;
    const {data} = props;

    //? Pagination 
    const [applications, setApplications] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [applicationsPerPage] = useState(3);

    useEffect(() => {
        fetchData();
        setApplications(data);
    }, [fetchData]);

    if(props.err) {
        return <h4 color='text-danger'>
            {props.err.message}
        </h4>
    }

    //? Get current applications
    const indexOfLastApplication = currentPage * applicationsPerPage;
    const indexOfFirstApplication = indexOfLastApplication - applicationsPerPage;
    const currentApplication = data.slice(indexOfFirstApplication, indexOfLastApplication)

    //?Change page
    const paginate = (pageNumber)=> setCurrentPage(pageNumber)

    return (
        <Container>
            <List data={currentApplication}/>
            <Pagination 
                applicationsPerPage={applicationsPerPage} 
                totalApplications={data.length}
                paginate={paginate}
            />
        </Container>
    )
}

const mapStateToProps = (state) => {
    const {data, loading, err} = state.RecycleReducer;
    return { data, loading, err }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: ()=>dispatch(fetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)
