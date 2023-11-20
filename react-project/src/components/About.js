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
             <p>이 사이트는 React 라이브러리를 통해 작성되었습니다.</p>
             </div>

             <div className="box3">
                 <p>컴퓨터 견적 추천 사이트 입니다.</p>
                 <p>사용자의 응답에 따라 적절한 컴퓨터 부품을 추천해드립니다.</p>
                 <p>컴퓨터 견적 추천 외에도, 부품 페이지에서 컴퓨터 부품을 검색하거나 견적 페이지에서 컴퓨터 견적을 구경할 수 있습니다.</p>
             </div>

             </>
         );






