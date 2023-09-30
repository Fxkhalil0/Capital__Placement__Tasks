import React, { useState } from 'react';
import style from './BodyContent.module.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

interface LeftSideProps {
  personalInfoFilter: string[];
  educationFilter: string[];
  onFilterChange: (filterType: string, value: string) => void;
}

function LeftSide({ personalInfoFilter, educationFilter, onFilterChange }: LeftSideProps) {
    const [personalInfoVisible, setPersonalInfoVisible] = useState(false);
    const [educationVisible, setEducationVisible] = useState(false);
    const [workExperienceVisible, setWorkExperienceVisible] = useState(false);
    const [activityFilterVisible, setActivityFilterVisible] = useState(false);
    const [advancedFilterVisible, setAdvancedFilterVisible] = useState(false);

    const toggleVisibility = (stateSetter: React.Dispatch<React.SetStateAction<boolean>>) => {
        stateSetter((prev) => !prev);
      };
    
      const handlePersonalInfoFilterChange = (value: string) => {
        onFilterChange('personalInfoFilter', value);
      };
    
      const handleEducationFilterChange = (value: string) => {
        onFilterChange('educationFilter', value);
      };
    return (
        <div className={style["left__side__div"]}>
            <h2>London Internship Program</h2>
            <p>London</p>
            <div className={style["search__input"]}>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input placeholder='Serach by name, edu, exp or #tag' />
                <i className="fa-solid fa-circle-exclamation"></i>
            </div>
            <div className={style["filter__box"]}>
                <div className={style["box__header"]}>
                    <h4>Filter</h4>
                    <p>0 Selected</p>
                </div>
                <div
                    className={`${style["box__items"]} ${personalInfoVisible ? style["open"] : ""}`}
                    onClick={() => toggleVisibility(setPersonalInfoVisible)}>
                    <div className={style["box__content"]}>
                        <i className="fa-regular fa-file-lines"></i>
                        <p>Personal Information</p>
                    </div>
                    <i className="fa-solid fa-chevron-down" style={{ color: '#1D4ED8' }}></i>
                </div>
                {personalInfoVisible && (
                    <ul className={style["filter__menu"]}>
                        <li><FormControlLabel onChange={()=>{
                            handlePersonalInfoFilterChange('Saudi Arabia')
                        }} control={<Checkbox />} label="Saudi Arabia" /></li>
                        <li><FormControlLabel onChange={()=>{
                            handlePersonalInfoFilterChange('Egypt')
                        }} control={<Checkbox />} label="Egypt" /></li>
                        <li><FormControlLabel onChange={()=>{
                            handlePersonalInfoFilterChange('USA')
                        }} control={<Checkbox />} label="USA" /></li>
                        <li><FormControlLabel onChange={()=>{
                            handlePersonalInfoFilterChange('UK')
                        }} control={<Checkbox />} label="UK" /></li>
                    </ul>
                )}
                <div
                className={`${style["box__items"]} ${educationVisible ? style["open"] : ""}`}
                onClick={() => toggleVisibility(setEducationVisible)}>
                    <div className={style["box__content"]}>
                        <i className="fa-regular fa-file-lines"></i>
                        <p>Education</p>
                    </div>
                    <i className="fa-solid fa-chevron-down" style={{ color: '#1D4ED8' }}></i>
                </div>
                {educationVisible && (
                    <ul className={style["filter__menu"]}>
                        <li><FormControlLabel onChange={()=>{
                            handleEducationFilterChange('Master')
                        }} control={<Checkbox />} label="Master" /></li>
                        <li><FormControlLabel onChange={()=>{
                            handleEducationFilterChange('Bachelor')
                        }} control={<Checkbox />} label="Bachelor" /></li>
                        <li><FormControlLabel onChange={()=>{
                            handleEducationFilterChange('Diploma')
                        }} control={<Checkbox />} label="Diploma" /></li>
                    </ul>
                )}
                <div
                className={`${style["box__items"]} ${workExperienceVisible ? style["open"] : ""}`}
                onClick={() => toggleVisibility(setWorkExperienceVisible)}>
                    <div className={style["box__content"]}>
                        <i className="fa-regular fa-file-lines"></i>
                        <p>Work Experience</p>
                    </div>
                    <i className="fa-solid fa-chevron-down" style={{ color: '#1D4ED8' }}></i>
                </div>
                {workExperienceVisible && (
                    <ul className={style["filter__menu"]}>
                        <li><FormControlLabel control={<Checkbox />} label="Lorem" /></li>
                        <li><FormControlLabel control={<Checkbox />} label="Lorem" /></li>
                    </ul>
                )}
                <div
                className={`${style["box__items"]} ${activityFilterVisible ? style["open"] : ""}`}
                onClick={() => toggleVisibility(setActivityFilterVisible)}>
                    <div className={style["box__content"]}>
                        <i className="fa-regular fa-file-lines"></i>
                        <p>Activity Filter</p>
                    </div>
                    <i className="fa-solid fa-chevron-down" style={{ color: '#1D4ED8' }}></i>
                </div>
                {activityFilterVisible && (
                    <ul className={style["filter__menu"]}>
                        <li><FormControlLabel control={<Checkbox />} label="Lorem" /></li>
                        <li><FormControlLabel control={<Checkbox />} label="Lorem" /></li>
                    </ul>
                )}
                <div
                className={`${style["box__items"]} ${advancedFilterVisible ? style["open"] : ""}`}
                onClick={() => toggleVisibility(setAdvancedFilterVisible)}>
                    <div className={style["box__content"]}>
                        <i className="fa-regular fa-file-lines"></i>
                        <p>Advanced Filter</p>
                    </div>
                    <i className="fa-solid fa-chevron-down" style={{ color: '#1D4ED8' }}></i>
                </div>
                {advancedFilterVisible && (
                    <ul className={style["filter__menu"]}>
                        <li><FormControlLabel control={<Checkbox />} label="Lorem" /></li>
                        <li><FormControlLabel control={<Checkbox />} label="Lorem" /></li>
                    </ul>
                )}
            </div>
        </div>

    );
}

export default LeftSide;
