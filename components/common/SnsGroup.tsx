import React from "react";
import ButtonSns from "../common/ButtonSns"
const SnsGroup: React.FC = ()=> {

  type sns =  {
    name: string,
    href: string,
    icon: string,
    bgColor: string
  }
  type snsList = sns[]

  const lists: snsList = [
    {
      name: 'Twitter',
      href: 'aaa',
      icon: '/static/images/sns/facebook-brands.svg',
      bgColor: "#3c94d8"
    },
    {
      name: 'FaceBook',
      href: 'aaa',
      icon: '/static/images/sns/facebook-brands.svg',
      bgColor: "#3d5897"
    },
    {
      name: 'Line',
      href: 'aaa',
      icon: '/static/images/sns/facebook-brands.svg',
      bgColor: "#01c300"
    },
    
  ]

  return (
    <ul className="flex space-x-2 mt-12 justify-center">
        {
          lists.map((sns)=> {
            return (
              <li>
              <ButtonSns href={sns.href} bgColor={sns.bgColor} name={sns.name} icon={sns.icon} >
                {sns.name}
              </ButtonSns>
              </li>
            )
          })
        }
    </ul>
  )
}

export default SnsGroup;