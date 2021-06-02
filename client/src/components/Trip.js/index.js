import React from "react";

function Trip ({children}) {
  return (
    <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <strong className="d-block text-gray-dark">
              <h4>{children.tripName}</h4>
              </strong>
            <strong className="d-block text-gray-dark">{children.destination}  ({children.startDate}) - {children.endDate})</strong>
    </div> 
  )    
}

export default Trip