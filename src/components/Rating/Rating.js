import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Rating({rating}){
  return !rating ? (
    <div></div>
  ) : (
    <div>
      <span className="mx-1">
        <FontAwesomeIcon
          icon={
            rating >= 1
              ? ['fas','star']
              : rating >= 0.5
              ? ['fas','star-half-alt']
              :['far','star']
          }
          color="white" 
        />
      </span>
      <span className="mx-1">
        <FontAwesomeIcon
          icon={
            rating >= 2
              ? ['fas','star']
              : rating >= 1.5
              ? ['fas','star-half-alt']
              :['far','star']
          }
          color="white" 
        />
      </span>
      <span className="mx-1">
        <FontAwesomeIcon
          icon={
            rating >= 3
              ? ['fas','star']
              : rating >= 2.5
              ? ['fas','star-half-alt']
              :['far','star']
          }
          color="white" 
        />
      </span>
      <span className="mx-1">
        <FontAwesomeIcon
          icon={
            rating >= 4
              ? ['fas','star']
              : rating >= 3.5
              ? ['fas','star-half-alt']
              :['far','star']
          }
          color="white" 
        />
      </span>
      <span className="mx-1">
        <FontAwesomeIcon
          icon={
            rating >= 5
              ? ['fas','star']
              : rating >= 4.5
              ? ['fas','star-half-alt']
              :['far','star']
          }
          color="white" 
        />
      </span>
    </div>
  );
}

export default Rating;