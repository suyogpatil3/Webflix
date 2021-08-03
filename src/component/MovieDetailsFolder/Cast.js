import React from 'react';

const Cast = ({castMembers}) => {
    return (
        <div>
            <h2 className="cast_heading">Cast Details</h2>
            <div className="cast_cards">
            {
                castMembers.map((el) => {
                    return <div className="cast_poster">
                                {   el.profile_path ?
                                    <img src={`https://image.tmdb.org/t/p/w92/${el.profile_path}`} className="details_image"/>
                                    : <div className="missing_cast"><img src="https://img.icons8.com/pastel-glyph/64/000000/person-male--v3.png" className="missing_pic"/></div>
                                } 
                                <div className="character">
                                    <h5 className="cast_name">{el.original_name}</h5>
                                    <p className="character_name">"{el.character}"</p>
                                </div>
                            </div>
                })
            }
            </div>
        </div>
    )
}

export default Cast
