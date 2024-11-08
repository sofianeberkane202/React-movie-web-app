import { useEffect, useState } from "react";

export default function StarRating({
    maxRate=5,
    color='blue',
    size=24,
    starClassName='',
    boxClassName,
    textClassName,

    onRate,
    rate

}){


    const [fillStar,setFillStar] = useState(0);


    const starStyle= {
        width: `${size}px`,
        maxRate: maxRate
    }

    return (
        
             <>

                <div 
                className={`flex flex-center-y`}
                style={{gap: '0px'}}

                onMouseLeave={() => setFillStar(0)}
                >    
                    {
                        <> 
                       
                            {
                                Array.from({length:maxRate}, (_,i) => i).
                                map(i => {
                                    return (
                                        <Star
                                        key={`star${i}`}
                                        style={starStyle}
                                        starClassName={starClassName}
                                        color={color}
                                        id={i+1}
                                        onFillStar={setFillStar}
                                        fillStar={fillStar}
                                        onRate={onRate}
                                        rate={rate}
                                        />
                                    )
                                }) 
                            }
                                            
                            <p 
                            className={textClassName}
                            style={{color:color}}
                            >
                                {fillStar || rate ? <span>{fillStar || rate}</span> : ''}
                            </p>

                        </>
                    }

                    
                       
                </div>
            
            
                
            </>
            
        
    )
}

function Star({style,starClassName,color,id,onFillStar,rate,fillStar,onRate}){



    return(
        <span 
            className={`star ${starClassName}`} 
            
            
            onMouseEnter={() => {onFillStar(id)}}
            onClick={() => {onRate(fillStar)}}
            > 
                <svg 
                style={style}
                xmlns="http://www.w3.org/2000/svg" 
                fill={ fillStar>=id || rate>=id ? color :"none"} viewBox="0 0 24 24" 
                stroke={color}
        
                >
                    <path 
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1
                    0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1
                    1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538
                    1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976
                    2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0
                    00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0
                    00.951-.69l1.519-4.674z" strokeLinecap="round" strokeLinejoin="round"
                    strokeWidth="{2}">
                    </path>
                </svg>
            </span>
    )
}