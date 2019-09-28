import React from 'react';


const Previous = ({handleClick, isDarkMode}) => {
    return ( 
    <svg 
    onClick={handleClick} 
    width="22" 
    height="21" 
    viewBox="0 0 22 21" 
    fill="none" xmlns="http://www.w3.org/2000/svg"
    >
        <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M10.3376 20.7849L0.183247 10.5454L10.3376 0.305979L13.1778 3.12258L7.80002 8.54544L21.9751 8.54544V12.5454L7.80002 12.5454L13.1778 17.9683L10.3376 20.7849Z" 
        fill={isDarkMode ? 'rgba(255, 255, 255, .8)' : 'black'}
        />
    </svg> 
    );
}
 
const Next = ({handleClick, isDarkMode}) => {
    return (
            <svg 
            onClick={handleClick} 
            alt="Next" 
            width="22" 
            height="21" 
            viewBox="0 0 22 21" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
                <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M12.2088 0.0202637L22.3631 10.2597L12.2088 20.4992L9.36858 17.6826L14.7464 12.2597H0.571289V8.25973H14.7464L9.36858 2.83686L12.2088 0.0202637Z" 
                fill={isDarkMode ? 'rgba(255, 255, 255, .8)' : 'black'}/>
            </svg> 
             );
}
 
const Random = ({handleClick, isDarkMode}) => {
    return (
            <svg 
            onClick={handleClick} 
            width="27" 
            height="24" 
            viewBox="0 0 27 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
                <path 
                d="M0 0L3.57143 3.57143L7.7486e-05 7.14286" 
                transform="translate(20.5713 2)" 
                stroke={isDarkMode ? 'rgba(255, 255, 255, .8)': 'black'} 
                strokeWidth="3"
                />
                <path d="M0 0L3.57143 3.57143L7.7486e-05 7.14286" transform="translate(20.5713 14.8572)" stroke={isDarkMode ? 'rgba(255, 255, 255, .8)': 'black'} strokeWidth="3"/>
                <path d="M0 12.3214C5.03247 12.3214 10.0649 9.91071 11.5747 6.16059C13.0844 2.41047 17.1104 7.37802e-05 22.1429 0" transform="translate(0.571289 18.4285) scale(1 -1)" stroke={isDarkMode ? 'rgba(255, 255, 255, .8)': 'black'} strokeWidth="4"/>
                <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M22.1431 4C19.2583 4 16.9155 4.88867 15.3193 6.28589C14.4653 5.53833 13.8252 4.64478 13.4302 3.66406C13.3286 3.41235 13.2163 3.16724 13.0933 2.92822C15.4746 1.03613 18.6689 0 22.1431 0V4ZM13.0933 9.64331C11.9321 8.7207 10.9639 7.59473 10.251 6.28589C10.0537 6.64795 9.87598 7.02393 9.71924 7.41357C9.68506 7.49829 9.64844 7.58276 9.6084 7.66675C10.7573 8.46265 11.7734 9.43262 12.5425 10.5715C12.7437 10.2737 12.9277 9.96436 13.0933 9.64331ZM9.6084 13.4763C9.09961 12.4043 8.12012 11.3911 6.73145 10.5715C6.55762 10.6741 6.37744 10.7737 6.19092 10.8701C4.41309 11.7878 2.21338 12.3215 0 12.3215V16.3215C2.81885 16.3215 5.65186 15.6497 8.02588 14.4246C8.57275 14.1423 9.10352 13.8262 9.6084 13.4763Z" 
                transform="translate(0.571289 3.57129)" 
                fill={isDarkMode ? 'rgba(255, 255, 255, .8)': 'black'}/>
            </svg>
            );
}
 

export  {
    Previous,
    Next,
    Random
}