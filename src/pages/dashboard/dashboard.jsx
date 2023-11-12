import React, { useContext, useEffect, useReducer, useState } from "react";
import Entries from "./entries/entries";
import CustomInput from "../../components/custom-input/custom-input";
import CampaignSvg from "../../assets/campaign.svg";
import "./dashboard.scss";
import CustomButton from "../../components/custom-button/custom-button";
import { ListDataContext } from "../../context/ArrayContext";


const compareDate = (enteredDate) => {

    const currentDate = new Date();
    const convertEnteredDate = new Date(enteredDate);

    return convertEnteredDate >= currentDate;
};

export const Dashboard = () => {

    const [details, setDetails] = useState({ name: "", description: "", date: "" });
    const [errors, setErrors] = useState({ name: "", description: "", date: "" });
    const { list, setList } = useContext(ListDataContext)

    const onChange = (e) => {

        if (e.target.name === "date") {
            if (!compareDate(e.target.value)) {
                setErrors((prev) => ({ ...prev, [e.target.name]: "Please enter valid date" }))
                return;
            }

        }

        setDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    };

    const addNewEntry = (e) => {

        e.preventDefault()

        for (let key in errors) {
            if (errors[key]) {
                alert("Please clear all the errors");
                return;
            }
        }

        const newId = Math.floor(Math.random() * 100);
        const newObject = {
            id: newId,
            ...details,
        };

        setList((prev) => ([...prev, newObject]))
        setDetails((prev) => ({ ...prev, name: "", description: "", date: "" }))
    };

    useEffect(() => {

        let isNewDateValid = compareDate(details.date);
        isNewDateValid && setErrors((prev) => ({ ...prev, date: "" }))

    }, [details.date])

    return (
        <div className="body-wrapper">
            <div className="body-wrapper__top">
                <div className="title">Create New Campaign</div>

                <div className="body-wrapper__top__wrapper">
                    <div className="body-wrapper__top__left">
                        <form onSubmit={addNewEntry} >

                            <CustomInput
                                type="text"
                                name="name"
                                onInputChange={onChange}
                                label="Enter Name"
                                value={details.name}
                                errors={errors.name}
                                required={true}
                            />
                            <CustomInput
                                type="text"
                                name="description"
                                onInputChange={onChange}
                                label="Enter Description"
                                value={details.description}
                                errors={errors.description}
                                required={true}
                            />
                            <CustomInput
                                type="date"
                                name="date"
                                onInputChange={onChange}
                                label="Enter Date"
                                value={details.date}
                                errors={errors.date}
                                required={true}
                            />

                            <div className="body-wrapper__top__left__button">
                                <CustomButton type="submit" text="Create Campaign" />
                            </div>
                        </form>
                    </div>

                    <div id="animation" className="body-wrapper__top__right">
                        <img src={CampaignSvg} />
                    </div>
                </div>
            </div>
            <div className="body-wrapper__bottom">
                <div className="title"><img width="40" height="40" src="https://img.icons8.com/external-filled-outline-perfect-kalash/64/external-campaign-business-and-marketing-filled-outline-perfect-kalash.png" alt="external-campaign-business-and-marketing-filled-outline-perfect-kalash" /> Recent Campaigns</div>
                <Entries list={list} />
            </div>
        </div>
    );
};
