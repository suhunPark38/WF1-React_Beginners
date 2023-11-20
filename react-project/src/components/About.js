import React from 'react';
import Header from './Header';

import "../css/About.css";


export const About = () => (
            <>
            <Header />
             <div className="box1">
                 <h1>리액트 초보만(4/4)</h1>
                 <ul>
                     <li>팀장: 박수훈</li>
                     <li>팀원: 김기범</li>
                     <li>팀원: 김민규</li>
                     <li>팀원: 박태민</li>
                 </ul>

             </div>
             <div className="box2">
             <p>이 컴퓨터 견적 데이터는 가상의 데이터이며, 실제 데이터와 다를 수 있습니다.</p>
             </div>

             <div className="box3">

             <p>컴퓨터 견적 추천 사이트 입니다.</p>
                 <p>어쩌구 저쩌구 </p>

             </div>

             </>
         );






