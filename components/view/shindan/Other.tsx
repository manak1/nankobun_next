import React from 'react';
import { FirebaseData } from "../../../lib/firebase"
import Ogp from "../../common/Ogp"

type Props = {
  otherShindanList: FirebaseData[]
}

const Other:React.FC<Props> = ({otherShindanList}) => {
  return (
    <section className="pt-12">
      <h2 className="text-xl font-bold text-center">👀 ほかの診断</h2>
      <ul className="space-y-6 mt-8">
        {
          otherShindanList? 
          otherShindanList.map((shindan,index)=> {
            return (
              <li key={index}>
                <Ogp  shindanData={shindan} />
              </li>
            )
          })
          :
          ''
        }

      </ul>
    </section>
  );
};

export default Other;