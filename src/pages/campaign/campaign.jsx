import React, { useContext } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { ListDataContext } from '../../context/ArrayContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCalendar } from '@fortawesome/free-solid-svg-icons'
import "./campaign.scss";

const Campaign = () => {

    const { list } = useContext(ListDataContext);

    const location = useLocation()
    const navigate = useNavigate()

    const item = list?.filter((item) => item.id === location.state.id)

    return (
        <div className="campaign-container">

            <div className="campaign-container__wrapper">
                <div className="campaign-container__wrapper__top">
                    <FontAwesomeIcon icon={faArrowLeft} beat onClick={() => navigate("/")} />

                    <div><FontAwesomeIcon icon={faCalendar} /><span> {item[0]?.date ?? ""}</span></div>

                </div>
                <div className="name">  {item[0]?.name ?? ""}</div>
                <div className="campaign-container-wrapper__bottom">{item[0]?.description ?? ""}</div>


            </div>


        </div >
    )
}

export default Campaign