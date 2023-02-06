import React from 'react'
import Image from 'next/image';
const RightSidebar:React.FC= () => {
  return (
    <div>
      rightSidebar
      <Image
          src="https://images.livemint.com/img/2022/11/25/1600x900/FBL-WC-2022-MATCH15-POR-GHA-140_1669335533865_1669335533865_1669335544747_1669335544747.jpg"
          alt="Out story pic"
          quality={100}
          width={100}
          height={100}
        />
      </div>
  )
}

export default RightSidebar