import React, { useState } from 'react';
import style from './BodyContent.module.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

interface RightSideProps {
  filters: {
    personalInfoFilter: string[];
    educationFilter: string[];
  };
}

function RightSide({ filters }: RightSideProps) {
    const [showMenu, setShowMenu] = useState(false)
    const candidates = [
        {
            name: "Aaliyah Sanderson",
            city: "Riyadh",
            country: "Saudi Arabia",
            education: "Bachelor",
            university: "Cambridge University",
            year: ["2023", "2023"],
            state: ["#top_candidate", "#top_candidate"],
            tags: ["New York", "Marketing", "London"],
        },
        {
            name: "Fatma Khalil",
            city: "Cairo",
            country: "Egypt",
            education: "Diploma",
            university: "Information Technology Institute",
            year: ["2022", "2023"],
            state: ["#top_candidate", "#top_candidate"],
            tags: ["Egypt", "Frontend", "MERN Stack"],
        },
        {
            name: "John Doe",
            city: "Boston",
            country: "USA",
            education: "Bachelor",
            university: "MIT",
            year: ["2023", "2023"],
            state: ["#top_candidate", "#top_candidate"],
            tags: ["USA", "Marketing", "New York"],
        },
        {
            name: "Thomas Matt",
            city: "Edinburgh",
            country: "UK",
            education: "Master",
            university: "Harvard University",
            year: ["2023", "2023"],
            state: ["#top_candidate", "#top_candidate"],
            tags: ["UK", "Marketing", "Edinburgh"],
        },
        {
            name: "Kamilia Smith",
            city: "London",
            country: "UK",
            education: "Bachelor",
            university: "Boston University",
            year: ["2023", "2023"],
            state: ["#top_candidate", "#top_candidate"],
            tags: ["UK", "Marketing", "London"],
        },

    ];

    const filteredCandidates = candidates.filter(candidate => {
        return (
            (filters.personalInfoFilter.length === 0 || filters.personalInfoFilter.includes(candidate.country)) &&
            (filters.educationFilter.length === 0 || filters.educationFilter.includes(candidate.education))
        );
    });
    return (
        <div className={style["right__side__div"]}>
            <div className={style["filter__nav"]}>
                <div className={style["menu"]}>
                    <a onClick={() => {
                        setShowMenu(!showMenu)
                    }}><h5>Opportunity Browsing</h5><i className="fa-solid fa-angle-down"></i></a>
                    <div className={style["the__menu"]} style={{ display: showMenu ? "block" : "none" }}>
                        <ul>
                            <li>
                                <p>Applied</p>
                                <span>1745</span>
                            </li>
                            <li>
                                <p>Shortlisted</p>
                                <span>453</span>
                            </li>
                            <li>
                                <p>Technical Interview</p>
                                <span>123</span>
                            </li>
                            <li>
                                <p>Opportunity Browsing</p>
                                <span>243</span>
                            </li>
                            <li>
                                <p>Video Interview I</p>
                                <span>25</span>
                            </li>
                            <li>
                                <p>Video Interview II</p>
                                <span>25</span>
                            </li>
                            <li>
                                <p>Video Interview III</p>
                                <span>25</span>
                            </li>
                            <li>
                                <p>Offer</p>
                                <span>25</span>
                            </li>
                            <li>
                                <p>Withdrawn</p>
                                <span>25</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={style["icon__interveiw__btn"]}>
                    <div className={style["nav__icons"]}>
                        <i className='bx bx-purchase-tag'></i>
                        <i className='bx bx-user-x' ></i>
                        <i className='bx bx-user-check'></i>
                        <i className='bx bx-user-voice' ></i>
                        <i className='bx bx-envelope'></i>
                        <a><h5>Move To Video Interview</h5><i className="fa-solid fa-angle-down"></i></a>
                    </div>
                </div>
            </div>
            <div className={style["candidates__box"]}>
                <div className={style["candidates__content"]}>
                    <div className={style["candidates__box__header"]}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label={`${filteredCandidates?.length} Candidates`}
                        />
                        <div className={style["candidates__state"]}>
                            <p>Qualified</p>
                            <p>Task <span>25</span></p>
                            <p>Disqualified <span>78</span></p>
                        </div>
                    </div>
                    {filteredCandidates.map(candidate => (
                        <div className={style["candidates__details"]}>
                            <div className={style["left__info"]}>
                                <FormControlLabel control={<Checkbox />} label=""/>
                                <p>{candidate.name.split(" ").map(namePart => namePart.charAt(0).toUpperCase()).join("")}</p>
                            </div>
                            <div className={style["right__info"]}>
                                <h3>{candidate.name}</h3>
                                <p>{candidate.city}, {candidate.country}</p>
                                <p>{candidate.education} - {candidate.university} ({candidate.year.join(' - ')})</p>
                                <p><span>{candidate.state[0]}</span> <span>{candidate.state[1]}</span></p>
                                <p><span>{candidate.tags[0]}</span> <span>{candidate.tags[1]}</span> <span>{candidate.tags[2]}</span></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RightSide;
