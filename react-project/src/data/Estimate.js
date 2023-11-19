/*
견적 데이터가 저장될 공간.
원래는 products에서 배열을 import해서 작성하려고 했으나 간단하지 않아 일단은 일일히 작성함.
type에는 {견적 종류+구분 코드}로 기입. 그래야 검색할 때 안 헷갈림.
 */
const Estimates = [
    {type:'사무용 견적1', cpu:'AMD 애슬론 3000G', gpu:'내장 그래픽', board:'ASUS PRIME A320M-K', ram:'삼성전자 DDR4-3200 (4GB)', ssd:'삼성전자 PM9A1 M.2 NVMe (256GB)', power:'잘만 Wattbit II 400W', computerCase:'darkFlash DK110', fan:'기본 쿨러'},
    {type:'사무용 견적2', cpu:'AMD 애슬론 3000G', gpu:'내장 그래픽', board:'GiGABYTE A520M K V2', ram:'삼성전자 DDR4-3200 (4GB)', ssd:'Western Digital WD BLACK SN770 M.2 NVMe (500GB)', power:'잘만 Wattbit II 400W', computerCase:'darkFlash DK110', fan:'기본 쿨러'},
    {type:'사무용 견적3', cpu:'인텔 코어 i3-13세대 13100 (랩터레이크)', gpu:'내장 그래픽', board:'ASUS PRIME A320M-K', ram:'삼성전자 DDR4-3200 (8GB) x2', ssd:'SK하이닉스 Gold P31 M.2 NVMe (500GB)', power:'잘만 Wattbit II 400W', computerCase:'DAVEN 아이시스 3.0', fan:'기본 쿨러'},
    {type:'일상용 견적1', cpu:'AMD 라이젠5-4세대 5600X (버미어)', gpu:'내장 그래픽', board:'ASUS PRIME H610M-K D4 인텍앤컴퍼니', ram:'삼성전자 DDR4-3200 (8GB) x2', ssd:'CORSAIR MP600 PRO LPX M.2 NVMe 2280 8TB', power:'마이크로닉스 Classic II 풀체인지 500W 80PLUS BRONZE 230V EU', computerCase:'3RSYS R200 (블랙)', fan:'3RSYS Socoool RC340'},
    {type:'일상용 견적2', cpu:'인텔 코어i3-13세대 13100F (랩터레이크)', gpu:'MSI 지포스 RTX 3050 벤투스 2X XS OC D6 8GB', board:'ASUS PRIME H610M-K D4 인텍앤컴퍼니', ram:'CORSAIR DDR5-5600 CL40 VENGEANCE RGB BLACK', ssd:'SK하이닉스 Gold P31 M.2 NVMe (1TB)', power:'쿨러마스터 MWE 600 BRONZE V2 230V', computerCase:'마이크로닉스 Master M60 메쉬 (블랙)', fan:'DEEPCOOL AG400'},
    {type:'일상용 견적3', cpu:'인텔 코어i5-12세대 12400F (엘더레이크)', gpu:'ZOTAC GAMING 지포스 RTX 4060 Ti TWIN Edge D6 8GB', board:'MSI PRO H610M-C EX', ram:'마이크론 Crucial DDR4-3200 CL22 대원씨티에스 (8GB)x2', ssd:'삼성전자 PM9A1 M.2 NVMe 병행수입 (1TB)', power:'마이크로닉스 Classic II 풀체인지 700W 80PLUS BRONZE 230V EU', computerCase:'앱코 NCORE G30 트루포스 (블랙)', fan:'앱코 타이폰 120X5'},
    {type:'고사양 견적1', cpu:'인텔 코어i5-13세대 13600K (랩터레이크)', gpu:'ZOTAC GAMING 지포스 RTX 3070 Ti D6X 8GB', board:'ASUS TUF Gaming B550-PLUS STCOM', ram:'삼성전자 DDR4-3200 (16GB)x2', ssd:'SK하이닉스 Gold P31 M.2 NVMe (1TB)', power:'마이크로닉스 Classic II 풀체인지 700W 80PLUS BRONZE 230V EU', computerCase:'darkFlash DLX21 RGB MESH 강화유리 (블랙)', fan:'맥스엘리트 MOTHRA 360 AIO ARGB (BLACK)'},
    {type:'고사양 견적2', cpu:'인텔 코어i5-13세대 13400F (랩터레이크)', gpu:'갤럭시 GALAX 지포스 RTX 4060 Ti EX BLACK OC D6 8GB', board:'MSI MAG B760M 박격포 맥스 WIFI', ram:'마이크론 Crucial DDR5-5600 CL46 PRO 패키지 대원씨티에스 (32GB(16Gx2))', ssd:'삼성전자 980 PRO M.2 NVMe (1TB)', power:'잘만 MegaMax 600W 80PLUS STANDARD', computerCase:'BRAVOTEC GUARDIAN 3100M V2 타이탄 글래스 (블랙)', fan:'쿨러마스터 HYPER 620S ARGB'},
    {type:'고사양 견적3', cpu:'AMD 라이젠5-5세대 7500F (라파엘)', gpu:'XFX 라데온 RX 6700 SWFT 309 CORE D6 10GB', board:'GIGABYTE B760M E 피씨디렉트', ram:'TeamGroup T-Force DDR5-6000 CL38 Delta RGB 화이트 패키지 서린 (32GB(16Gx2))', ssd:'삼성전자 980 PRO M.2 NVMe (1TB)', power:'시소닉 NEW FOCUS GX-850 GOLD Full Modular ATX 3.0', computerCase:'앱코 NCORE G30 트루포스 (블랙)', fan:'darkFlash Twister DX-360 V2.6 ARGB (블랙)'},
    {type:'최고사양 견적1', cpu:'인텔 코어 13세대 i9-13900KS', gpu:'ASUS GeForce RTX 4090 TUF GAMING O24G OC D6X 24GB', board:'ROG MAXIMUS Z690 EXTREME GLACIAL STCOM (인텔Z690/E-ATX)', ram:'G.SKILL DDR5-6400 CL32 TRIDENT Z5 RGB J 패키지 (96GB(48Gx2))', ssd:'CORSAIR MP600 PRO LPX M.2 NVMe 2280 8TB', power:'잘만 MegaMax 600W 80PLUS STANDARD', computerCase:'ABKO SUITMASTER AL1000 그레이 (빅타워)', fan: 'ASUS ROG RYUJIN III 360 ARGB WHITE EDITION'},
    {type:'최고사양 견적2', cpu:'인텔 코어i9-14세대 14900K', gpu:'ASUS GeForce RTX 4090 ROG STRIX O24G GAMING OC D6X 24GB', board:'GIGABYTE Z790 AORUS XTREME 피씨디렉트 (인텔Z790/E-ATX)', ram:'G.SKILL DDR5-6400 CL32 TRIDENT Z5 RGB J 패키지 (96GB(48Gx2))', ssd:'솔리다임 D3-S4520 SATA [7.68TB TLC]', power:'시소닉 PRIME TITANIUM TX-1600 Full Modular ATX 3.0 (ATX/1600W)', computerCase:'LIAN-LI V3000 PLUS (빅타워)', fan:'CORSAIR iCUE H150i ELITE LCD XT WHITE'},
    {type:'최고사양 견적3', cpu:'라이젠9 5세대 라파엘 7950X3D', gpu:'Colorful iGAME GeForce RTX 4080 Neptune OC D6X 16GB', board:'ASRock X670E Taichi 에즈윈 (AMD X670/ATX)', ram:'OLOy DDR5-6200 CL32 BLADE RGB MIRROR 패키지 (32GB(16Gx2))', ssd:'마이크론 Crucial T700 M.2 NVMe 2280 아스크텍 [4TB TLC] Heatsink', power:'be quiet DARK POWER PRO 13 1600W 80PLUS TITANIUM (ATX/1600W)', computerCase:'쿨러마스터 COSMOS C700M 화이트 (빅타워)', fan:'KRAKEN ELITE 360 RGB (BLACK)(CPU쿨러)'},


]
export default Estimates;