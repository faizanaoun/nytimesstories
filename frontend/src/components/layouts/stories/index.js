import React, { useEffect, useState } from 'react';
import "./style.css"
import { getDateAndTime } from '../../../functions/common';
import { fetchAllStories } from '../../../api/apis/stories';
import { Loader } from '../../common';

const Index = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchStories()
    }, [])

    const fetchStories = async () => {
        setLoading(true)
        const response = await fetchAllStories()
        setData(response?.data)
        setLoading(false)
    }

    return (
        <div className='stories__main'>
            <div className='stories__main__title'>Stories</div>
            {loading ?
                <div className='loader__container'>
                    <Loader />
                </div>
                : <div className='cards__section row'>
                    {data?.map((item, index) => {
                        return <div className='col-md-3 p-2'>
                            <div class="card p-0 card__main">
                                <img src={item?.multimedia?.[0]?.url} class="card-img-top card_img w-100" alt="caption" />
                                <div class="card-body">
                                    <h5 class="card-title">{item?.title}</h5>
                                    <p class="card-text">{item?.abstract}</p>
                                    <div className='d-flex justify-content-between align-items-end'>
                                        <div>
                                            <a href={item?.url} target='_blank' class="btn btn-primary">Go to details</a>
                                        </div>
                                        <div className='time-text'>
                                            {getDateAndTime(item?.created_date)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>}
        </div>
    )
}

export default Index