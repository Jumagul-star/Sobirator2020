import React, { useEffect } from 'react'
import { Container } from 'reactstrap';
import List from '../components/List';
import { fetchData } from '../redux/actions';
import { connect } from 'react-redux';

function Account(props) {
    const {fetchData} = props;
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    if(props.err) {
        return <h4 color='text-danger'>
            {props.err.message}
        </h4>
    }
    return (
        <Container>
            <List data={props.data}/>
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
