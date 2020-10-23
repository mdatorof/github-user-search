import React from "react"
import ContentLoader from "react-content-loader"


const InfoLoader = () => (
  <ContentLoader 
    speed={2}
    width={820}
    height={305}
    viewBox="0 0 820 305"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="0" y="25" rx="2" ry="2" width="820" height="305" />
  </ContentLoader>
)

export default InfoLoader